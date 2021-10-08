<?php

class AssetDetailModel extends Orm_Base
{
	public $table = 'asset_detail';
//	public $field = array(
//		'id' => array('type' => "int", 'comment' => 'id'),
//		'uid' => array('type' => "int", 'comment' => '用户id'),
//		'address' => array('type' => "char", 'comment' => '钱包地址'),
//		'coin' => array('type' => "char", 'comment' => '币种'),
//		'secret' => array('type' => "char", 'comment' => '用户密码'),
//		'publicKey' => array('type' => "char", 'comment' => '用户公钥'),
//		'status' => array('type' => "int", 'comment' => '0 显示 , 1 删除'),
//		'created' => array('type' => "int", 'comment' => '创建时间'),
//		'updated'=>array('type'=>"int",'comment'=>''),
//		'label'=>array('type'=>"varchar(100) unsigned",'comment'=>'标签')
//	);
	public $pk = 'id';


	//委托写入资产明细
	public function setTrust(&$pUser, $pData,$coinData,$oid,$table){

        if($id = $this->insert(
            [
            'date' => date('Y-m-d H:i:s'),
            'type' => 1,
            'opt_type'=>$pData['type'],
            'coin_from' => $pData['coin_from'],
            'coin_to' =>$pData['coin_to'],
            'price'=>$pData['price'],
            'number'=>$pData['number'],
            'oid'=>$oid,
            'otable'=>$table,
            'uid'=>$pUser['uid'],
            'former_over'=>$pData['type']=='buy'?0:Tool_Math::sub($pUser[$pData['coin_from'].'_over'],$coinData[$pData['coin_from'].'_over']),
            'now_over'=>$pData['type']=='buy'?0:$pUser[$pData['coin_from'].'_over'],
            'former_lock'=>$pData['type']=='buy'?0:Tool_Math::sub($pUser[$pData['coin_from'].'_lock'],$coinData[$pData['coin_from'].'_lock']),
            'now_lock'=>$pData['type']=='buy'?0:$pUser[$pData['coin_from'].'_lock'],
            'to_former_over'=>$pData['type']=='buy'?Tool_Math::sub($pUser[$pData['coin_to'].'_over'],$coinData[$pData['coin_to'].'_over']):0,
            'to_now_over'=>$pData['type']=='buy'?$pUser[$pData['coin_to'].'_over']:0,
            'to_former_lock'=>$pData['type']=='buy'?Tool_Math::sub($pUser[$pData['coin_to'].'_lock'],$coinData[$pData['coin_to'].'_lock']):0,
            'to_now_lock'=>$pData['type']=='buy'?$pUser[$pData['coin_to'].'_lock']:0,
            'op_number'=>$pData['type']=='buy'?0:-$pData['number'],
            'to_op_number'=>$pData['type']=='buy'?-Tool_Math::mul($pData['price'],$pData['number']):0,
            'created'=>time(),
            'createip'=>Tool_Fnc::realip()
        ]
        )){
            return true;
        }

        return false;
    }


    //委托撤销写入明细
    public function trustcancel($pUser, $tUserData,$tTrust,$tid,$table){

	    $type = $tTrust['flag']=='buy'?true:false;
        if($id = $this->insert(
            [
                'date' => date('Y-m-d H:i:s'),
                'type' =>2,
                'opt_type'=>$tTrust['flag'],
                'coin_from' => $tTrust['coin_from'],
                'coin_to' =>$tTrust['coin_to'],
                'oid'=>$tid,
                'otable'=>$table,
                'uid'=>$pUser['uid'],
                'former_over'=>$type?0:Tool_Math::sub($pUser[$tTrust['coin_from'].'_over'],$tUserData[$tTrust['coin_from'].'_over']),
                'now_over'=>$type?0:$pUser[$tTrust['coin_from'].'_over'],
                'former_lock'=>$type?0:Tool_Math::sub($pUser[$tTrust['coin_from'].'_lock'],$tUserData[$tTrust['coin_from'].'_lock']),
                'now_lock'=>$type?0:$pUser[$tTrust['coin_from'].'_lock'],
                'to_former_over'=>$type?Tool_Math::sub($pUser[$tTrust['coin_to'].'_over'],$tUserData[$tTrust['coin_to'].'_over']):0,
                'to_now_over'=>$type?$pUser[$tTrust['coin_to'].'_over']:0,
                'to_former_lock'=>$type?Tool_Math::sub($pUser[$tTrust['coin_to'].'_lock'],$tUserData[$tTrust['coin_to'].'_lock']):0,
                'to_now_lock'=>$type?$pUser[$tTrust['coin_to'].'_lock']:0,
                'op_number'=>$type?0:$tUserData[$tTrust['coin_from'].'_over'],
                'to_op_number'=>$type?$tUserData[$tTrust['coin_to'].'_over']:0,
                'created'=>time(),
                'createip'=>Tool_Fnc::realip()
            ]
        )){
            return true;
        }
        return false;
    }

    //交易写入明细
    public function tradeBuy($value,$oid,$from,$to){

	    $otable = "order_{$value['coin_from']}coin";

	    if($value['buy_uid']==33757 || $value['buy_uid']==34558){

        }else{
            $from_data = [
                'date' => date('Y-m-d H:i:s'),
                'type' => 3,
                'opt_type'=>'buy',
                'coin_from' => $value['coin_from'],
                'coin_to' =>$value['coin_to'],
                'price'=>$value['price'],
                'number'=>$value['number'],
                'oid'=>$oid,
                'otable'=>$otable,
                'uid'=>$value['buy_uid'],
                'former_over'=>Tool_Math::sub($from["{$value['coin_from']}_over"],$value['number'])+$value['buy_fee'],
                'now_over'=>$from["{$value['coin_from']}_over"],
                'former_lock'=>$from["{$value['coin_from']}_lock"],
                'now_lock'=>$from["{$value['coin_from']}_lock"],
                'to_former_over'=>$from["{$value['coin_to']}_over"],
                'to_now_over'=>$from["{$value['coin_to']}_over"],
                'to_former_lock'=>Tool_Math::add($from["{$value['coin_to']}_lock"],Tool_Math::mul($value['price'],$value['number'])),
                'to_now_lock'=>$from["{$value['coin_to']}_lock"],
                'op_number'=>$value['number'],
                'op_fee'=>$value['buy_fee'],
                'to_op_number'=>-Tool_Math::mul($value['number'],$value['price']),
                'created'=>time(),
            ];

            $this->insert($from_data);
        }



        if($value['sale_uid']==33757 || $value['sale_uid']==34558){

        }else{
            $to_data = [
                'date' => date('Y-m-d H:i:s'),
                'type' => 3,
                'opt_type'=>'sale',
                'coin_from' => $value['coin_from'],
                'coin_to' =>$value['coin_to'],
                'price'=>$value['price'],
                'number'=>$value['number'],
                'oid'=>$oid,
                'otable'=>$otable,
                'uid'=>$value['sale_uid'],
                'former_over'=>Tool_Math::add($to["{$value['coin_from']}_over"],$value['number']),
                'now_over'=>$to["{$value['coin_from']}_over"],
                'former_lock'=>Tool_Math::add($to["{$value['coin_from']}_lock"],$value['number']),
                'now_lock'=>$to["{$value['coin_from']}_lock"],
                'to_former_over'=>Tool_Math::sub($to["{$value['coin_to']}_over"],$value['price']*$value['number'])+$value['sale_fee'],
                'to_now_over'=>$to["{$value['coin_to']}_over"],
                'to_former_lock'=>$to["{$value['coin_to']}_lock"],
                'to_now_lock'=>$to["{$value['coin_to']}_lock"],
                'op_number'=>$value['number'],
                'to_op_number'=>Tool_Math::mul($value['number'],$value['price']),
                'to_op_fee'=>$value['sale_fee'],
                'created'=>time(),
            ];
            $this->insert($to_data);
        }

    }

    //交易分红写入明细
    public function feeBonus($type,$user,$fid,$fee){

        $otable = "fee_bonus";
        $fee_data = [
            'date' => date('Y-m-d H:i:s'),
            'type' => 4,
            'opt_type'=>$type,
            'coin_to' =>'cnyx',
            'number'=>$fee,
            'oid'=>$fid,
            'otable'=>$otable,
            'uid'=>$user['uid'],
            'to_former_over'=>Tool_Math::sub($user['cnyx_over'],$fee),
            'to_now_over'=>$user['cnyx_over'],
            'to_former_lock'=>$user['cnyx_lock'],
            'to_former_lock'=>$user['cnyx_lock'],
            'to_op_number'=>$fee,
            'created'=>time(),
        ];

        $this->insert($fee_data);
    }
}
