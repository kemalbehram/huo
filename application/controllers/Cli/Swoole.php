<?php
/**
 * BTC自动交易
 *
 */
class Cli_SwooleController extends Ctrl_Cli
{

    public function runAction(){

        Socket_Swoole::getInstance()->start();


//
//        $server = new Swoole\WebSocket\Server("eyfh3m.natappfree.cc", 9502);//, SWOOLE_SOCK_TCP  192.168.1.193
//
//        //客户端连接到服务器时，自动触发open事件，自动执行回调函数
//        $server->on('open', function($server, $req) {
////            echo "connection open: {$req->fd}\n";
//
//            $server->push($req->fd,json_encode(['userid'=>$req->fd]));
//        });
//
//        $server->on('message', function($server, $frame) {
////            echo "received message: {$frame->data}\n";
//
//            foreach ($server->connections as $v){
//                $server->push($v,$frame->data);
//            }
//
//
////            $server->push($frame->fd, json_encode(["hello", "world"]));
//        });
//
//        $server->on('close', function($server, $fd) {
////            echo "connection close: {$fd}\n";
//        });
//
//        $server->start();

    }


//    public function __destruct()
//    {
//        // TODO: Implement __destruct() method.
//        die(PHP_EOL.PHP_EOL.PHP_EOL.'结束'.PHP_EOL);
//    }
}