<?php
class Validate_C2c {

    /**
     * 验证价格
     * @param array $postData
     * @return array
     */
    public function TrustPrice($postData = array()){
        if(empty($postData)){
            return self::error("未提交任何数据");
        }

        $price = floatval($postData['num']);//下单金额
        $type = trim($postData['type']);//下单类型 1:买  2：卖

        if(empty($type) || empty($price)){
            return self::error("请输入金额");
        }

        if(!is_numeric($price) || strpos($price,".") !== false){
            return self::error("请检查交易的金额");
        }

        if($price < 100){
            return self::error("交易金额最低为100");
        }

        if($price%100 != 0){
            return self::error("交易金额必须是100的整数倍");
        }

        return self::success("成功",1,$data = array("price"=>$price,"type" => $type));
    }

    /**
     * 成功返回数据
     * @param string $msg
     * @param int $code
     * @param array $data
     * @return array
     */
    public static function success($msg = "",$code = 1,$data = array()){
        $result = array(
            "msg" => $msg,
            "code" => $code,
            "data" => $data
        );
        return $result;
    }

    /**
     * 失败返回数据
     * @param string $msg
     * @param int $code
     * @param array $data
     * @return array
     */
    public static function error($msg = "",$code = 0,$data = array()){
        $result = array(
            "msg" => $msg,
            "code" => $code,
            "data" => $data
        );
        return $result;
    }

}