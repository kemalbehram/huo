<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 2018/11/2
 * Time: 13:37
 */

class Robot_PublicController extends Ctrl_Base
{
    /*
     * 分发
     */
    public function v1Action(){
        $url = $_SERVER['REQUEST_URI'];
        $api = trim(strrchr($url, '/'),'/');

        if(strpos($api,'?'))  $api = substr($api,0,strrpos($api,'?'));

        $api_list = ['ticker','tickers','markets','depth','trades','ohlc'];
        if($api=='ohlc'){
            $lockfile = APPLICATION_PATH."/shell/911.log";
            file_put_contents($lockfile,date('Y-m-d H:i:s'));
            chmod($lockfile,0666);
//            file_put_contents(APPLICATION_PATH."/shell/911.log",json_encode('22'.'--'.'33'));
        }

        if(in_array($api,$api_list)){
            $this->$api();
        }else{
            echo '请求地址错误';
        }
    }

    /*
     * 获取行情
     */
    public function ticker(){
        $market = strtolower(coll('get','market'));

        $arr = explode('_',$market);

        $trustMo = Trust_CoinModel::getInstance();
        $trustMo->designTable($arr[0]);

        //买一卖一 排除机器人账号
        $buyOne = $trustMo->where("flag='buy' and status<2 and uid!=34558")->order("price desc")->fOne('price');

        $saleOne = $trustMo->where("flag='sale' and status<2 and uid!=34558")->order('price asc')->fOne('price');

        $quote  = Cache_Redis::instance('quote')->get($market . '_quote');
        $quote = json_decode($quote,true);

        $res = [
            'data'=>[
                'buy'=>$buyOne,
                'high'=>$quote['max'],
                'last'=>$quote['price'],
                'low'=>$quote['min'],
                'open'=>$quote['open'],
                'quoteVol'=>$quote['money'],
                'sell'=>$saleOne,
                'time'=>time(),
                'vol'=>$quote['amount']
            ]
        ];

        Tool_Fnc::json($res);
    }

    /*
     * 获取全币种行情
     */
    public function tickers(){

        $coinMo = CoinModel::getInstance();
        $coins = $coinMo->where("status=0")->field('name')->fList();
        $coins = array_column($coins,'name');

        $trustMo = Trust_CoinModel::getInstance();
        $coin_pairMo = Coin_PairModel::getInstance();

        foreach ($coins as $k=>$v){
            $trustMo->designTable($v);
            $data  = $coin_pairMo->getCoinPrice();
            //买一卖一
            $buyOne = $trustMo->where("flag='buy' and status<2")->order("price desc")->fOne('price');
            $saleOne = $trustMo->where("flag='sale' and status<2")->order('price asc')->fOne('price');
            $market = $v.'_cnyx';

            $res['data'][] = [
                'buy'=>$buyOne,
                'sell'=>$saleOne,
                'high'=>$data[$v][$market]['max'],
                'last'=>$data[$v][$market]['price'],
                'low'=>$data[$v][$market]['min'],
                'market'=>$market,
                'open'=>$data[$v][$market]['openPrice'],
                'quoteVol'=>$data[$v][$market]['money'],
                'time'=>time(),
                'vol'=>$data[$v][$market]['amount']
            ];
        }

        Tool_Fnc::json($res);
    }

    /*
     * 获取已开启的市场信息，包括价格、数量小数点位数
     */
    public function markets(){

        $coinMo = CoinModel::getInstance();
        $coins = $coinMo->where("status=0")->fList();

        foreach ($coins as $v){

            $market = $v['name'].'_cnyx';

            $res['data'][] = [
                'actived'=>true,
                'amountTick'=>1,
                'basePrecision'=>4,
                'feeMaker'=>25,
                'feeTaker'=>25,
                'fluctuation'=>0.2,
                'maxQty'=>1000000,
                'minQty'=>0.5,
                'pair'=>$market,
                'pendingLimit'=>500,
                'priceTick'=>1,
                'priority'=>1,
                'quotePrecision'=>2
            ];
        }

        Tool_Fnc::json($res);
    }


    /*
     * 获取市场深度
     */
    public function depth(){
        $market = strtolower(coll('get','market'));
        $arr = explode('_',$market);

        //获取内部账号
        $userMo = UserModel::getInstance();
        $spyUser = $userMo->getSpyUsers();
        $spyUids = array_column($spyUser,'uid','mo');
        $spyMos = array_column($spyUser,'mo');

        $trustMo = Trust_CoinModel::getInstance();
        $trustMo->designTable($arr[0]);


        $bids = $trustMo->field('price,numberover,uid')->where("flag='buy' and status<2 and numberover>0 and uid!=34558")->order('price desc,created asc')->limit(10)->fList();
        $asks = $trustMo->field('price,numberover,uid')->where("flag='sale' and status<2 and numberover>0 and uid!=34558")->order('price asc,created asc')->limit(10)->fList();

        foreach ($asks as $v){
            $spy = 0;$mo = 0;
            if(in_array($v['uid'],$spyUids)){
                $spy = $v['uid'];
                $mo = array_search($v['uid'], $spyUids);
            }

            $res['data']['asks'][] = [
                $v['price'],
                $v['numberover'],
                $spy,
                $mo
            ];
        }

        foreach ($bids as $v){
            $spy = 0;$mo = 0;
            if(in_array($v['uid'],$spyUids)){
                $spy = $v['uid'];
                $mo = array_search($v['uid'], $spyUids);
            }
            $res['data']['bids'][] = [
                $v['price'],
                $v['numberover'],
                $spy,
                $mo
            ];
        }

        Tool_Fnc::json($res);
    }


    /*
     * 历史成交
     */
    public function trades(){
        $market = coll('get','market');
        $arr = explode('_',$market);

        $orderMo = Order_CoinModel::getInstance();
        $orderMo->designTable($arr[0]);

        $orders = $orderMo->field("id,created,opt,price,number")->order("id desc")->limit(6)->fList();

        if($orders){
            foreach ($orders as $v){
                $res['data'][] = [
                    'id'=>$v['id'],
                    'time'=>$v['created'],
                    'side'=>$v['opt']==1?'bid':'ask',
                    'price'=>$v['price'],
                    'amount'=>$v['number'],
                ];
            }

            Tool_Fnc::json($res);
        }else{
            Tool_Fnc::json('无数据');
        }
    }

    /*
     * K线
     */
    public function ohlc(){
        $market = coll('get','market');
        $period = coll('get','period');

        $a290 = APPLICATION_PATH."/log/290.log";
        file_put_contents($a290,json_encode($market.'--'.$period));
        chmod($a290,0666);
        echo 3123;

        die;

        $k = Cache_Redis::instance('quote')->get("{$market}tradeline_{$period}_cache");
    }



}
