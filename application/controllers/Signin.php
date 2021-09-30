<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 2019/2/16
 * Time: 10:32
 */

class SigninController extends Ctrl_Base
{
    protected $_auth = 1;
   
    function init(){
        parent::init();
        $this->assign('pageName', $this->_request->action);
    }
    //首页
    public function indexAction(){
        
    }
}



