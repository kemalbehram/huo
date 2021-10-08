<?php

class Socket_BaseController
{
//    public $fd = ['user','login'];
    public function call($client_id,$data,$server){

        $data = json_decode($data,true);
        if(!isset($data['cmd'])) return;
        $cmd = explode('.',$data['cmd']);

        if(file_exists(__DIR__."/{$cmd[0]}.php")) {
            $className = "Socket_".ucfirst($cmd[0])."Controller";
            $class = new $className();
            if(method_exists($class,$cmd[1])){
                call_user_func([$class,$cmd[1]],$client_id,$data['data'],$server);
            }
        }
    }
}
