<?php


class Ajax_LuckyController extends Ajax_BaseController
{
    # 启用 SESSION
    protected $_auth = 1;
    /*
     *用户下注订单
     */
    public function userBillAction()
    {
        $this->_ajax_islogin();
        $data = $_POST;
        $userMo = UserModel::getInstance();
        $LuckUserMo = LuckUserModel::getInstance();
//        $LuckHashMo = LuckHashModel::getInstance();
        $userLuckyLogMo = UserLuckyLogModel::getInstance();
        $arr_luck = $_POST['money'];

        $data['sum_money'] = $_POST['sum_money'];

        if(!$data['money'] ||!$data['sum_money'] || !$data['coin_name'] ||  !$data['period_id'] =1) $this->ajax('参数错误',0);

        //获取当期期数
        $time = time();
        $period_id = date("YmdHi",$time - $time%(20*60)+20*60);

        $h = date('H');
        $i = date('i');
        if($h<9 || $h>=20) $this->ajax("不在时间段内，开放时间为 9:00-20:00!",0);

        $i = date('i');
        if($i==59 || $i==19 || $i==39) $this->ajax($period_id."期数已结束，请投注下一期.当前时间".date('H:i:s'));

//        $LuckHashInfo = $LuckHashMo->where(['period_id'=>$data['period_id']])->fRow();
        $uid = $this->mCurUser['uid'];
        $data['uid'] = $uid;//用户id
        $data['period_id'] = $period_id;//期号
        $data['addtime'] = $time;//下单时间
        $data['status'] = 2;
        $data['sum'] =count($arr_luck);

        //判断是否已经存在锁了，存在了则直接退出当前程序
        $lock_key = $period_id . $uid;
        $redis = Cache_Redis::instance();
        if($redis -> exists($lock_key)){
            $this->ajax('正在处理中，请稍后操作',0);
        }
        $redis -> set($lock_key,'lock',5);

        //判断用户是否有足够的余额
        $usermoney = $userMo->where("uid={$data['uid']}")->fOne("{$data['coin_name']}_lucky");
        if($usermoney < $data['sum_money'] || $usermoney<=0){
            $redis -> $redis -> delete($lock_key);
            $this->ajax('账户余额不足',0);
        }

        //开启事务
        $userMo->begin();
        $up_id = $userMo->exec("update user set {$data['coin_name']}_lucky={$usermoney} - {$data['sum_money']} where uid={$data['uid']}");
        if(!$up_id){
            $userMo->back();
            //释放锁
            $redis -> delete($lock_key);
            $this->ajax("更新资产失败",0);
        }

        //生成订单
        foreach ($arr_luck as $arr ) {
            foreach ($arr as $stake => $money){
                $data['stake'] = $stake;
                $data['money'] = $money;
                $in_id = $LuckUserMo->insert($data);
                if(!$in_id){
                    $userMo->back();
                    //释放锁
                    $redis -> delete($lock_key);
                    $this->ajax("数据写入失败",0);
                }
                //记录一条财产明细
                $usermoney -= $money;
                $userLog = $userLuckyLogMo->exec("INSERT INTO user_lucky_log (uid,coin,total_number,number,created,before_number,type,period_id) VALUES ({$data['uid']},'{$data['coin_name']}',{$money},'-{$money}',{$data['addtime']},{$usermoney},5,{$period_id})");
            }
        }
        $userMo->commit();

        //释放锁
        $redis -> delete($lock_key);

        //更新无效订单
        $invalidOrder = $LuckUserMo->where("period_id='{$period_id}' and uid=$uid")->field("id,stake")->fList();
        $small = false;$big = false;$one = false;$two = false;
        $v0 = 0;$v1 = 0;$v2 = 0;$v3 = 0;$v4 = 0;
        $v5 = 0;$v6 = 0;$v7 = 0;$v8 = 0;$v9 = 0;
        foreach ($invalidOrder as $v){
            if($v['stake']==11) $small = true;
            if($v['stake']==12) $big = true;
            if($v['stake']==13) $one = true;
            if($v['stake']==14) $two = true;

            if($v['stake']==0) $v0=1;
            if($v['stake']==1) $v1=1;
            if($v['stake']==2) $v2=1;
            if($v['stake']==3) $v3=1;
            if($v['stake']==4) $v4=1;
            if($v['stake']==5) $v5=1;
            if($v['stake']==6) $v6=1;
            if($v['stake']==7) $v7=1;
            if($v['stake']==8) $v8=1;
            if($v['stake']==9) $v9=1;

            if($small && $v['stake']==12 || $big && $v['stake']==11)  $smallBig = true;
            if($one && $v['stake']==14 || $two && $v['stake']==13) $oneTwo = true;
        }

        if(isset($smallBig) && isset($oneTwo)){
            $up_iid = $LuckUserMo->where("stake>10 and period_id='{$period_id}' and uid=$uid and is_invalid=0")->update(['is_invalid'=>1]);
        }elseif (isset($smallBig)){
            $up_iid = $LuckUserMo->where("stake>10 and stake<13 and period_id='{$period_id}' and uid=$uid and is_invalid=0")->update(['is_invalid'=>1]);
        }elseif (isset($oneTwo)){
            $up_iid = $LuckUserMo->where("stake>12 and stake<15 and period_id='{$period_id}' and uid=$uid and is_invalid=0")->update(['is_invalid'=>1]);
        }elseif (($v0+$v1+$v2+$v3+$v4+$v5+$v6+$v7+$v8+$v9)>=6){
            $up_id = $LuckUserMo->exec("update luck_user set is_invalid=1 where uid=$uid and period_id='{$period_id}' and is_invalid=0 and stake<10");
//            file_put_contents(APPLICATION_PATH."/shell/1.log",$LuckUserMo->getLastSql());
        }

        $this->ajax('操作成功',1);
    }
    

    //获取期数与截止时间
    public function getPeriodAction(){

        $h = date('H');
        if($h<9 || $h>20) $this->ajax("不在时间段内，开放时间为 9:00-20:00!",0);

        //获取当期期数
        $time = time();
        $data['date'] = date("Y-m-d H:i:s");
        $data['period'] = date("YmdHi",$time - $time%(20*60)+20*60);
        $data['end_date'] = date('H:i:s',$time - $time%(20*60)+19*60);

        $this->ajax('获取成功',1,$data);
    }

    //统计当期数据
    public function countNowAction(){

        $h = date('H');
        $i = date('i');
        if($h<9 && $h>20 || $h==20 && $i<20) $this->ajax("不在时间段内，开放时间为 9:00-20:00!",0);

        $time = time();
        $period = date("YmdHi",$time - $time%(20*60)+20*60);

//        $this->ajax($period);die;

        $luckUserMo = LuckUserModel::getInstance();
        $lucks = $luckUserMo->where("period_id='{$period}'")->field('money,stake')->fList();

        $data = ['number'=>0,'small'=>0,'big'=>0,'one'=>0,'two'=>0];
        foreach ($lucks as $v){
            $v['stake'] = intval($v['stake']);
            if($v['stake']>=0 && $v['stake']<=9) $data['number']+=$v['money'];//数字
            if($v['stake']==11) $data['small']+=$v['money'];//小
            if($v['stake']==12) $data['big']+=$v['money'];//大
            if($v['stake']==13) $data['one']+=$v['money'];//单
            if($v['stake']==14) $data['two']+=$v['money'];//双
        }

        $this->ajax('获取成功',1,$data);
    }

    /*
     * 投注记录
     */
    public function getLuckAction(){

        $LuckUserMo = LuckUserModel::getInstance();
        $uid = $this->mCurUser['uid'];

        $get = coll('get');

        $luckHashMo = LuckHashModel::getInstance();



        $field = [];
        if ($get['type'] == 1) {
            $this->_ajax_islogin();
            //分页
            $field = "id,coin_name,type,money,stake,period_id,addtime,status";
            $where['uid'] = $uid;
            $data['total'] = $LuckUserMo->field($field)->where("uid=$uid")->count();
        }
        if ($get['type'] == 2) {
            $where = "status!=2";
            $data['total'] = $luckHashMo->count();
        }

        $tPage = new Tool_Page($data['total'], 10);
        $data['pageinfo'] = $tPage->show();

        if($get['type'] == 1){
            $data['list'] = $LuckUserMo->field($field)
                ->where($where)
                ->limit($tPage->limit())
                ->order('id desc')
                ->fList();

            $status = [0=>'未中奖',1=>'中奖','等待开奖'];
            $stakes = [11=>'小',12=>'大',13=>'单',14=>'双'];
            foreach ($data['list'] as &$v){
                $v['status'] = $status[$v['status']];
                $v['stake'] = isset($stakes[$v['stake']])?$stakes[$v['stake']]:$v['stake'];
            }
        }


        if (!$data) {
            $this->ajax("获取失败",0);
        }

        $this->ajax("获取成功".$uid,1,$data);
    }

    /*
    * 开奖记录
    */
    public function getHashLogAction(){

        $luckHashMo = LuckHashModel::getInstance();

        $data['total'] = $luckHashMo->count();
        $tPage = new Tool_Page($data['total'], 10);
        $data['pageinfo'] = $tPage->show();

        $data['list'] = $luckHashMo
            ->field("period_id,hash,luck_num,block_number")
            ->limit($tPage->limit())
            ->order('id desc')
            ->fList();

        foreach ($data['list'] as &$v){
            if($v['luck_num']>=5){
                $v['type'] = '大 ';
            }else{
                $v['type'] = '小 ';
            }
            if($v['luck_num']%2){
                $v['type'] .= '单';
            }else{
                $v['type'] .= '双';
            }
        }

        $this->ajax('获取成功',1,$data);
    }

    /*
     * 获取余额与未结算
     */
    public function getUserLuckyAction($coin='wcg'){
        $this->_ajax_islogin();
        $userMo = UserModel::getInstance();
        $luckUserMo = LuckUserModel::getInstance();

        $uid = $this->mCurUser['uid'];
        Tool_Session::mark($this->mCurUser['uid']);

        //幸运余额
        $data['userLucky'] = round($this->mCurUser["{$coin}_lucky"],2);

        //查询流水
        $startTime = strtotime(date("Y-m-d"));


        $turnover = $luckUserMo->where("addtime>$startTime and uid=$uid and is_invalid=0")->field("sum(money) total_money")->fRow();
        $data['turnover'] = round($turnover['total_money'],2);

        //今天幸运账户记录额度
        $data['wcg_lucky_lock'] = round($this->mCurUser['wcg_lucky_lock'],2);

        //未结算金额
        $users = $luckUserMo->where("uid=$uid and status=2 and coin_name='{$coin}'")->field("sum(money) total_money")->fRow();
        $data['un_lucky'] = round($users['total_money'],2);

        $this->ajax('获取成功',1,$data);
    }

    /*
     * 获取上一期数据
     */
    public function getHashAction(){

        $luckHashMo = LuckHashModel::getInstance();

        $luckHash = $luckHashMo->order('id desc')->fRow();

        $this->ajax('获取成功',1,$luckHash);
    }

    /*
     * 获取账户明细 划转记录
     */
    public function getLuckyLogAction(){
        $this->_ajax_islogin();

        $uid = $this->mCurUser['uid'];

        $userLuckyLogMo = UserLuckyLogModel::getInstance();

        $data['total'] = $userLuckyLogMo->where("uid=$uid")->count();

        $tPage = new Tool_Page($data['total'],10);
        $data['pageinfo'] = $tPage->show();

        $data['list'] = $userLuckyLogMo->where("uid=$uid and type!=4 and type!=5")
            ->field("coin,number,created,before_number,type")
            ->limit($tPage->limit())
            ->order('id desc')->fList();

        $arr = [0=>'余币宝收益',1=>'账户提取',2=>'交易返还',3=>'充值返还'];

        foreach ($data['list'] as &$v){
            $v['operate'] = $v['type']==1?'转出':'转入';
            $v['type'] = $arr[$v['type']];
        }

        $this->ajax("获取成功",1,$data);
    }

    /*
     * 账户明细 竞猜记录
     */
    public function luckUserLogAction(){
        $this->_ajax_islogin();
        $uid = $this->mCurUser['uid'];

        $luckUserMo = LuckUserModel::getInstance();

        $data['total'] = $luckUserMo->where("uid=$uid")->count();
        $tPage = new Tool_Page($data['total'],10);
        $data['pageinfo'] = $tPage->show();

        $data['list'] = $luckUserMo->where("uid=$uid")
            ->field("period_id,stake,money,is_invalid,status,coin_name")
            ->limit($tPage->limit())
            ->order('id desc')->fList();

        $stakes = [11=>'小',12=>'大',13=>'单',14=>'双'];
        $status = [0=>'未中奖',1=>'中奖',2=>'等待开奖'];
        $is_invalid = [0=>'有效订单',1=>'无效订单'];

        foreach ($data['list'] as &$v){
            $v['is_invalid'] = $is_invalid[$v['is_invalid']];
            if($v['status']==0){
                $v['profit'] = -$v['money'];
            }elseif ($v['status']==1){
                if($v['stake']<10) $v['profit'] = $v['money']*7;
                if($v['stake']>10) $v['profit'] = $v['money']*8/10;
            }else{
                $v['profit'] = '--';
            }
            $v['stake'] = isset($stakes[$v['stake']])?$stakes[$v['stake']]:$v['stake'];
            $v['status'] = $status[$v['status']];
        }

        $this->ajax('获取成功',1,$data);

    }
}