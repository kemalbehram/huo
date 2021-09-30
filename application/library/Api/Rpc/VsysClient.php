<?php

class Api_Rpc_VsysClient{

    private $host;
    private $port;
    private $api_key;

    public function __construct($host,$port,$api_key){
        $this->host = $host;
        $this->port = $port;
        $this->api_key = $api_key;
        if(!$this->host || !$this->port || !$this->api_key) return false;
    }

    #生成地址
    public function createAddress(){
        if(!$this->host || !$this->port || !$this->api_key) return false;
        $url = 'http://'.$this->host.':'.$this->port.'/addresses';

        $headers = [
            'Accept: application/json',
            'api_key:'.$this->api_key
        ];
        $postData = [];

//        Tool_Fnc::ajaxMsg(1,0,$post_data);
        $res = $this->curl_post($url,$headers,$postData);
        return $res['address'];
    }


    #创建交易
    public function payment($amount,$fee,$sender,$recipient,$attachment='',$feeScale=100){
        if(!$this->host || !$this->port || !$this->api_key) return false;
        $url = 'http://'.$this->host.':'.$this->port.'/vsys/payment';

//        echo $url;die;
        $headers = [
            'Content-Type: application/json',
            'Accept: application/json',
            'api_key:'.$this->api_key
        ];

        $post_data = [
            'amount'=>$amount*100000000,
            'fee'=>$fee*100000000,
            'feeScale'=>$feeScale,
            'sender'=>$sender,
            'attachment'=>$attachment,
            'recipient'=>$recipient
        ];
        $post_data = json_encode($post_data);

        $res = $this->curl_post($url,$headers,$post_data);

        return $res;
    }

    #获取钱包余额
    public function get_balance($address){
        if(!$this->host || !$this->port || !$this->api_key) return false;
        $url = 'http://'.$this->host.':'.$this->port.'/addresses/balance/details/'.$address;

        $res = $this->curl_get($url);
        $res = json_decode($res,true);

        return $res['available']/100000000;
    }

    #查询交易记录
    public function transactions($address,$limit){

        $url = 'http://'.$this->host.':'.$this->port.'/transactions/address/'.$address.'/limit/'.$limit;
        $res = $this->curl_get($url);
        return json_decode($res,true);
    }

    #获取区块内的交易
    public function blocks($block){
        $url = 'http://'.$this->host.':'.$this->port.'/blocks/at/'.$block;
        $res = $this->curl_get($url);
        return json_decode($res,true);
    }



    #GET方法请求
    function curl_get($url,$timeout = 5){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $file_contents = curl_exec($ch);
        curl_close($ch);
        return $file_contents;
    }

    #POST方法请求
    function curl_post($url,$headers,$postData,$timeout=5)
    {
        //初始化
        $curl = curl_init();
        //设置抓取的url
        curl_setopt($curl, CURLOPT_URL, $url);
        //设置头文件的信息作为数据流输出
        curl_setopt($curl, CURLOPT_HEADER, 0);
        //设置获取的信息以文件流的形式返回，而不是直接输出。
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_POST, 1);//post提交方式
        //设置请求头
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postData);
        //执行命令
        $data = curl_exec($curl);
        //关闭URL请求
        curl_close($curl);
        //显示获得的数据

        return json_decode($data,true);
    }
}