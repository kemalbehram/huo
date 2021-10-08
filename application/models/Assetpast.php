<?php
class AssetpastModel extends Orm_Base{
    public $table = 'asset_past';
    public $pk = 'id';


    CONST ASSET_TYPE_RECHARGE   = 1;
    CONST ASSET_TYPE_C2CTRUST   = 2;
    CONST ASSET_TYPE_C2CORDER   = 3;
    CONST ASSET_TYPE_OTCTRUST   = 4;
    CONST ASSET_TYPE_OTCORDER   = 5;
    CONST ASSET_TYPE_DIVIDEND   = 6;
    CONST ASSET_TYPE_INTEREST   = 7;
    CONST ASSET_TYPE_EXCHANGE   = 8;
    CONST ASSET_TYPE_TRUST      = 9;
    CONST ASSET_TYPE_ORDER      = 10;
    CONST ASSET_TYPE_ACTIVE     = 11;


    //获取表名
    public static function asset_table($key = "")
    {
        $array = [
            self::ASSET_TYPE_RECHARGE => 'user_recharge',
            self::ASSET_TYPE_C2CTRUST => 'c2c_trade',
            self::ASSET_TYPE_C2CORDER => 'c2c_trade_log',
            self::ASSET_TYPE_OTCTRUST => 'otc_trust_',
            self::ASSET_TYPE_OTCORDER=>'otc_order_',
            self::ASSET_TYPE_DIVIDEND => 'fee_bonus',
            self::ASSET_TYPE_INTEREST => 'user_bonus',
            self::ASSET_TYPE_EXCHANGE => 'exchange_',
            self::ASSET_TYPE_TRUST => 'trust_',
            self::ASSET_TYPE_ORDER => 'order_',
            self::ASSET_TYPE_ACTIVE => "active_reward"
        ];
        return empty($key)&&$key!==0?$array:$array[$key];
    }

    /**
     * 添加操作资金流水
     * @param array $oldUserInfo
     * @param array $newUserInfo
     * @param int $oid
     * @param int $type
     * @param string $coin
     * @param string $coin_to
     * @param string $opt_type
     * @param string $status
     * @return bool
     */
    public function InsertAssetData($oldUserInfo = array(),$newUserInfo = array(),$oid = 0,$type = 0,$coin = "",$coin_to = "cnyx",$status = "",$opt_type = ""){
        if(empty($oid) || empty($type) || empty($oldUserInfo) || empty($newUserInfo)){
            return false;
        }
        $data = array(
            "oid" => $oid,
            "date" => date("Y-m-d H:i:s",time()),
            "uid" => $oldUserInfo['uid'],
            "type" => $type,
            "opt_type" => empty($opt_type)?0:$opt_type,
            "to_former_over" => $oldUserInfo[$coin_to."_over"],
            "to_former_lock" => $oldUserInfo[$coin_to."_lock"],
            "to_now_over" => $newUserInfo[$coin_to."_over"],
            "to_now_lock" => $newUserInfo[$coin_to."_lock"],
            "created" => time(),
            "updated" => time(),
        );
        switch($type){
            case self::ASSET_TYPE_DIVIDEND:
                $data["coin_from"] = $coin;
                $data["coin_to"] = $coin_to;
                $data["otable"] = self::asset_table($type);
                break;
            case self::ASSET_TYPE_RECHARGE:
            case self::ASSET_TYPE_C2CTRUST:
            case self::ASSET_TYPE_C2CORDER:
                $data["coin_from"] = $coin;
                $data["coin_to"] = $coin_to;
                $data["otable"] = self::asset_table($type);
                $data['ostatus'] = $status;
                break;
            case self::ASSET_TYPE_INTEREST:
                $data["coin_from"] = $coin;
                $data["coin_to"] = $coin_to;
                $data["otable"] = self::asset_table($type);
                $data['former_over'] = $oldUserInfo[$coin.'_over'];
                $data['former_lock'] = $oldUserInfo[$coin.'_lock'];
                $data['now_over'] = $newUserInfo[$coin.'_over'];
                $data['now_lock'] = $newUserInfo[$coin.'_lock'];
                break;
            case self::ASSET_TYPE_OTCORDER:
            case self::ASSET_TYPE_OTCTRUST:
                $data['coin_from'] = $coin;
                $data['coin_to'] = $coin_to;
                $data['ostatus'] = $status;
                $data["otable"] = self::asset_table($type).$coin;
                break;
            case self::ASSET_TYPE_EXCHANGE:
                $data['coin_from'] = $coin;
                $data['coin_to'] = $coin_to;
                $data['ostatus'] = $status;
                $data["otable"] = self::asset_table($type).$coin;
                $data['former_over'] = $oldUserInfo[$coin.'_over'];
                $data['former_lock'] = $oldUserInfo[$coin.'_lock'];
                $data['now_over'] = $newUserInfo[$coin.'_over'];
                $data['now_lock'] = $newUserInfo[$coin.'_lock'];
                break;
            case self::ASSET_TYPE_TRUST:
                $data['coin_from'] = $coin;
                $data['coin_to'] = $coin_to;
                $data['ostatus'] = $status;
                $data["otable"] = self::asset_table($type).$coin;
                $data['former_over'] = $oldUserInfo[$coin.'_over'];
                $data['former_lock'] = $oldUserInfo[$coin.'_lock'];
                $data['now_over'] = $newUserInfo[$coin.'_over'];
                $data['now_lock'] = $newUserInfo[$coin.'_lock'];
                break;
            case self::ASSET_TYPE_ORDER:
                $data['coin_from'] = $coin;
                $data['coin_to'] = $coin_to;
                $data['ostatus'] = $status;
                $data["otable"] = self::asset_table($type).$coin;
                $data['former_over'] = $oldUserInfo[$coin.'_over'];
                $data['former_lock'] = $oldUserInfo[$coin.'_lock'];
                $data['now_over'] = $newUserInfo[$coin.'_over'];
                $data['now_lock'] = $newUserInfo[$coin.'_lock'];
                break;
            case self::ASSET_TYPE_ACTIVE:
                $data['ostatus'] = $status;
                $data["otable"] = self::asset_table($type);
                $data['coin_from'] = $coin;
                $data['coin_to'] = $coin_to;
                $data['former_over'] = $oldUserInfo[$coin.'_over'];
                $data['former_lock'] = $oldUserInfo[$coin.'_lock'];
                $data['now_over'] = $newUserInfo[$coin.'_over'];
                $data['now_lock'] = $newUserInfo[$coin.'_lock'];
                break;
            default:
                break;
        }
        $insert_id = $this->insert($data);
        if($insert_id > 0){
            return true;
        }
        return false;
    }


    //交易写入明细
    public function tradeBuy($value,$oid,$ostatus,$uinfo,$uid,$fuid,$type,$otable,$opt_type=1){

        $time = time();
        $from_data = [
            'date' => date('Y-m-d H:i:s'),
            'uid' => $uid,
            'fuid'=>$fuid,
            'type' => $type,
            'opt_type'=>$opt_type,
            'coin_from'=>$value['coin_from'],
            'coin_to' =>$value['coin_to'],
            'oid'=>$oid,
            'otable'=>$otable,
            'ostatus'=>$ostatus,
            'now_over'=>floatval($uinfo["{$value['coin_from']}_over"]),
            'now_lock'=>floatval($uinfo["{$value['coin_from']}_lock"]),
            'to_now_over'=>floatval($uinfo["{$value['coin_to']}_over"]),
            'to_now_lock'=>floatval($uinfo["{$value['coin_to']}_lock"]),
            'created'=>$time,
            'addtime'=>$time,
        ];

        $this->insert($from_data);
    }


    /*
     * setTrust
     */
    public function asset_data($userInfo,$value,$type,$otable,$oid,$opt_type=1){

        $time = time();
//        $otable = "order_{$value['coin_from']}coin";
        $from_data = [
            'date' => date('Y-m-d H:i:s'),
            'uid' => $userInfo['uid'],
            'fuid'=>0,
            'type' => $type,
            'opt_type'=>$opt_type,
            'coin_from'=>$value['coin_from'],
            'coin_to' =>$value['coin_to'],
            'oid'=>$oid,
            'otable'=>$otable,
            'ostatus'=>empty($value['status'])?0:$value['status'],
            'now_over'=>floatval($userInfo["{$value['coin_from']}_over"]),
            'now_lock'=>floatval($userInfo["{$value['coin_from']}_lock"]),
            'to_now_over'=>floatval($userInfo["{$value['coin_to']}_over"]),
            'to_now_lock'=>floatval($userInfo["{$value['coin_to']}_lock"]),
            'created'=>$time,
            'addtime'=>$time,
        ];

        if($this->insert($from_data)){
            return true;
        }
        return false;
    }

    /*
     * 转入转出明细
     */
    public function wallet_asset($userInfo,$type,$coin_from,$oid,$otable,$ostatus=0,$opt_type=1){

        $time = time();
//        $otable = "order_{$value['coin_from']}coin";
        $from_data = [
            'date' => date('Y-m-d H:i:s'),
            'uid' => $userInfo['uid'],
            'fuid'=>0,
            'type' => $type,
            'opt_type'=>$opt_type,
            'coin_from'=>$coin_from,
            'coin_to' =>'',
            'oid'=>$oid,
            'otable'=>$otable,
            'ostatus'=>$ostatus,
            'now_over'=>floatval($userInfo["{$coin_from}_over"]),
            'now_lock'=>floatval($userInfo["{$coin_from}_lock"]),
            'to_now_over'=>floatval($userInfo["{$coin_from}_over"]),
            'to_now_lock'=>floatval($userInfo["{$coin_from}_lock"]),
            'created'=>$time,
            'addtime'=>$time,
        ];

        if($this->insert($from_data)){
            return true;
        }
        return false;
    }


}


