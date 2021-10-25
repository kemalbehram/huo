<?php
/**
 * 统计用户资产
 */
class Cli_CountController extends Ctrl_Cli
{

    public function runAction(){

        $coins = CoinModel::getInstance()->filed('name')->fList();

        $userMo = UserModel::getInstance();
        $count = $userMo->where("spy=0")->field("sum(usdt_over)")->fList();


        Tool_Out::p($count);die;








    }




}