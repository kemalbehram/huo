<?php
/**
 * 定义数组
 */
class Tool_Aes
{

    public static function asset_type()
    {
        $array = [
            1=>'用户充值',
            2=>'C2C委托',
            3=>'C2C成交',
            4=>'OTC委托',
            5=>'OTC成交',
            6=>'分红',
            7=>'每日利息',
            8=>'转入转出',
            9=>'委托',
            10=>'成交'
        ];

        return $array;
    }
}