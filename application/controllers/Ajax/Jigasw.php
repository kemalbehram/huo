<?php
class Ajax_JigaswController extends Ajax_BaseController{
    # 启用 SESSION
    protected $_auth = 1;
    public function getVerifyAction(){
        $data = array(
            "left" => Jigasw_Init::getLeftLength(),
            "height" => Jigasw_Init::getHeightLength()
        );
        $_SESSION["jigasw"] = $data;
        $this->ajax("成功",1,[$data]);
    }

    public function captchaverifyAction(){
        $left = coll("post","left");
        if(!empty($_SESSION['jigasw'])){
            if(abs($left-$_SESSION['jigasw']['left']) < 10){
                $captcha = new Tool_Captcha(80, 35, 4);
                $code = $captcha->getCode();
                $this->ajax("成功",1,["code"=>$code]);
            }
        }
        $this->ajax("失败",0,[$left]);
    }
    


}