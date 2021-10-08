<?php
class Tool_Wallet
{
    /**
     * 判断该地址是否是钱包地址
     */
    public static function isYbcoin($wallet){
        if(Tool_Validate::az09($wallet) && strlen($wallet) == 34 && substr($wallet, 0, 1) == 'Y'){
            return  true;
        }
        return false;
    }
    /**
     * 获取该币种当前的产量
     * @param coin 币种
     */
    public static function getSupply($coin){
        //没有总量的币，写死
        switch($coin){
            case 'tmt':
                return 30000000;
                break;
            default:
                break;
        }
        $info = Api_Rpc_Client::instance($coin)->getinfo();
        if(empty($info)){
            return false;
        }
        $supply = isset($info['moneysupply']) ? $info['moneysupply'] : (isset($info['supply']) ? $info['supply'] : 0);
        return $supply;
    }
    /**
     * 获取钱包余额
     */
    public static function getBalance($coin){
        $info = Api_Rpc_Client::instance($coin)->getinfo();
        if(empty($info)){
            return false;
        }
        $balance = isset($info['balance']) ? $info['balance'] : 0;
        return $balance;
    }

    /*
     * 钱包数据加密
     */
    public static function encrypt($string,$operation,$key=''){
        $key=md5($key.'TopNing997H');
        $key_length=strlen($key);
        $string=$operation=='D'?base64_decode($string):substr(md5($string.$key),0,8).$string;
        $string_length=strlen($string);
        $rndkey=$box=array();
        $result='';
        for($i=0;$i<=255;$i++){
            $rndkey[$i]=ord($key[$i%$key_length]);
            $box[$i]=$i;
        }
        for($j=$i=0;$i<256;$i++){
            $j=($j+$box[$i]+$rndkey[$i])%256;
            $tmp=$box[$i];
            $box[$i]=$box[$j];
            $box[$j]=$tmp;
        }
        for($a=$j=$i=0;$i<$string_length;$i++){
            $a=($a+1)%256;
            $j=($j+$box[$a])%256;
            $tmp=$box[$a];
            $box[$a]=$box[$j];
            $box[$j]=$tmp;
            $result.=chr(ord($string[$i])^($box[($box[$a]+$box[$j])%256]));
        }
        if($operation=='D'){
            if(substr($result,0,8)==substr(md5(substr($result,8).$key),0,8)){
                return substr($result,8);
            }else{
                return'';
            }
        }else{
            return str_replace('=','',base64_encode($result));
        }
    }

    /*
     * 钱包密钥
     */
    public static function key(){
        return $key = '-SDAfg,cvyuda=b7346788zx66';
    }
}
