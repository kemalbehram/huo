<?php
/**
 * 前台首页
 */
class ChatController extends Ctrl_Base
{
    protected $_auth = 3;

    /**
     * 首页
     */
    public function indexAction()
    {
//        $client = coll('get','client');
//
//        $mo = Orm_Base::getInstance();
//        $mo->table = "socket_user_secret";
//        $secrets = $mo->where("uid={$this->mCurUser['uid']}")->field("mo,secret")->fRow();
//
//        if(!$secrets){
//            $secret = Tool_Secret::encrypt($this->mCurUser['uid']);
//            $in_id = $mo->insert(['uid'=>$this->mCurUser['uid'],'mo'=>$this->mCurUser['mo'],'secret'=>$secret,'created'=>time()]);
//            if(!$in_id){
//                $this->ajax("加密失败");
//            }
//        }else{
//            $secret =  $secrets['secret'];
//        }
//        $smo = '***'.substr($this->mCurUser['mo'],strlen($this->mCurUser['mo'])-3);//(,'***',strlen($this->mCurUser['mo'])-3);
//        $cmo = $mo->table('socket_user_secret')->where(['secret'=>$client])->fOne('mo');
//        if(!$cmo) $this->ajax('该用户不存在');
//        $cmo = '***'.substr($cmo,strlen($this->mCurUser['mo'])-3);
//        $key = ['smo'=>$smo,'cmo'=>$cmo,'secret'=>$secret,'client'=>$client];
//
//        $secretPair = strcmp($secret,$client)>0?$secret.'-'.$client:$client.'-'.$secret;
//        $msg = $mo->table("socket_chat_msg")->where(['secret_pair'=>$secretPair])->fList();//->order('id desc')
//
//
//        $this->assign("key",$key);
//        $this->assign('msg',$msg);
    }

    //添加分割符
    private function replace($str)
    {
        $str = substr_replace($str, '-', 8, 0);
        $str = substr_replace($str, '-', 13, 0);
        $str = substr_replace($str, '-', 18, 0);
        $str = substr_replace($str, '-', 23, 0);
        return $str;
    }

    public function __destruct(){
//        die(PHP_EOL.'结束');
    }
}
