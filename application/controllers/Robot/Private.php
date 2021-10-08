<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 2018/11/2
 * Time: 13:37
 */

class Robot_PrivateController extends Robot_SafeController
{


    public function init()
    {
        $this->Robot_ApiLogic = new Robot_ApiLogicController();
    }

    /*
     * 分发
     */
    public function v1Action(){
        $url = $_SERVER['REQUEST_URI'];
        $api = trim(strrchr($url, '/'),'/');

        if(strpos($api,'?'))  $api = substr($api,0,strrpos($api,'?'));

        $api_list = ['asset','orders','order','transfer','address','withdraw','deposit'];

        if(in_array($api,$api_list)){
            $this->$api();
        }else{
            echo '请求地址错误';
        }
    }

    /*
     * 获取资金
     */
    public function asset(){

        $input = coll('get');
        //待验证参数 $mandatory必选 $optional可选
        $mandatory = ['access_key','nonce','sign'];
        $valid_res = self::validSign($input,$mandatory);

        if(!$valid_res['code']) Tool_Fnc::json($valid_res);

        $set = $this->Robot_ApiLogic->asset($valid_res['uid']);
        Tool_Fnc::json($set);

    }

    /*
     * 分发订单
     */
    public function order(){

        $REQUEST_METHOD = $_SERVER['REQUEST_METHOD'];
        if($REQUEST_METHOD=='POST'){
            //下单
            $input = coll('post');
            $this->dealOrder($input);
        }else{
            $input = coll('get');

            //撤销订单
            if ($REQUEST_METHOD == 'DELETE'){
                $this->cancelOrder($input);

            //获取订单
            }else{
                $this->getOrder($input);
            }
        }
    }

    /*
     * 下单
     */
    public function dealOrder($input){
        //待验证参数 $mandatory必选 $optional可选
        $mandatory = ['access_key','nonce','market','price','amount','side','type','sign'];
        $valid_res = self::validSign($input,$mandatory);

        if(!$valid_res['code']) Tool_Fnc::json($valid_res);

        $type = $input['side'] == 'bid'?'in':'out';
        $arr = explode('_',strtolower($input['market']));

        $param = ['price'=>$input['price'],'number'=>$input['amount'],'type'=>$type,'coin_from'=>$arr[0], 'coin_to'=>$arr[1]];
        $user = UserModel::getInstance()->where(['uid'=>$valid_res['uid']])->fRow();

        $set = $this->Robot_ApiLogic->setTrust($param,$user);

        $coin_id = Coin_PairModel::getInstance()->getCoinPairId($input['market']);
        if($set['code']==1000){
            $res['data']['order_id'] = intval($coin_id.$set['id']);
            Tool_Fnc::json($res);
        }

        Tool_Fnc::json($set);
    }


    /*
     * 撤销订单
     */
    public function cancelOrder($input){
        //待验证参数 $mandatory必选 $optional可选
        $mandatory = ['access_key','nonce','order_id','sign'];
        $valid_res = self::validSign($input,$mandatory);

        if(!$valid_res['code']) Tool_Fnc::json($valid_res);

        $ro_id = substr($input['order_id'],0,3);
        $market = Coin_PairModel::getInstance()->getCoinPairName($ro_id);

        $arr = explode('_',$market);
        $param = ['id'=>substr($input['order_id'],3),'coin_from'=>$arr[0],'coin_to'=>$arr[1]];

        $user = UserModel::getInstance()->where(['uid'=>$valid_res['uid']])->fRow();
        $set = $this->Robot_ApiLogic->trustcancel($param,$user);

        if($set['code']=='1000'){
            $res['data'] = true;
            Tool_Fnc::json($res);
        }
        $res['error'] = '获取订单失败或该订单已成交';
        Tool_Fnc::json($res);
    }

    /*
     * 获取订单
     */
    public function getOrder($input){

        //待验证参数 $mandatory必选 $optional可选
        $mandatory = ['access_key','nonce','order_id','sign'];
        $valid_res = self::validSign($input,$mandatory);

        if(!$valid_res['code']) Tool_Fnc::json($valid_res);

        $ro_id = substr($input['order_id'],0,3);
        $market = Coin_PairModel::getInstance()->getCoinPairName($ro_id);

        $set = $this->Robot_ApiLogic->getOrder($input,strtoupper($market));

        if($set['code']) Tool_Fnc::json($set['data']);
        Tool_Fnc::json($set);
    }


    /*
     * 获取所有订单
     */
    public function orders(){
        $input = coll('get');

        //待验证参数 $mandatory必选 $optional可选
        $mandatory = ['access_key','market','nonce','sign'];
        $valid_res = self::validSign($input,$mandatory);

        if(!$valid_res['code']) Tool_Fnc::json($valid_res);

        $set = $this->Robot_ApiLogic->getOrders($valid_res['uid'],strtolower($input['market']));

        if($set['code']) Tool_Fnc::json($set['data']);
        Tool_Fnc::json($set);
    }

    /*
     * 验签
     */
    private static function validSign($input,$mandatory,$optional=[]){

        $i = 0;
        if ($optional) {
            foreach ($optional as $v) if (isset($input[$v])) $i++;
        }

        if (count($input) != (count($mandatory)) + $i) return ['code' => 0, 'msg' => 'Incorrect number of parameters'];
        foreach ($mandatory as $v) if (!isset($input[$v])) return ['code' => 0, 'msg' => 'Lack of parameters'];

        $sign = $input['sign'];
        unset($input['sign']);

        $redis = Cache_Redis::instance();
        $apiKeys = json_decode($redis->get("API_KEY"),true);

        if($apiKeys[$input['access_key']]){
            $apikey = $apiKeys[$input['access_key']];
        }else{

            //redis不存在则写入redis
            $apikey = Orm_Base::getInstance()->table('api_key')->where(['access_key' => $input['access_key'], 'status' => 0])->field('uid,access_key,secret_key,ips')->fRow();

            if(!$apikey) Tool_Fnc::json("该用户不存在");
            $apiKeys[$apikey['access_key']] = [
                'uid'=>$apikey['uid'],
                'secret_key'=>$apikey['secret_key'],
                'ips'=>$apikey['ips']
            ];
            $redis->set('API_KEY', json_encode($apiKeys));
        }

        //验证绑定IP地址
        if ($apikey['ips']) {
            $ip = $_SERVER["REMOTE_ADDR"];
            $ips_arr = explode(',', $apikey['ips']);
            if (!in_array($ip, $ips_arr)) return ['code' => 0, 'msg' => 'Request IP address error'];
        }

        $query = http_build_query($input,'','&');

        $url = $_SERVER['REQUEST_METHOD']=='POST'?$_SERVER['REQUEST_URI']:substr($_SERVER['REQUEST_URI'],0,strrpos($_SERVER['REQUEST_URI'],"?"));
        $valid_sign = hash_hmac('sha256',$url.'|'.$query,$apikey['secret_key']);


        if ($sign != $valid_sign) return ['code' => 0, 'msg' => 'Parameter validation failed'];
        return ['code' => 1, 'msg' => 'Parameter validation success', 'uid' => $apikey['uid']];
    }

}
