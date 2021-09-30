<?php
class MoreController extends Ctrl_Base
{

    protected $_auth = 1;

//    function init()
//    {
//        parent::init();
//        $this->assign('pageName', $this->_request->action);
//    }


    public function indexAction($page = 1){

    }

    public function luckyAction($page = 1){
        if($this->mCurUser['uid']) Tool_Session::mark($this->mCurUser['uid']);
    }

    public function getHashAction(){
        $luckHashMo = LuckHashModel::getInstance();

        $luckHash = $luckHashMo->order('id desc')->fRow();

        Tool_Out::p($luckHash);die;

    }
}