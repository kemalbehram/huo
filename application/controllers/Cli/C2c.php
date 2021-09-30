<?php
/*
 *戳单
 */
class Cli_C2cController extends Ctrl_Cli
{
    protected $time = 30*60;   //设置时间撤销时间


    //超时订单入口
    public function runAction(){
        $this->resetTrust();
        $this->remokeTrust();
        die( "完成");
    }

    /**
     * 卖单超时处理
     */
    public function resetTrust(){
        $time = time();
        $c2cTrustMo = new C2ctradeModel();
        $pay_time = $time-$this->time;
        $where = " status = 2 and pay_time <= {$pay_time} and pay_time != 0 ";
        $sql = "select * from c2c_trade where {$where} ";
        $list = $c2cTrustMo->query($sql);
        if(empty($list)){
            echo ("没有可撤销数据！");
            return;
        }
        $uids = array();
        foreach($list as $value){
            if($time - $value['pay_time'] > $this->time){
                $remokeCount = Cache_Redis::instance()->get(C2ctradeModel::REDISREMOKETIMEOUT.$value['uid']);
                if($remokeCount > 3){
                    $time = 172800+(($remokeCount-3)*(3600*24));
                    UserModel::C2cTrustlockUser(C2ctradeModel::REDISLOCKUSERTRUST.$value['uid'],$value['uid'],$time);
                }
                C2ctradeModel::c2cTrustTimeOut($value['id'],$value['uid']);
            }
        }
        echo "成功";
        return;
    }

    /**
     * 买单超时处理
     */
    public function remokeTrust(){
        $time = time();
        $c2cTrustMo = new C2ctradeModel();
        $pay_time = $time-$this->time;
        $where = " type = 1 and  status = 0 and deal_time <= {$pay_time} and deal_time != 0 and deal_id != 0 ";
        $sql = "select * from c2c_trade where {$where} ";
        $list = $c2cTrustMo->query($sql);
        if(empty($list)){
            echo ("没有可撤销数据！");
            return ;
        }
        $c2cTrustMo->begin();
        foreach($list as $value){
            if($time - $value['deal_time'] > $this->time){
                $remokeCount = Cache_Redis::instance()->get(C2ctradeModel::REDISREMOKETIMEOUT.$value['uid']);
                if($remokeCount >= 3){
                    $time = 172800+(($remokeCount-3)*(3600*24));
                    UserModel::C2cTrustlockUser(C2ctradeModel::REDISLOCKUSERTRUST.$value['uid'],$value['uid'],$time);
                }
                $result = $c2cTrustMo->remokeBuyTrust($value);
                if(empty($result)) {
                    $c2cTrustMo->back();
                    echo "失败！";
                    return ;
                }
                $uids[] = array(
                    'uid' => $value['uid'],
                    'id' => $value['id'],
                );
            }
        }
        $c2cTrustMo->commit();
        if(!empty($uids)) {
            foreach ($uids as $uid) {
                C2ctradeModel::c2cTrustTimeOut($uid['id'],$uid['uid']);
            }
        }
        echo "成功";
        return ;
    }


    /**
     * 活动入口
     */
    public function activerunAction(){
        $this->countPrice();
        die("完成");
    }

    /**
     * 写入数据
     */
    public function countPrice(){
        $c2cActiveMo = new C2cactiveModel();
        $redis = Cache_Redis::instance(C2cactiveModel::C2CACTIVEREDIS);
        if(empty($redis)){
            echo "连接reidis失败";
            return ;
        }
        $sql = " select mo,uid,name,buy_price,sell_price,(buy_price-sell_price) as asset from c2c_active order by asset desc,updated asc,id asc ";
        $list = $c2cActiveMo->query($sql);

        if(empty($list)){
            echo "数据为空";
            return ;
        }
        $ranking = 1;
        $c2cActiveMo->begin();
        foreach($list as $value){
            $value['ranking'] = $ranking;
//            $redis->del(C2cactiveModel::C2CACTIVEREDISKEY.$value['mo']);exit;
            $rdata = $redis->get(C2cactiveModel::C2CACTIVEREDISKEY.$value['mo']);
            if($rdata === false ) {
                $ranking_id = $this->insertData($value);
                if(intval($ranking_id) <= 0){
                    $c2cActiveMo->back();
                    var_dump($value);
                    echo "添加失败";
                    return;
                }
                $value['id'] = $ranking_id;
                $result = $redis->set(C2cactiveModel::C2CACTIVEREDISKEY . $value['mo'], json_encode($value));
                if (empty($result)) {
                    $c2cActiveMo->back();
                    echo "数据写入异常。请重新检查redis状态";
                    return;
                }
            }else{
                $rdata = json_decode($rdata,true);
                if($value['ranking'] != $rdata['ranking'] || $value['buy_price'] != $rdata['buy_price'] || $value['sell_price'] != $rdata['sell_price']){
                    $value['id'] = $rdata['id'];
                    $ranking_result = $this->updateData($value);
                    if(empty($ranking_result)){
                        $c2cActiveMo->back();
                        var_dump($value);
                        echo "更新失败";
                        return;
                    }
                    $result = $redis->set(C2cactiveModel::C2CACTIVEREDISKEY . $value['mo'], json_encode($value));
                    if (empty($result)) {
                        $c2cActiveMo->back();
                        echo "数据写入异常。请重新检查redis状态";
                        return;
                    }
                }
            }
            $ranking++;
        }
        $c2cActiveMo->commit();
        echo "成功";
        return;
    }


    /**
     * 插入排名数据
     * @param array $active_info
     * @return bool
     */
    public function insertData($active_info = array()){
        if(empty($active_info)){
            return false;
        }
        $c2cActiveRankongMo = C2cactiverankingModel::getInstance();
        $insert_data = array(
            "mo" => $active_info['mo'],
            "uid" => $active_info['uid'],
            "name" => $active_info['name'],
            "ranking" => $active_info['ranking'],
            "buy_price" => $active_info['buy_price'],
            "sell_price" => $active_info['sell_price'],
            "created" => time(),
            "updated" => time(),
        );
        $ranking_id = $c2cActiveRankongMo->insert($insert_data);
        if(!empty($ranking_id)){
            return $ranking_id;
        }
        return false;
    }

    public function updateData($active_info = array()){
        if(empty($active_info)){
            return false;
        }
        $c2cActiveRankongMo = C2cactiverankingModel::getInstance();
        $update_data = array(
            "id" => $active_info['id'],
            "name" => $active_info['name'],
            "buy_price" => $active_info['buy_price'],
            "sell_price" => $active_info['sell_price'],
            "ranking" => $active_info['ranking'],
            "updated" => time(),
        );
        $result = $c2cActiveRankongMo->update($update_data);
        return $result;
    }

    public function receiverunAction(){
        $this->c2cActiveReceive();
        die("结束");
    }

    /**
     *  活动奖励
     */
    public function c2cActiveReceive(){
        $redis = Cache_Redis::instance();
        $lock = $redis->get("ActiveReceiveLock");
        if($lock === false) {
            $redis->set("ActiveReceiveLock", 1);
        }else{
            echo "该程序已经运行过了";
            return ;
        }
        $activeRewardMo = new ActiverewardModel();
        $c2cActiveRankongMo = new C2cactiverankingModel();
        $list = $c2cActiveRankongMo->where("ranking<= 50  and uid != 0")->fList();
        $activeRewardMo->begin();
        foreach($list as $value){
            $number = $this->ReceiveRule($value['ranking']);
            if(empty($number)){
                continue;
            }
            $data = array(
                "uid" => $value['uid'],
                "type" => 1,
                "coin" => "wcg",
                "price" => $number,
                "status" => 1,
                "created" => time(),
                "updated" => time()
            );
            $insert_id = $activeRewardMo->insert($data);
            if(empty($insert_id)){
                var_dump($value);
                echo "失败";
                $activeRewardMo->back();
                return;
            }
        }
        $activeRewardMo->commit();
        echo "成功";
    }

    /**
     * 奖励规则
     * @param int $ranking
     * @return int
     */
    public function ReceiveRule($ranking = 0){
        if($ranking >= 6 && $ranking <= 10){
            return 1000;
        }
        if($ranking > 10 && $ranking <= 20){
            return 800;
        }
        if($ranking >20 && $ranking <= 30){
            return 500;
        }
        if($ranking > 30 && $ranking <= 40){
            return 300;
        }
        if($ranking > 40 && $ranking <= 50){
            return 200;
        }
        return 0;
    }

}