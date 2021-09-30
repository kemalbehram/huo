<?php
/**
 *  静态资源
 */
class AjcController extends Ctrl_Base
{

    public function outAction(){
        set_time_limit(0);
        $mo = Orm_Base::getInstance();
        $ex = $mo->query("select id,address from area where number=0  and status=0 limit 0,20");
//        p($ex);die;
        $coin = 'ect';
        $rpcurl = Yaf_Registry::get("config")->api->rpcurl->$coin;
        $str = mb_substr($rpcurl, mb_strlen('http://'));
        $address = mb_substr($str, 0, mb_strpos($str, ':'));
        $port = mb_substr($str, mb_strpos($str, ':') + 1);
        $pass = '7ZAzIF+cXLo4jvrr1c4dAw831lkNBl+YjaYWIbTsRS3W4DYoDSg96kUwpYKTzxZe5+HHegk9v3YYtWj0l87YEaHExKCXWpff';
        $pass = Tool_Wallet::encrypt($pass,'D',Tool_Wallet::key());

        //判断钱包状态
        $CoinClient = new Api_Rpc_EthClient($address, $port);
        //echo $address.'-'.$port;die;

        $json = $CoinClient->eth_blockNumber(true);
        if (empty($json) || $json <= 0) echo '失败';
        $call = ['to' => '0x186b32c1b89db762a8ffa317172a4926714e6336', 'data' => '0x70a08231' . $CoinClient->data_pj('0x893a78524affb1a7ff06b47aec24abb40fb6a150')];
        $plat_balance = $CoinClient->real_banlance_token($CoinClient->decode_hex($CoinClient->eth_call($call)),8);

//        echo $plat_balance;die;


//        echo $pass;die;

        foreach($ex as $v){
            //站外转出
            //ETH系列

            $number = mt_rand(5000,30000);
            $value = $CoinClient->encode_dec($CoinClient->to_real_value_token(floatval($number),8));
            $tradeInfo = [[
                'from' => '0x893a78524affb1a7ff06b47aec24abb40fb6a150',
                'to' => '0x186b32c1b89db762a8ffa317172a4926714e6336',
                'data' =>  '0xa9059cbb'. $CoinClient->data_pj($v['address'], $value),
            ]];
            $sendrs = $CoinClient->eth_sendTransaction('0x893a78524affb1a7ff06b47aec24abb40fb6a150',$pass, $tradeInfo);
            if(($sendrs && !isset($sendrs_arr['status']))) {
                $up_id = $mo->exec("update area set number={$number},status='1' where id={$v['id']}");
                echo $up_id.'-';
            }
        }
        die;
    }


    //测试
    public function indexAction()
    {
        set_time_limit(0);
        $coin = 'ect';
        $num = 1000;
        $pass = 'bjs88888';
        $create = time();
        $mo = Orm_Base::getInstance();

//        $addr = $this->getAjcAddressAction();
//        $id = $mo->exec("insert into `area`(address,coin,created,secret) values('{$addr}','{$coin}',{$create},'{$pass}')");
//
//        echo $mo->getLastSql();
//
//        echo $addr.'-'.$id;die;

        for($i=0;$i<100;$i++){
            $addr = $this->getAjcAddressAction();
            $id = $mo->exec("insert into `area`(address,coin,created,secret) values('{$addr}','{$coin}',{$create},'{$pass}')");
            //sleep(2);
            echo $id.'-';
        }


        die('end');
    }


    private function getAjcAddressAction(){

        $coin = 'ect';
        $type = 'eth';
        $rpcurl = Yaf_Registry::get("config")->api->rpcurl->$coin;

        if (empty($rpcurl)) return false;

        $params = '{"jsonrpc":"2.0","method":"personal_newAccount", "params":["bjs88888"],"id":1}';
        $headers   = array('Content-type: application/json');
        $strResult = Tool_Fnc::callInterfaceCommon($rpcurl, "POST", $params, $headers);
        $strResult = json_decode($strResult, true);
//      Tool_Fnc::ajaxMsg(json_encode($strResult['error']));
        if (isset($strResult['error'])) return false;
        $addrs = $strResult['result'];
        return $addrs;
    }

}
