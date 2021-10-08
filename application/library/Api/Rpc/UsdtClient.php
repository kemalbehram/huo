<?php

class Api_Rpc_UsdtClient{

    private $host;
    private $port;
    private $account;
    private $password;
    private $token;

    public function __construct($host = 'http://18.188.242.103',$port = '15115',$account = 'rKDiQGzFLWud1YcbkBKvu5NgMzBBNQYDor',$password = '',$token=''){
        $this->host = $host;
        $this->port = $port;
        $this->account = $account;
        $this->password = $password;
        $this->token = $token;
    }


    //生成新的Usdt地址
    public function accountInfo()
    {
        $params = '{
            "method": "account_info",
            "params": [
                {
                    "account": "'.$this->account.'",
                    "strict": true,
                    "ledger_index": "current",
                    "queue": true
                }
            ]
        }';

        return $this->post($params);
    }


}