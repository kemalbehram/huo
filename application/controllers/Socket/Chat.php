<?php

class Socket_ChatController{// extends Ctrl_Base  extends Socket_BaseController



    public function register($client_id,$data,$server){
        $redis = Cache_Redis::instance("common");

        //比较两个secret，大的排在前面
        if(strcmp($data['secret'],$data['client'])>0){
            $key = $data['secret'].'-'.$data['client'];
        }else{
            $key = $data['client'].'-'.$data['secret'];
        }

        $res = $redis->hget('c2c_chat',$key);
        if(!$res){
            if(strcmp($data['secret'],$data['client'])>0){
                $redis->hset('c2c_chat',$key,json_encode(['secret'=>$client_id]));
            }else{
                $redis->hset('c2c_chat',$key,json_encode(['client'=>$client_id]));
            }
        } else{
            $res = json_decode($res,true);
            if(strcmp($data['secret'],$data['client'])>0){
                $server->push($res['secret'],json_encode(['status'=>0,'msg'=>'已关闭']));
                $res['secret'] = $client_id;
            }else{
                $server->push($res['client'],json_encode(['status'=>0,'msg'=>'已关闭']));
                $res['client'] = $client_id;
            }
            $redis->hset('c2c_chat',$key,json_encode($res));
        }

    }



    public function send($client_id,$data,$server){

        //比较两个secret，大的排在前面
        if(strcmp($data['secret'],$data['client'])>0){
            $key = $data['secret'].'-'.$data['client'];
        }else{
            $key = $data['client'].'-'.$data['secret'];
        }

        $redis = Cache_Redis::instance("common");

        $res = $redis->hget('c2c_chat',$key);
        $res = json_decode($res,true);

        $mo = Orm_Base::instance();
        $mo->table = 'socket_chat_msg';
        $in_id = $mo->insert(['secret'=>$data['secret'],'secret_pair'=>$key,'msg'=>$data['message'],'created'=>time()]);

        if($in_id){
            if(strcmp($data['secret'],$data['client'])>0){
                $server->push($res['client'],json_encode($data));
            }else{
                $server->push($res['secret'],json_encode($data));
            }
        }else{
            $server->push($res['secret'],json_encode(['status'=>0,'msg'=>'发送失败']));
            $server->push($res['client'],json_encode(['status'=>0,'msg'=>'发送失败']));
        }
    }

    public function __destruct(){}

}
