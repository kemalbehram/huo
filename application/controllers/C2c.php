<?php
class C2cController extends Ctrl_Base
{

    protected $_auth = 1;
    function init(){
        parent::init();
        $this->assign('pageName', $this->_request->action);
    }
    //用户c2c
    public function indexAction($page=1)
    {

//        $this->_ajax_islogin();
        Tool_Session::mark($this->mCurUser['uid']);
        $C2ctrade = new C2ctradeModel();
        // 当前总记录条数
        isset($_GET['p']) or $_GET['p'] = intval($page);
        $data['totalsell']= $C2ctrade->where(['status' =>0,'type'=>2,'moble'=>15586991887,'deal_id'=>0])->count();
        // 获取分页显示
        $tPage = new Tool_Page($data['totalsell'],10);
        $data['pageinfosell']= $tPage->show();
        $data['listsell'] = $C2ctrade->field('*')
            ->where(['status' =>0,'type'=>2,'moble'=>15586991887,'deal_id'=>0])
            ->limit(5)
            ->order('id desc')
            ->fList();
        foreach($data['listsell'] as $k=>$v){
            $data['listsell'][$k]['sellmoble'] =substr_replace($v['moble'], '****', 3, 4);
        }
        $urgent = UrgentModel::getInstance()->where("id!=0")->fRow();

        //买单
        $UserModel = new UserModel();
        $usertype = $UserModel->where("uid={$this->mCurUser['uid']}")->fRow();
       if($usertype['mo']=='15586991887'){
           $atime = time()-(72000);
           //and addtime >$atime
           $data['buytsell'] = $C2ctrade ->where("status=0 and type=1 and moble!=15586991887 and deal_id=0 and addtime >$atime")->limit(5)->order('id desc')->fList();
           foreach($data['buytsell'] as $k=>$v){
               $data['buytsell'][$k]['buymoble'] =substr_replace($v['moble'], '****', 3, 4);
           }
       }
        $repeat_del = md5(time().rand(10000,9999));;
        $_SESSION['repeat_del'] = $repeat_del;
        $this->assign("repeat_del",$repeat_del);
        // Tool_Out::p( $data['buytsell']);die;
        $this->assign('urgent', $urgent);
        $this->assign('data', $data);

    }

    public function alertAction()
    {
        $id = $_POST['id'];
        $paytype = $_POST['type'];

        $C2ctrade = new C2ctradeModel();
        $C2ctradelog = new C2ctradelogModel();
        $Userbank = new UserbankModel();
        if ($id && $paytype) {
            $trade = $C2ctrade->where(['id' => $id])->fRow();
            if ($trade['deal_id'] !=0) {
                //选择状态
                if ($trade['status'] == 0) {
                    $status = '交易中';
                } else if ($trade['status'] == 2) {
                    $status = '已支付';
                } else if ($trade['status'] == 3) {
                    $status = '已撤销';
                } else if ($trade['status']) {
                    $status = '已成交';
                }

                $autonymModel = new AutonymModel();
                $buylog = $C2ctradelog->where(['selltradeno'=>$trade['tradeno']])->order('id desc')->fRow();
                $selllog = $C2ctradelog->where(['buytradeno'=>$trade['tradeno']])->order('id desc')->fRow();
                if ($trade['type'] == 1) {
                    $selltrade = $C2ctrade->where(array('tradeno' => $selllog['selltradeno']))->fRow();
                    $sellbank = $Userbank->where(array('uid' => $selllog['sellid'], 'status' => 1, 'type' => $paytype))->fRow();
                    $truenamesell = $autonymModel->where(array('uid' => $selllog['sellid']))->fOne('name');
                }else{
                    $buytrade = $C2ctrade->where(array('tradeno' => $buylog['buytradeno']))->fRow();
                    $buybank = $Userbank->where(array('uid' => $buylog['buyid'], 'status' => 1, 'type' => $paytype))->fRow();
                    $truenamebuy = $autonymModel->where(array('uid' => $selllog['buyid']))->fOne('name');
                }
                // echo $paytype;die;
//                 var_dump($selllog['sellid']);
//                 var_dump($truenamesell);die;
                if ($trade['type'] == 1) {

                    echo json_encode([
                        'tradeId' => $selltrade['id'],
                        'sts' =>1,
                        'name' => $selllog['selltruename'],
                        'truename'=>$truenamesell,
                        'sellid' => $sellbank['uid'],
                        'bankaddr' => $sellbank['bank'],
                        'bankcard' => $sellbank['bankcard'],
                        'num' => $selllog['price'],
                        'tradeno' => $selllog['selltradeno'],
                        'type'=>$selltrade['type'],
                        'paytype' => $sellbank['type'],
                        'status' => $status,
                        'moble' => $selllog['sellmoble'],
                        'img' =>$sellbank['img'],
                        'deal_time' => $trade['deal_id'],
                    ]);
                    exit();
                } else {
                    echo json_encode([
                        'tradeId' => $buytrade['id'],
                        'sts' => 1,
                        'name' => $buylog['buytruename'],
                        'truename'=>$truenamebuy,
                        'sellid' => $buybank['uid'],
                        'bankaddr' => $buybank['bank'],
                        'bankcard' => $buybank['bankcard'],
                        'num' => $buylog['price'],
                        'tradeno' => $buylog['buytradeno'],
                        'type'=>$buytrade['type'],
                        'paytype' => $buybank['type'],
                        'status' => $status,
                        'moble' => $buylog['buymoble'],
                        'img' =>$buybank['img'],
                        'deal_time' => $trade['deal_id'],
                    ]);
                    exit();
                }

            }else{
                $this->ajax('非法操作',0);
            }

        }
    }
    //获取流水号
    function tradeno($type = '')
    {
        if ($type == 'c2c') {
            $length = 5;
            $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';//abcdefghijklmnopqrstuvwxyz
            $string = '';
            for ($i = 0; $i < $length; $i++) {
                // 取字符数组 $chars 的任意元素
                $string .= $chars[mt_rand(0, strlen($chars) - 1)];
            }
            return $string;
        } else {
            return substr(str_shuffle('ABCDEFGHIJKLMNPQRSTUVWXYZ'), 0, 2) . substr(str_shuffle(str_repeat('123456789', 4)), 0, 3);
        }
    }
    //发送接口
    public function sendSMS($username,$password_md5,$apikey,$mobile,$contentUrlEncode,$encode)
    {
        //发送链接（用户名，密码，apikey，手机号，内容）
        $url = "http://m.5c.com.cn/api/send/index.php?";  //如连接超时，可能是您服务器不支持域名解析，请将下面连接中的：【m.5c.com.cn】修改为IP：【115.28.23.78】
        $data=array
        (
            'username'=>$username,
            'password_md5'=>$password_md5,
            'apikey'=>$apikey,
            'mobile'=>$mobile,
            'content'=>$contentUrlEncode,
            'encode'=>$encode,
        );
        $result = $this->curlSMS($url,$data);

        return $result;
    }

    private function curlSMS($url,$post_fields=array())
    {
        $ch=curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);//用PHP取回的URL地址（值将被作为字符串）
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);//使用curl_setopt获取页面内容或提交数据，有时候希望返回的内容作为变量存储，而不是直接输出，这时候希望返回的内容作为变量
        curl_setopt($ch,CURLOPT_TIMEOUT,30);//30秒超时限制
        curl_setopt($ch,CURLOPT_HEADER,1);//将文件头输出直接可见。
        curl_setopt($ch,CURLOPT_POST,1);//设置这个选项为一个零非值，这个post是普通的application/x-www-from-urlencoded类型，多数被HTTP表调用。
        curl_setopt($ch,CURLOPT_POSTFIELDS,$post_fields);//post操作的所有数据的字符串。
        $data = curl_exec($ch);//抓取URL并把他传递给浏览器
        curl_close($ch);//释放资源

        $res = explode("\r\n\r\n",$data);//explode把他打散成为数组
        return $res[2]; //然后在这里返回数组。
    }

    public function testRedisAction(){
        $cot = 1;
        $redis = Cache_Redis::instance();
        $count = $redis->get("trade_".$this->mCurUser['uid']."_count");
        if(!empty($count)){
            $redis->incr("trade_" . $this->mCurUser['uid'] . "_count");
        }else {
            $redis->set("trade_" . $this->mCurUser['uid'] . "_count", $cot, 5);
        }
        exit;
    }


    public function countRedisAction(){
        $this->_ajax_islogin();
        $uid = $this->mCurUser['uid'];
        $redis = Cache_Redis::instance();
        $timeout = $redis->get(C2ctradeModel::REDISREMOKETIMEOUT.$uid);
        var_dump($timeout);
        $recount = $redis->get(C2ctradeModel::REDISREMOKECOUNT.$uid);
        var_dump($recount);
        $date = $redis->get("time_out_count_arr_".$uid);
        var_dump(json_decode($date,true));
        $data = $redis->get(C2ctradeModel::REDISLOCKUSERTRUST.$uid);
        var_dump(json_decode($data,true));
        exit;
    }

    public function delcountAction(){
        $uid = $this->mCurUser['uid'];
        $redis = Cache_Redis::instance();
        $timeout = $redis->set(C2ctradeModel::REDISREMOKETIMEOUT.$uid,0,604800);
        $recount = $redis->set(C2ctradeModel::REDISREMOKECOUNT.$uid,0,604800);
        $redis->del("time_out_count_arr_".$uid);
        $redis->del(C2ctradeModel::REDISLOCKUSERTRUST.$uid);
        var_dump($recount);
        var_dump($timeout);exit;
    }
    public function c2cactiveAction(){
        $uid = $this->mCurUser['uid'];
    }
}





////判断卖家资产
//$coin = $UserModel->where(['uid' => $sell['uid']])->fRow();
////手续费计算
//$year = date("Y");
//$month = date("m");
//$day = date("d");
//$addti = mktime(0, 0, 0, $month, $day, $year);//当天开始时间戳
//$endti = mktime(23, 59, 59, $month, $day, $year);//当天结束时间戳
//$countsellall = $C2ctrade->where("uid ={$sell['uid']}  and type=2 and status!=3 and (addtime between $addti and $endti)")->count();
//
////手续费计算
//$num = $sell['deal'] > $trade['deal'] ? $trade['deal'] : $sell['deal'];
//if ($sell['selltype'] == 1){
//    if($num<=1000 && $countsellall<=2){
//        $fee_sell = 5;
//    }elseif($num>1000 && $countsellall<=2){
//        $bili = $num *0.005;
//        $fee_sell = $bili;
//    }elseif($num <=  500  && $countsellall>=3){
//        $fee_sell = 5;
//    }elseif($num >500  && $countsellall>=3){
//        $bili = ($countsellall-1)*0.005;
//        $fee_sell = $num * $bili;
//    }elseif($num <=300  && $countsellall>=4){
//        $fee_sell = 5;
//    } elseif($num >300  && $countsellall>=4) {
//        $bili = ($countsellall - 1) * 0.005;
//        $fee_sell = $num * $bili;
//    }
//}else{
//    if($num<=500 && $countsellall<=2){
//        $fee_sell = 5;
//    }elseif($num>500 && $countsellall<=2){
//        $bili = $num * 0.01;
//        $fee_sell = $bili;
//    }elseif($num <=  200  && $countsellall>=3){
//        $fee_sell = 5;
//    }elseif($num >200  && $countsellall>=3){
//        $bili = ($countsellall-1)*0.01;
//        $fee_sell = $num * $bili;
//    }elseif($num <=100  && $countsellall>=4){
//        $fee_sell = 5;
//    } elseif($num >100  && $countsellall>=4) {
//        $bili = ($countsellall - 1) *0.01;
//        $fee_sell = $num * $bili;
//    }
//
//}
