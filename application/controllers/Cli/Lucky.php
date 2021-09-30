<?php

/*
* 中奖程序
*/
class Cli_LuckyController extends Ctrl_Cli
{
    //开奖
    /**
     *
     */
    public function runAction()
    {
        $startDate = '2019-09-11 09:00:00';
        $startTime = strtotime($startDate);

        $endDate = '2021-12-30 23:20:0';
        $endTime = strtotime($endDate);

        $open = true;
        while (true) {
            $time = time();

            $luckHashMo = LuckHashModel::getInstance();
            $userMo = UserModel::getInstance();
            //防止超过40分钟跳过该区块
            $newPeriod = intval($luckHashMo->order("id desc")->fOne("period_id"));
            $period_H = intval(date("H", $time-$time%(20*60)));
            $period_i = intval(date("i", $time-$time%(20*60)));

            if ($period_H==9 && $period_i==20 || !$newPeriod) {//每天第一场
                $period = intval(date("YmdHi", $time-$time%(20*60)));//
            } else {//其余递增
                $period = intval(date("YmdHi", strtotime($newPeriod)+20*60));
                $period_YMD = intval(date("Ymd", strtotime($newPeriod)+20*60));
                $period_H = intval(date("H", strtotime($newPeriod)+20*60));
                $period_i = intval(date("i", strtotime($newPeriod)+20*60));

                $special = false;
                if ($period_H==20 && $period_i==20 && $period_YMD<intval(date("Ymd"))) {
                    $special = true;
                    $period = intval(date("Ymd", strtotime($newPeriod)+3600*24)).'0920';
                }
            }
            echo $period.PHP_EOL;
            if ((($period_H>=9 && $period_H<20) || ($period_H==20 && $period_i==0)) && $time >= $startTime && $time <= $endTime && $open && !$luckHashMo->where("period_id='{$period}'")->fRow() || $special) {// && ($time-$startTime)%(60*20)==0

                $open = false;//开关 防止同一秒执行多次
                //首先获取当前时间的第一条hash值
                $luckyBtcHashMo = LuckyBtcHashModel::getInstance();
                $luckHashMo = LuckHashModel::getInstance();

                $new_period_id = $luckHashMo->order("id desc")->fOne("period_id");
                if ($new_period_id==$period) {
                    echo '当前时间:'. $period . ",已经开过奖了";
                    continue;
                }

//                每天第一场记录幸运账户余额
//                if($period_H==9 && $period_i==20){//每天的第一场
//                    $userLucky = $userMo->where("wcg_lucky>0")->field("uid,wcg_lucky")->fList();
//                    foreach ($userLucky as $v){
//                        while (true){
//                            $up_id = $userMo->where("uid={$v['uid']}")->update(['wcg_lucky_lock'=>$v['wcg_lucky']]);
//                            if($up_id) break;
//                        }
//
//                    }
//                }
                $next_time = strtotime($period);
                echo '下次运行时间:' . $next_time . PHP_EOL;

                while (true) {
                    //查询最新一条的高度
                    $new_heigth = $luckHashMo->order("id desc")->fOne("block_number")?:0;
                    $btcHash = $luckyBtcHashMo->where("timestamp>=$next_time and height>$new_heigth")->order('timestamp asc')->fRow();

                    if ($btcHash) {
                        $hashData = ['period_id'=>$period,
                            'hash'=>$btcHash['hash'],
                            'luck_num'=>$btcHash['winning_num'],
                            'block_number'=>$btcHash['height'],
                            'status'=>1,
                            'addtime'=>time()
                        ];
                        $luck_id = $luckHashMo->insert($hashData);
                        $winning_num = $btcHash['winning_num'];

                        if ($luck_id) {
                            echo '插入 luckhash 表数据失败'.PHP_EOL;
                            echo '数据结构:' . json_encode($hashData) . PHP_EOL;
                            break;
                        }
                    }
//                    echo "未更新最新区块，等待10秒".PHP_EOL;
                    sleep(10);
                }

                //然后获取所有当前期数的下单数据
                $luckUserMo = LuckUserModel::getInstance();
                $userMo = UserModel::getInstance();

                $userLuckyLogMo = UserLuckyLogModel::getInstance();
                $bets = $luckUserMo->where("period_id='{$period}'")->fList();

                if (!$bets) {
                    echo '没有查询到相关的 bets , period_id:' . $period;
                    continue;
                }

                foreach ($bets as $k => $v) {
                    if ($v['stake']<10 && $v['stake']==$winning_num) {//数字中奖
                        $winning_money = $v['money']*8;
                    } elseif ($v['stake']==11 && $winning_num<5) {//小中奖
                        $winning_money = $v['money']*1.8;
                    } elseif ($v['stake']==12 && $winning_num>=5) {//大中奖
                        $winning_money = $v['money']*1.8;
                    } elseif ($v['stake']==13 && $winning_num%2) {//单中奖
                        $winning_money = $v['money']*1.8;
                    } elseif ($v['stake']==14 && $winning_num%2==0) {//双中奖
                        $winning_money = $v['money']*1.8;
                    } else {
                        $winning_money = 0;
                    }

                    $userMo->begin();
                    //更新用户资产
                    if ($winning_money) {
                        $up_id = $userMo->exec("update user set {$v['coin_name']}_lucky={$v['coin_name']}_lucky+$winning_money where uid={$v['uid']}");
                        if (!$up_id) {
                            //更新用户资产失败
                            $userMo->back();
                        }
                    }

                    $status = $winning_money?1:0;
                    //更新中奖记录
                    $up_lid = $luckUserMo->exec("update luck_user set status=$status where id={$v['id']}");
                    if (!$up_lid) {
                        //更新用户中将记录失败
                        $userMo->back();
                    }

                    $userMo->commit();

                    //记录一条财产明细
                    $number = $winning_money;
                    if ($number) {
                        $usermoney = $userMo->where("uid={$v['uid']}")->fOne("{$v['coin_name']}_lucky");
                        $before_number = round($usermoney, 4);
                        $userLog = $userLuckyLogMo->exec("INSERT INTO user_lucky_log (uid,coin,total_number,number,created,before_number,type,period_id) VALUES ({$v['uid']},'{$v['coin_name']}',{$v['money']},'{$number}',{$v['addtime']},{$before_number},4,{$v['period_id']})");
                    }
                }
                echo date("YmdHi", $time) . PHP_EOL;
            } else {
                $open = true;
//                echo '等待10秒'.date("YmdHis",$time).PHP_EOL;
                sleep(10);
            }

        }


    }


    //获取Hash
    public function getHashAction()
    {
        while (true){
            sleep(10);
            try{
                $luckyBtcHash = LuckyBtcHashModel::getInstance();
                $luckyBtcHash->addData();
            }catch (Exception $e){
                echo '失败'.json_encode($e);
            }
        }
    }

    /*
     * 获取Hash
     */
    public function getHashLAction(){

        while (true){
            sleep(10);
            try{
                $luckyBtcHash = LuckyBtcHashModel::getInstance();
                $luckyBtcHash->addDataL();
            }catch (Exception $e){
                echo '失败'.json_encode($e);
            }
        }

    }


    //每天第一次记录用户余额
    public function lucky_lockAction(){

        while (true){
            $userMo = UserModel::getInstance();
            $period_H = intval(date("H",time()));

            if($period_H>=1 && $period_H<=6){
                $lucky_user = $userMo->where('wcg_lucky>0')->field("uid")->fList();
                $i=0;
                foreach ($lucky_user as $v){
                    while (true){
                        $up_id = $userMo->exec("update user set wcg_lucky_lock=wcg_lucky where uid={$v['uid']}");
                        if($up_id) break;
                    }
                    //每次更新100条
                    if($i%100==0){
                        $i=0;
                        sleep(1);
                    }
                    $i++;
                }
//                while (true){
//                    $up_id = $userMo->exec("update user set wcg_lucky_lock=wcg_lucky where wcg_lucky>0");
//                    if($up_id) break;
//                }
            }
            if(isset($up_id)){
                //成功后等待24小时
                sleep(60*60*24);
            }else{
                sleep(60*5);
            }
        }


        die();
    }




    function eee(){
        $startDate = '2019-09-11';
        $startTime = strtotime($startDate);

        $endDate = '2019-09-11 6:0:0';
        $endTime = strtotime($endDate);

        $open = true;
        while (true){
            $time = time();
            if($time >= $startTime && ($time-$startTime)%20*60==0 && $time <= $startTime){
                echo "开始了".date('H:i:s',$time);

                $data = 0;
                //获取当前BTCHASH
                while (true){
                    $file = json_decode(file_get_contents('https://chain.api.btc.com/v3/block/latest'),true);

                    if($file && $file['data']){
                        if($file['data']['created_at']>=$time) $data = $file['data'];
                        break;
                    }
                    sleep(1);
                }



                //循环获取下一高度
                if(!$data){
                    $i = 1;
                    $nextFile = 0;
                    while (true){
                        $nextFile = isset($nextFile['data'])?:json_decode(file_get_contents('https://chain.api.btc.com/v3/block/'.($file['data']['height']+$i)),true);
                        if($nextFile && $nextFile['data']){
                            if($nextFile['data']['created_at']>=$time){
                                $data = $nextFile['data'];
                                break;
                            }else{
                                $i++;
                            }
                        }
                        if($data) break;
                        sleep(1);
                    }
                }

                $luckyBtcHash = LuckyBtcHashModel::getInstance();
                $luckyBtcHash->addData($data);
            }else{
                echo '=1'.PHP_EOL;
                sleep(1);
            }

        }
        die('成功');
    }
}