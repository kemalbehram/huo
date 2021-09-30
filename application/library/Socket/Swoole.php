<?php

class Socket_Swoole{

    private static $instance;
    private static $server;
    private $message;

    //单例
    private function __construct()
    {
        self::$server = new Swoole\WebSocket\Server("192.168.1.111", 9502);
        self::$server->on("open",[$this,"onOpen"]);
        self::$server->on("message",[$this,"onMessage"]);
        self::$server->on("close",[$this,"onClose"]);
        self::$server->on("workerStart",[$this,"onWorkerStart"]);
    }

    public function onOpen($server,$req){
//        self::$server->push($req->fd,json_encode(['userid'=>$req->fd]));
    }

    public function onMessage($server,$frame){
        self::$server->reload();//热加载

//        foreach ($server->connections as $v){
//            $server->push($v,$frame->data);
//        }

        call_user_func([$this->message,'call'],$frame->fd,$frame->data,$server);
    }

    public function onClose($server,$fd){

    }

    public function onWorkerStart(){
        $this->message = new Socket_BaseController();
    }

    public static function getInstance(){
        if(!self::$instance instanceof self){
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function start(){
        self::$server->start();
    }
}


