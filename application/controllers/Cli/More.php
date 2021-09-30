<?php

/*
* 余币宝收益
*/
class Cli_MoreController extends Ctrl_Cli
{
    public function runAction($coin='wcg')
    {
        $userMo = UserModel::getInstance();
//        $usermoreMo = UserMoreLogModel::getInstance();
        $userMoreLogMo = UserMoreLogModel::getInstance();
        $userLuckyLogMo = UserLuckyLogModel::getInstance();

        $today = strtotime("yesterday");

        //获取所有用户的转入金额
        $users = $userMo->where("{$coin}_more>0")->field("uid,{$coin}_more,{$coin}_lucky")->fList();
        foreach ($users as $v){

            //今天转入的金额
            $morepush = $userMoreLogMo->where("uid={$v['uid']} and coin='{$coin}' and created>$today and type=1")->field("sum(number) total_num")->fRow();
            $moreadd = $morepush['total_num']?floatval($morepush['total_num']):0;

            //今天转出的金额
            $morecut = $morepush = $userMoreLogMo->where("uid={$v['uid']} and coin='{$coin}' and created>$today and type=2")->field("sum(number) total_num")->fRow();
            $moredel = $morecut['total_num']?floatval( $morecut['total_num']):0;

            if($moreadd>$moredel){
                $more = floatval($v["{$coin}_more"]) - $moreadd + $moredel;
            }else{
                $more = floatval($v["{$coin}_more"]);
            }

            //开始计算收益
            if($more>0){
                $lucky = Tool_Math::mul($more,0.002,8);
                echo '用户ID:' . $v['uid'] . '收益奖励:' . $lucky .PHP_EOL;
                if($lucky<=0) continue;
                $in_data = [
                    'uid'=>$v['uid'],
                    'coin'=>$coin,
                    'number'=>$lucky,
                    'before_number'=>floatval($v["{$coin}_lucky"]),//之前的幸运余额
                    'created'=>time(),
                ];

                //更新lucky资产
                $userMo->begin();
                $up_id = $userMo->exec("update user set {$coin}_lucky={$coin}_lucky+$lucky where uid={$v['uid']}");
                if(!$up_id){
                    $userMo->back();
                    echo $userMo->getLastSql().PHP_EOL;
                }

                //写记录
                $in_id = $userLuckyLogMo->insert($in_data);

                echo $in_id;
                if(!$in_id){
                    $userMo->back();
                    echo $userLuckyLogMo->getLastSql().PHP_EOL;
                }
                $userMo->commit();
            }else{
                echo "用户不符合条件：【coin:{$coin}】;【time：{$today}】;【moreadd : {$moreadd}】;【moredel:{$moredel}】;【more:{$more}】;【user:{$v}】" . PHP_EOL;
                continue;
            }
        }

        die('成功');
    }

    /*
     * 交易送万五
     */
    public function WcgCashbackAction(){

        $startTime = strtotime(date('Y-m-d')." -1 day");
        $endTime = strtotime(date('Y-m-d'));

        $orderCoinMo = Order_CoinModel::getInstance();
        $orderCoinMo->designTable('wcg');

        //查找所有买单记录 排除机器人账户
        $buyList = $orderCoinMo->where("created>=$startTime and created<=$endTime and buy_uid!=33757 and buy_uid!=34558")->group("buy_uid")->field("sum(number) total,buy_uid")->fList();
        //查找所有卖单记录 排除机器人账户
        $saleList = $orderCoinMo->where("created>=$startTime and created<=$endTime and sale_uid!=33757 and sale_uid!=34558")->group("sale_uid")->field("sum(number) total,sale_uid")->fList();

//        Tool_Out::p($buyList);
//
//        Tool_Out::p($saleList);die;

        $userMo = UserModel::getInstance();
        $userLuckyLogMo = UserLuckyLogModel::getInstance();
        $time = time();
        //返还万五
        foreach ($buyList as $v){
            $over = floor($v['total']*5/10000*100)/100;
            if($over==0) continue;

            $userMo->begin();

            $data = [
                'uid' =>$v['buy_uid'],
                'coin' => 'wcg',
                'total_number' => floatval($v['total']),
                'number' => $over,
                'type' => 2,
                'created' => $time,
                'before_number'=> floatval($userMo->where("uid={$v['buy_uid']}")->fOne('wcg_lucky'))
            ];
            $in_id = $userLuckyLogMo->insert($data);
            if(!$in_id){
                $userMo->back();
                continue;
            }

            $up_uid = $userMo->exec("update user set wcg_lucky=wcg_lucky+{$over} where uid={$v['buy_uid']}");
            if(!$up_uid){
                $userMo->back();
                continue;
            }

            $userMo->commit();
        }


        foreach ($saleList as $v){
            $over = floor($v['total']*5/10000*100)/100;
            if($over==0) continue;


            $data = [
                'uid' =>$v['sale_uid'],
                'coin' => 'wcg',
                'total_number' => floatval($v['total']),
                'number' =>$over,
                'type' => 2,
                'created' => $time,
                'before_number'=> floatval($userMo->where("uid={$v['sale_uid']}")->fOne('wcg_lucky'))
            ];
            $in_id = $userLuckyLogMo->insert($data);
            if(!$in_id){
                $userMo->back();
                continue;
            }

            $userMo->begin();
            $up_uid = $userMo->exec("update user set wcg_lucky=wcg_lucky+{$over} where uid={$v['sale_uid']}");
            if(!$up_uid){
                $userMo->back();
                continue;
            }
            $userMo->commit();
        }

        die('成功');
    }

    /*
     * 充值送千五
     */
    public function rechargeAction($coin='wcg'){

        $startTime = strtotime(date('Y-m-d')." -1 day");
        $endTime = strtotime(date('Y-m-d'));

        $exchange = "Exchange_".ucfirst($coin)."Model";
        $exchangeMo = $exchange::getInstance();

        $exchanges = $exchangeMo->where("created>$startTime and created<$endTime and status='成功' and opt_type='in'")->field("sum(number) num,uid")->group("uid")->fList();

        $userMo = UserModel::getInstance();
        $userLuckyLogMo = UserLuckyLogModel::getInstance();
        $time = time();
        //返还千5

        if(!$exchanges) return false;
        foreach ($exchanges as $v){

            $userMo->begin();
            $number = floor($v['num']*5/1000*100)/100;
            if($number==0) continue;
            $in_data = [
                'uid' =>$v['uid'],
                'coin' => 'wcg',
                'total_number' => $v['num'],
                'number' =>$number,
                'type' => 3,
                'created' => $time,
                'before_number'=> floatval($userMo->where("uid={$v['uid']}")->fOne('wcg_lucky'))
            ];

            $in_id = $userLuckyLogMo->insert($in_data);
            if(!$in_id){
                $userMo->back();
                continue;
            }

            $up_id = $userMo->exec("update user set wcg_lucky=wcg_lucky+{$number} where uid={$v['uid']}");
            if(!$up_id){
                $userMo->back();
                continue;
            }

            $userMo->commit();
        }

//        Tool_Out::p($exchanges);
        die("成功");
    }


    public function supAction($coin='wcg')
    {
        $userMo = UserModel::getInstance();
//        $usermoreMo = UserMoreLogModel::getInstance();
        $userMoreLogMo = UserMoreLogModel::getInstance();
        $userLuckyLogMo = UserLuckyLogModel::getInstance();

        $today = strtotime("2019-10-02");
        $day = strtotime("2019-10-03");

        //获取所有用户的转入金额
        $users = $userMo->where("{$coin}_more>0")->field("uid,{$coin}_more,{$coin}_lucky")->fList();
        foreach ($users as $v){
            if($v['uid']!=49004 && $v['uid']!=27123) continue;

            //今天转入的金额
            $morepush = $userMoreLogMo->where("uid={$v['uid']} and coin='{$coin}' and created>$today and created<$day and type=1")->field("sum(number) total_num")->fRow();
            $moreadd = $morepush['total_num']?floatval($morepush['total_num']):0;

            //今天转出的金额
            $morecut = $morepush = $userMoreLogMo->where("uid={$v['uid']} and coin='{$coin}' and created>$today and created<$day and type=2")->field("sum(number) total_num")->fRow();
            $moredel = $morecut['total_num']?floatval( $morecut['total_num']):0;

            if($moreadd>$moredel){
                $more = floatval($v["{$coin}_more"]) - $moreadd + $moredel;
            }else{
                $more = floatval($v["{$coin}_more"]);
            }

            //开始计算收益
            if($more>0){
                $lucky = Tool_Math::mul($more,0.002,8);
                if($lucky<=0) continue;
                $in_data = [
                    'uid'=>$v['uid'],
                    'coin'=>$coin,
                    'number'=>$lucky,
                    'before_number'=>floatval($v["{$coin}_lucky"]),//之前的幸运余额
                    'created'=>time(),
                ];

                //更新lucky资产
                $userMo->begin();
                $up_id = $userMo->exec("update user set {$coin}_lucky={$coin}_lucky+$lucky where uid={$v['uid']}");
                if(!$up_id){
                    $userMo->back();
                    echo $userMo->getLastSql().PHP_EOL;
                }

                //写记录
                $in_id = $userLuckyLogMo->insert($in_data);

                echo $in_id;
                if(!$in_id){
                    $userMo->back();
                    echo $userLuckyLogMo->getLastSql().PHP_EOL;
                }
                $userMo->commit();
            }else{
                continue;
            }
        }

        die('成功');
    }


}