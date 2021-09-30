<?php
/**
 * dst  活动
 *
 */
class Cli_DoubleballController extends Ctrl_Cli
{
    public function runAction()
    {

        $list = [];
        while (count($list)<6){
            $list[] = rand(1,33);
        }
        $list[] = rand(1,16);



        $money = 0;

        while (true){
            $cj = [];
            while (count($cj)<6){
                $cj[] = rand(1,33);
            }
            $cj[] = rand(1,16);

            if($list==$cj){
                echo '终于中奖了,花了'.$money.'块钱！';
                break;
            }else{
                $money+=2;
                echo '已花'.$money.'块钱'.PHP_EOL;
            }

        }





        die;

    }


}