<?php
/**
 *导入资产历史数据
 */
class Cli_AssetsqlController extends Ctrl_Cli
{

    public function init()
    {
        set_time_limit(0);
        ini_set('memory_limit', '1280000000M');


        //连接数据库
        $this->mo = new Orm_Base();

        //单次最大插入数据
        $this->max_num = 30000;
        $this->max_count = 30000;

        //机器人UID
        $this->robot_uid = 33757;
    }


    //单次执行
    public function runAction()
    {
        $this->user_rechargeAction();
        $this->c2c_tradeAction();
        $this->c2c_trade_logAction();
        $this->otc_trustAction();
        $this->otc_orderAction();
        $this->fee_bonusAction();
        $this->user_bonusAction();
        $this->exchangeAction();
        $this->trustAction();
        $this->orderAction();

        die('结束');
    }


    //用户充值数据   1
    public function user_rechargeAction(){

        $type = 1;
        $otable = 'user_recharge';

        //首先查找出用户数据库中该类型最大的ID
        $max_id = $this->mo->table('asset_past')->where("type=1")->order("oid desc")->fOne("oid");//created desc,
        $max_id = $max_id?$max_id:0;

        $recharge_count = $this->mo->table("$otable")->where("id>$max_id")->fOne("count(id)");

        echo $recharge_count.PHP_EOL;
//        $this->mo->table('user_recharge')->exec("truncate table user_recharge");

        if ($recharge_count > $this->max_count) {
            $num = ceil($recharge_count / $this->max_count);
        } else {
            $num = 1;
        }

//        echo $num.PHP_EOL;die;

        $time = time();
        for ($i = 0; $i < $num; $i++) {
            $start = $i * $this->max_count;
            echo $start . '---' . $this->max_count .PHP_EOL;

            $recharge = $this->mo->table("$otable")->field('*')->where("id>$max_id")->limit("$start,$this->max_count")->fList();

            $rech_count = count($recharge);
            //清空表
            foreach ($recharge as $k => $v) {

                if ($k % $this->max_num == 0) {
                    $sql = "insert into asset_past (`date`,uid,`type`,coin_to,oid,otable,created,updated,addtime) values ";
                }

                $addtime = date("Y-m-d H:i:s",$v['addtime']);
                $sql .= "('{$addtime}','{$v['uid']}','{$type}','cnyx','{$v['id']}','{$otable}','{$v['addtime']}','{$v['endtime']}','{$time}'),";

                if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($rech_count - 1)) {
                    $sql = substr($sql, 0, strlen($sql) - 1);
                    $this->mo->exec($sql);
                }
            }
        }
        return '成功';
    }

    //C2C委托数据  2
    public function c2c_tradeAction(){

        $type = 2;
        $otable = 'c2c_trade';

        //首先查找出用户数据库中该类型最大的ID
        $max_id = $this->mo->table('asset_past')->where("type=2")->order("oid desc")->fOne("oid");//created desc,
        $max_id = $max_id?$max_id:0;

        $list_count = $this->mo->table("$otable")->where("id>$max_id")->fOne("count(id)");

        echo $list_count.PHP_EOL;
//        $this->mo->table('user_recharge')->exec("truncate table user_recharge");

        $num = $list_count > $this->max_count ? ceil($list_count / $this->max_count):1;

//        echo $num.PHP_EOL;die;

        $time = time();
        for ($i = 0; $i < $num; $i++) {
            $start = $i * $this->max_count;
            echo $start . '---' . $this->max_count .PHP_EOL;

            $list = $this->mo->table('c2c_trade')->where("id>$max_id")->limit("$start,$this->max_count")->fList();

            $count = count($list);
            //清空表
            foreach ($list as $k => $v) {

                if ($k % $this->max_num == 0) {
                    $sql = "insert into asset_past (`date`,uid,`type`,opt_type,coin_to,oid,otable,ostatus,created,addtime) values ";
                }

                $addtime = date("Y-m-d H:i:s",$v['addtime']);
                $sql .= "('{$addtime}','{$v['uid']}','{$type}','{$v['type']}','cnyx','{$v['id']}','c2c_trade','{$v['status']}','{$v['addtime']}','{$time}'),";

                if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                    $sql = substr($sql, 0, strlen($sql) - 1);
                    $this->mo->exec($sql);
                }
            }
        }
        return '成功';
    }

    //C2C成交  3
    public function c2c_trade_logAction(){

        $type = 3;
        $otable = 'c2c_trade_log';

        //首先查找出用户数据库中该类型最大的ID
        $max_id = $this->mo->table('asset_past')->where("type=3")->order("oid desc")->fOne("oid");//created desc,
        $max_id = $max_id?$max_id:0;

        $list_count = $this->mo->table("$otable")->where("id>$max_id")->fOne("count(id)");

        echo $list_count.PHP_EOL;
//        $this->mo->table('user_recharge')->exec("truncate table user_recharge");

        if ($list_count > $this->max_count) {
            $num = ceil($list_count / $this->max_count);
        } else {
            $num = 1;
        }

//        echo $num.PHP_EOL;die;

        $time = time();
        $type = 3;
        for ($i = 0; $i < $num; $i++) {
            $start = $i * $this->max_count;
            echo $start . '---' . $this->max_count .PHP_EOL;

            $list = $this->mo->table("$otable")->where("id>$max_id")->limit("$start,$this->max_count")->fList();

            $count = count($list);
            echo $count.PHP_EOL;
            //清空表
            foreach ($list as $k => $v) {

                if ($k % $this->max_num == 0) {
                    $sql = "insert into asset_past (`date`,uid,fuid,`type`,opt_type,coin_to,oid,otable,created,addtime) values ";
                }

                $addtime = date("Y-m-d H:i:s",$v['addtime']);
                $sql .= "('{$addtime}','{$v['buyid']}','{$v['sellid']}','{$type}','{$v['type']}','cnyx','{$v['id']}','{$otable}','{$v['addtime']}','{$time}'),";

                if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                    $sql = substr($sql, 0, strlen($sql) - 1);
                    $this->mo->exec($sql);
                }
            }
        }
        return '成功';
    }

    //OTC委托  4
    public function otc_trustAction(){

        $type = 4;

        //首先查找OTC都有哪些类型
        $otc_open = CoinModel::getInstance()->field("name")->where("otc_open=1")->fList();

        foreach ($otc_open as $otcv){

            $otable = "otc_trust_{$otcv['name']}";

            //首先查找出用户数据库中该类型最大的ID
            $max_id = $this->mo->table('asset_past')->where("type=$type and coin_from='{$otcv['name']}'")->order("oid desc")->fOne("oid");//created desc,
            $max_id = $max_id?$max_id:0;

            $list_count = $this->mo->table("$otable")->where("id>$max_id")->fOne("count(id)");


            //次数
            $list_count > $this->max_count?$num = ceil($list_count / $this->max_count):$num = 1;

            $time = time();
            $type = 4;
            for ($i = 0; $i < $num; $i++) {
                $start = $i * $this->max_count;
                echo $start . '---' . $this->max_count .PHP_EOL;

                $list = $this->mo->table("$otable")->where("id>$max_id")->limit("$start,$this->max_count")->fList();

                $count = count($list);
                echo $count.PHP_EOL;
                //清空表
                foreach ($list as $k => $v) {

                    if ($k % $this->max_num == 0) {
                        $sql = "insert into asset_past (`date`,uid,`type`,opt_type,coin_from,coin_to,oid,otable,ostatus,created,updated,addtime) values ";
                    }

                    $addtime = date("Y-m-d H:i:s",$v['created']);
                    $sql .= "('{$addtime}','{$v['uid']}','{$type}','{$v['type']}','{$otcv['name']}','cnyx','{$v['id']}','{$otable}','{$v['ostatus']}','{$v['created']}','{$v['updated']}','{$time}'),";

                    if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                        $sql = substr($sql, 0, strlen($sql) - 1);
                        $this->mo->exec($sql);
                    }
                }
            }
        }

        return '成功';
    }

    //OTC成交  5
    public function otc_orderAction(){

        $type = 5;

        //首先查找OTC都有哪些类型
        $otc_open = CoinModel::getInstance()->field("name")->where("otc_open=1")->fList();

        foreach ($otc_open as $otcv){
            $otable = "otc_order_{$otcv['name']}";

            //首先查找出用户数据库中该类型最大的ID
            $max_id = $this->mo->table('asset_past')->where("type=$type and coin_from='{$otcv['name']}'")->order("oid desc")->fOne("oid");//created desc,
            $max_id = $max_id?$max_id:0;

            $list_count = $this->mo->table("$otable")->where("id>$max_id")->fOne("count(id)");


            //次数
            $list_count > $this->max_count?$num = ceil($list_count / $this->max_count):$num = 1;

            $time = time();
            for ($i = 0; $i < $num; $i++) {
                $start = $i * $this->max_count;
                echo $start . '---' . $this->max_count .PHP_EOL;

                $list = $this->mo->table("$otable")->where("id>$max_id")->limit("$start,$this->max_count")->fList();

                $count = count($list);
                echo $count.PHP_EOL;
                //清空表
                foreach ($list as $k => $v) {

                    if ($k % $this->max_num == 0) {
                        $sql = "insert into asset_past (`date`,uid,fuid,`type`,opt_type,coin_from,coin_to,oid,otable,ostatus,created,updated,addtime) values ";
                    }

                    $v['type'] = $v['type']=='buy'?1:2;
                    $addtime = date("Y-m-d H:i:s",$v['created']);
                    $sql .= "('{$addtime}','{$v['buy_uid']}','{$v['sale_uid']}','{$type}','{$v['type']}','{$otcv['name']}','cnyx','{$v['id']}','{$otable}','{$v['status']}','{$v['created']}','{$v['updated']}','{$time}'),";

                    if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                        $sql = substr($sql, 0, strlen($sql) - 1);
                        $this->mo->exec($sql);
                    }
                }
            }
        }

        return '成功';
    }

    //分红 6
    public function fee_bonusAction(){

        $type = 6;

        //首先查找OTC都有哪些类型
        $fee_bouns = ['fee_bonus'];//,'fee_bonus_recharge'

        foreach ($fee_bouns as $feev){

            //首先查找出用户数据库中该类型最大的ID
            $max_id = $this->mo->table('asset_past')->where("type=$type and otable='{$feev}'")->order("oid desc")->fOne("oid");//created desc,
            $max_id = $max_id?$max_id:0;

            $list_count = $this->mo->table("$feev")->where("id>$max_id")->fOne("count(id)");


            //次数
            $list_count > $this->max_count?$num = ceil($list_count / $this->max_count):$num = 1;

            $time = time();
            for ($i = 0; $i < $num; $i++) {
                $start = $i * $this->max_count;
                echo $start . '---' . $this->max_count .PHP_EOL;

                $list = $this->mo->table("$feev")->where("id>$max_id")->limit("$start,$this->max_count")->fList();

                $count = count($list);
                echo $count.PHP_EOL;
                //清空表
                foreach ($list as $k => $v) {

                    if ($k % $this->max_num == 0) {
                        $sql = "insert into asset_past (`date`,uid,fuid,`type`,oid,otable,created,addtime) values ";
                    }

                    $addtime = date("Y-m-d H:i:s",$v['addtime']);
                    $sql .= "('{$addtime}','{$v['uid']}','{$v['origin_uid']}','{$type}','{$v['id']}','{$feev}','{$v['created']}','{$time}'),";

                    if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                        $sql = substr($sql, 0, strlen($sql) - 1);
                        $this->mo->exec($sql);
                    }
                }
            }
        }

        return '成功';
    }

    //每日利息 7
    public function user_bonusAction(){

        $type = 7;

        //首先查找出用户数据库中该类型最大的ID
        $max_id = $this->mo->table('asset_past')->where("type=$type")->order("oid desc")->fOne("oid");//created desc,
        $max_id = $max_id?$max_id:0;

        $list_count = $this->mo->table('user_bonus')->where("id>$max_id")->fOne("count(id)");

        echo $list_count.PHP_EOL;
//        $this->mo->table('user_recharge')->exec("truncate table user_recharge");

        //次数
        $num = $list_count > $this->max_count ? ceil($list_count / $this->max_count): 1;


//        echo $num.PHP_EOL;die;

        $time = time();
        for ($i = 0; $i < $num; $i++) {
            $start = $i * $this->max_count;
            echo $start . '---' . $this->max_count .PHP_EOL;

            $list = $this->mo->table('user_bonus')->where("id>$max_id")->limit("$start,$this->max_count")->fList();

            $count = count($list);
            echo $count.PHP_EOL;
            //清空表
            foreach ($list as $k => $v) {

                if ($k % $this->max_num == 0) {
                    $sql = "insert into asset_past (`date`,uid,`type`,oid,otable,created,addtime) values ";
                }

                $addtime = date("Y-m-d H:i:s",$v['created']);
                $sql .= "('{$addtime}','{$v['uid']}','{$type}','{$v['id']}','user_bonus','{$v['created']}','{$time}'),";

                if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                    $sql = substr($sql, 0, strlen($sql) - 1);
                    $this->mo->exec($sql);
                }
            }
        }

        return '成功';
    }

    //转入转出 8
    public function exchangeAction(){

        $type = 8;
        $coin = CoinModel::getInstance()->field("name")->fList();

        foreach ($coin as $cv){

            $otable = "exchange_{$cv['name']}";
            //首先查找出用户数据库中该类型最大的ID
            $max_id = $this->mo->table('asset_past')->where("type=$type and otable='{$otable}'")->order("oid desc")->fOne("oid");//created desc,
            $max_id = $max_id?$max_id:0;


            //数据表名如果不存在跳走
            $table = $this->mo->query("show tables like '$otable'");
            if(!$table) continue;
            $list_count = $this->mo->table("exchange_{$cv['name']}")->where("id>$max_id")->fOne("count(id)");

            //次数
            $list_count > $this->max_count?$num = ceil($list_count / $this->max_count):$num = 1;

            $time = time();
            for ($i = 0; $i < $num; $i++) {
                $start = $i * $this->max_count;
                echo $start . '---' . $this->max_count .PHP_EOL;

                $list = $this->mo->table("$otable")->where("id>$max_id")->limit("$start,$this->max_count")->fList();

                $count = count($list);
                echo $count.PHP_EOL;
                //清空表
                foreach ($list as $k => $v) {

                    if ($k % $this->max_num == 0) {
                        $sql = "insert into asset_past (`date`,uid,`type`,opt_type,oid,otable,ostatus,created,updated,addtime) values ";
                    }

                    $addtime = date("Y-m-d H:i:s",$v['created']);
                    $opt_type = $v['opt_type']=='in'?1:2;
                    $sql .= "('{$addtime}','{$v['uid']}','{$type}','{$opt_type}','{$v['id']}','exchange_{$cv['name']}','{$v['status']}','{$v['created']}','{$v['updated']}','{$time}'),";

                    if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                        $sql = substr($sql, 0, strlen($sql) - 1);
                        $this->mo->exec($sql);
                    }
                }
            }

        }

        return '成功';
    }

    //委托 9
    public function trustAction(){

        $type = 9;
        $coin = CoinModel::getInstance()->field("name")->fList();
//        var_dump($coin);die;

        foreach ($coin as $cv){

            $otable = "trust_{$cv['name']}coin";

            //首先查找出用户数据库中该类型最大的ID
            $max_id = $this->mo->table('asset_past')->where("type=$type and otable='{$otable}'")->order("oid desc")->fOne("oid");//created desc,
            $max_id = $max_id?$max_id:0;


            //数据表名如果不存在跳走
            $table = $this->mo->query("show tables like '{$otable}'");
            if(!$table) continue;
            $list_count = $this->mo->table("$otable")->where("id>$max_id and uid!=$this->robot_uid")->fOne("count(id)");

            //次数
            $num = $list_count > $this->max_count ? ceil($list_count / $this->max_count):1;
            $time = time();
            for ($i = 0; $i < $num; $i++) {
                $start = $i * $this->max_count;
                echo $start . '---' . $this->max_count .PHP_EOL;

                $list = $this->mo->table("$otable")->where("id>$max_id and uid!=$this->robot_uid")->limit("$start,$this->max_count")->fList();

                $count = count($list);
                echo $count.PHP_EOL;
                //清空表
                foreach ($list as $k => $v) {

                    if ($k % $this->max_num == 0) {
                        $sql = "insert into asset_past (`date`,uid,`type`,opt_type,coin_from,coin_to,oid,otable,ostatus,created,updated,addtime) values ";
                    }

                    $addtime = date("Y-m-d H:i:s",$v['created']);
                    $opt_type = $v['flag']=='buy'?1:2;
                    $sql .= "('{$addtime}','{$v['uid']}','{$type}','{$opt_type}','{$v['coin_from']}','{$v['coin_to']}','{$v['id']}','{$otable}','{$v['status']}','{$v['created']}','{$v['updated']}','{$time}'),";

                    if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                        $sql = substr($sql, 0, strlen($sql) - 1);
                        $this->mo->exec($sql);
                    }
                }
            }

        }

        return '成功';
    }

    //成交 10
    public function orderAction(){

        $type = 10;
        $coin = CoinModel::getInstance()->field("name")->fList();
//        var_dump($coin);die;

        foreach ($coin as $cv){

            $otable = "order_{$cv['name']}coin";

            //首先查找出用户数据库中该类型最大的ID
            $max_id = $this->mo->table('asset_past')->where("type=$type and otable='{$otable}'")->order("oid desc")->fOne("oid");//created desc,
            $max_id = $max_id?$max_id:0;


            //数据表名如果不存在跳走
            $table = $this->mo->query("show tables like '{$otable}'");
            if(!$table) continue;
            $list_count = $this->mo->table("$otable")->where("id>$max_id and (buy_uid!=$this->robot_uid or sale_uid!=$this->robot_uid)")->fOne("count(id)");

            //次数
            $num = $list_count > $this->max_count ? ceil($list_count / $this->max_count):1;
            $time = time();
            for ($i = 0; $i < $num; $i++) {
                $start = $i * $this->max_count;
                echo $start . '---' . $this->max_count .PHP_EOL;

                $list = $this->mo->table("$otable")->where("id>$max_id and (buy_uid!=$this->robot_uid or sale_uid!=$this->robot_uid)")->limit("$start,$this->max_count")->fList();

                $count = count($list);
                echo $count.PHP_EOL;
                //清空表
                foreach ($list as $k => $v) {

                    if ($k % $this->max_num == 0) {
                        $sql = "insert into asset_past (`date`,uid,fuid,`type`,opt_type,coin_from,coin_to,oid,otable,created,addtime) values ";
                    }

                    $addtime = date("Y-m-d H:i:s",$v['created']);
                    $sql .= "('{$addtime}','{$v['buy_uid']}','{$v['sale_uid']}','{$type}','{$v['opt']}','{$v['coin_from']}','{$v['coin_to']}','{$v['id']}','{$otable}','{$v['created']}','{$time}'),";

                    if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                        $sql = substr($sql, 0, strlen($sql) - 1);
                        $this->mo->exec($sql);
                    }
                }
            }

        }
        return '成功';
    }


    //C2C与OTC分红导到 fee_bonus
    public function fee_mergeAction(){
        $type = 6;

        //首先查找OTC都有哪些类型

            //首先查找出用户数据库中该类型最大的ID
//            $max_id = $this->mo->table('asset_past')->where("type=$type and otable='{$feev}'")->order("oid desc")->fOne("oid");//created desc,
//            $max_id = $max_id?$max_id:0;

            $list_count = $this->mo->table("fee_bonus_recharge")->fOne("count(id)");


            //次数
        $num = $list_count > $this->max_count? ceil($list_count / $this->max_count):1;

//        $time = time();
        for ($i = 0; $i < $num; $i++) {
            $start = $i * $this->max_count;
            echo $start . '---' . $this->max_count .PHP_EOL;

            $list = $this->mo->table("fee_bonus_recharge")->limit("$start,$this->max_count")->fList();

            $count = count($list);
            echo $count.PHP_EOL;
            //清空表
            foreach ($list as $k => $v) {

                if ($k % $this->max_num == 0) {
                    $sql = "insert into fee_bonus (`uid`,type,origin_uid,number,coin_to,oid,otable,fee,created) values ";
                }

//                $addtime = date("Y-m-d H:i:s",$v['addtime']);
                $sql .= "({$v['uid']},'{$type}','{$v['origin_uid']}','{$v['number']}','{$v['coin']}','{$v['oid']}','{$v['otable']}','{$v['fee']}','{$v['created']}'),";

                if ($k && $k % ($this->max_num) == ($this->max_num - 1) || $k == ($count - 1)) {
                    $sql = substr($sql, 0, strlen($sql) - 1);
                    $this->mo->exec($sql);
                }
            }
        }
    }
}