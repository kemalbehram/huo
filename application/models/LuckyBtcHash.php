<?php
class LuckyBtcHashModel extends Orm_Base
{
	public $table = 'lucky_btc_hash';
	public $pk = 'id';


    public function addData(){

        //查询第一条数据
        $height = $this->order('height desc')->fOne('height')?:596165;

        $nextHash = $height+1;
        $file = json_decode(file_get_contents("https://chain.api.btc.com/v3/block/$nextHash"),true);

        if(isset($file) && isset($file['data']) && $file['data']){
            $data = $file['data'];

            $in_data = [
                'height'=>$data['height'],
                'timestamp' => $data['timestamp'],
                'created_at' => $data['created_at'],
                'hash' => $data['hash'],
                'winning_num' => $this->findNum($data['hash']),
                'data' => json_encode($data),
                'created' => time()
            ];
            if($in_id = $this->insert($in_data)) return true;

        }
        return false;
    }


    public function addDataL($coin = 'btc'){
        //查询第一条数据
        $height = $this->order('height desc')->fOne('height')?:596165;
        $nextHash = $height+1;

        $rpcurl = Yaf_Registry::get("config")->api->rpcurl->$coin;

        //获取hash详情
        $rpcMo = new Api_Rpc_Client($rpcurl);
        $hash = $rpcMo->getblockhash($nextHash);
        if(!isset($hash) || !$hash) return false;
        $data = $rpcMo->getblockheader($hash);
        if(!isset($data) || !$data) return false;

        $in_data = [
            'height'=>$data['height'],
            'timestamp' => $data['time'],
            'created_at' => $data['mediantime'],
            'hash' => $data['hash'],
            'winning_num' => $this->findNum($data['hash']),
            'data' => json_encode($data),
            'created' => time()
        ];
        if($in_id = $this->insert($in_data)) return true;

        return false;
    }


    function findNum($str=''){
        $str=trim($str);
        if(empty($str)){return 0;}
        $result = 0;
        for($i=0;$i<strlen($str);$i++){
            if(is_numeric($str[$i])){
                $result=$str[$i];
            }
        }
        return $result;
    }
}
