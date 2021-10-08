<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/9/3
 * Time: 14:19
 */
class Ajax_MidautumnController extends Ajax_BaseController
{
    # 启用 SESSION
    protected $_auth = 1;
    const START_TIME = '2019-09-04';
    const END_TIME = '2019-09-16';

    public function activAction()
    {
        //$this->_ajax_islogin();
        $data = $_POST;
       
        if(!$data['bak'] || !$data['address'] || !$data['mo'] || !$data['name']) $this->ajax("提交失败",0);
        $start = strtotime(self::START_TIME);
        $end = strtotime(self::END_TIME);
        $created = time();
        $link = Orm_Base::getInstance();
        $uid = $this->mCurUser['uid'];//505

        if(!$uid) $this->ajax("请先登录",0);
        $mid = $link->query("select id from mid_autumn where bak='{$data['bak']}'");
        if($mid) $this->ajax("该订单已提交，请勿重复提交",0);

        $order = $link->query("select * from exchange_wcg where bak='{$data['bak']}'and uid={$uid} and status='成功' and number_real>=5000 ");// and created
        if(!$order) $this->ajax("该订单不存在",0);

        $orders = $link->query("select * from exchange_wcg where '{$order[0]['created']}' between {$start} and {$end}");
        if(!$orders) $this->ajax("该订单不在送礼范围内",0);
        //$orders = $link->query("se");
        $number = $order[0]['number_real'];
        
        $number = floor($number/5000);
        if($number==1){
            $gift = 1;
        }else if($number==2){
            $gift = 2;
        }else{
            $gift = 3;
        }
        $in_id = $link->exec("insert into mid_autumn(`uid`,`address`,`mo`,`gift`,`number`,`bak`,`status`,`created`) values({$uid},'{$data['address']}','{$data['mo']}',
{$gift},{$order[0]['number_real']},'{$data['bak']}',0,{$created})");


        if($in_id){
            $this->ajax("提交成功",1);
        }
        $this->ajax("提交失败",0);
    }

    public function order_listAction(){
        $uid = $this->mCurUser['uid'];//505

        $mo = Orm_Base::getInstance();
        $order_list = $mo->query("select * from mid_autumn where uid=$uid");

        if(!$order_list) $this->ajax("",0);
        $this->ajax("成功",1,$order_list);
    }
}