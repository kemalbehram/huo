<?php


class Ajax_ChatController extends Ajax_BaseController
{
    //获取历史记录与KEY
    public function get_keyAction(){
        $this->_ajax_islogin();
        $client = coll('post','client');

        $mo = Orm_Base::getInstance();
        $mo->table = "socket_user_secret";
        $secrets = $mo->where("uid={$this->mCurUser['uid']}")->field("mo,secret")->fRow();

        if(!$secrets){
            $secret = Tool_Secret::encrypt($this->mCurUser['uid']);
            $in_id = $mo->insert(['uid'=>$this->mCurUser['uid'],'mo'=>$this->mCurUser['mo'],'secret'=>$secret,'created'=>time()]);
            if(!$in_id){
                $this->ajax("加密失败");
            }
        }else{
            $secret =  $secrets['secret'];
        }
        $smo = '***'.substr($this->mCurUser['mo'],strlen($this->mCurUser['mo'])-3);//(,'***',strlen($this->mCurUser['mo'])-3);
        $cmo = $mo->table('socket_user_secret')->where(['secret'=>$client])->fOne('mo');
        if(!$cmo) $this->ajax('该用户不存在');
        $cmo = '***'.substr($cmo,strlen($this->mCurUser['mo'])-3);
        $key = ['smo'=>$smo,'cmo'=>$cmo,'secret'=>$secret,'client'=>$client];

        $secretPair = strcmp($secret,$client)>0?$secret.'-'.$client:$client.'-'.$secret;
        $msg = $mo->table("socket_chat_msg")->where(['secret_pair'=>$secretPair])->fList();//->order('id desc')

        $data['key'] = $key;
        $data['msg'] = $msg;

        $this->ajax('获取成功',1,$data);
    }

    public function get_client_secretAction(){

        $this->_ajax_islogin();
        $cmo = coll('post','cmo');

        $mo = Orm_Base::getInstance();

        $cuid = $mo->table("user")->where("mo='$cmo'")->fOne('uid');

        $secrets = $mo->table("socket_user_secret")->where(['mo'=>$cmo])->field("mo,secret")->fRow();

        if(!$secrets){
            $secret = Tool_Secret::encrypt($cuid);
            $mo->table = "socket_user_secret";
            $in_id = $mo->insert(['uid'=>$cuid,'mo'=>$cmo,'secret'=>$secret,'created'=>time()]);
            if(!$in_id){
                $this->ajax("加密失败");
            }
        }else{
            $secret =  $secrets['secret'];
        }

        $this->ajax('获取成功',1,$secret);
    }

}
