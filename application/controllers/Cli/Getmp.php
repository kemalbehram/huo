<?php
/**
 * dst  活动
 *
 */
class Cli_GetmpController extends Ctrl_Cli
{
    const OPT_READ_TIMEOUT = 300;

    public function runAction(){

        $redis = new Redis();
        $redis->connect('192.168.1.108','6379',5);
        $redis->auth('2008china'); //密码验证


        $redis->setOption(Redis::OPT_READ_TIMEOUT, self::OPT_READ_TIMEOUT);
        $redis->select(1);

        $arr = $redis->hGetAll('swap_user_secret');



        var_dump($arr);

        die;
    }
}