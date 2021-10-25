<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 2019/3/22
 * Time: 14:11
 */

class Cli_DaycountsqlController extends Ctrl_Cli
{

    public function runAction(){

        ini_set('memory_limit', '1280000000M');

        $mo = new Orm_Base();

        $coins = CoinModel::getInstance()->field("name")->fList();

        $day_before_count = $mo->table("day_before_count")->field('coin')->fList();



        if(!$day_before_count || count($coins) != count($day_before_count)){



            foreach ($coins as $v){
                $values[] = "('{$v['name']}')";
            }

            $sql = "INSERT INTO day_before_count (coin) values ".implode(',', $values);

            $mo->table = "day_before_count";
            $mo->exec($sql);

        }


        $daytime = time()-86400;
        foreach ($coins as $k=>$v){

            $orderMo = Order_CoinModel::getInstance();
            $orderMo->designTable($v['name']);

            $mo->table = "order_{$v['name']}coin";
            $table = $mo->query("show tables like '{$mo->table}'");
            if(!$table) continue;


            $sql = "SELECT sum(number*price) money FROM $mo->table where created>$daytime AND opt=1 AND coin_from='{$v['name']}' AND coin_to='usdt'";
            $trun = $orderMo->fRow($sql);

            $sumsql = "SELECT max(price) max, min(price) min, sum(number) sum FROM $mo->table WHERE created > " . $daytime. " AND opt=1 and coin_from='{$v['name']}' and coin_to='usdt'";
            $sum = $orderMo->fRow($sumsql);

            $mo->table = "day_before_count";
            $mo->where("coin='{$v['name']}'")->update([
                'money'=>floatval($trun['money'])?:0,
                'max'=>floatval($sum['max'])?:0,
                'min'=>floatval($sum['min'])?:0,
                'sum'=>floatval($sum['sum'])?:0
            ]);

        }

        die("成功");
    }


}