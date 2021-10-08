<?php
class C2ctradelogModel extends Orm_Base{
	public $table = 'c2c_trade_log';
	public $field = array(
		'id' => array('type' => "int(11) unsigned", 'comment' => 'id'),
		'userid' => array('type' => "int(11) unsigned", 'comment' => '用户ID'),
		'price' => array('type' => "decimal(10)", 'comment' => '价格'),
		'type' => array('type' => "tinyint(2)", 'comment' => '1，为买 2，为卖'),
		'moble' => array('type' => "int(11)", 'comment' => '手机号'),
		'bankaddr' => array('type' => "varchar(30)", 'comment' => '银行名称'),
		'addtime' => array('type' => "int(11)", 'comment' => '时间'),
		'bankcard' => array('type' => "varchar(25)", 'comment' => '银行卡号'),
		'paytype'=>array('typepe' => "tinyint", 'comment' => '商家支付类型，0网银，1支付宝 2微信支付'),
		'status'=>array('typepe' => "tinyint", 'comment' => '0，交易中 1，完成'),
	);
	
	public $pk = 'uid';

	/**
	 * 获取订单金额
	 * @param string $type
	 * @param string $tradeno
	 * @return int
	 */
	public function getOrderPrice($type = "",$tradeno = ""){
		if(empty($type) || empty($tradeno)){
			return 0;
		}
		$where = " status = 0 ";
		if($type == 1){
			$where .= " and buytradeno  = '{$tradeno}'";
		}
		if($type == 2){
			$where .= " and selltradeno = '{$tradeno}' ";
		}
		$price = $this->where($where)->fOne("price");
		if(!empty($price)){
			return $price;
		}
		return 0;
	}

	public function marketBuy($sellInfo = array(),$buyInfo = array()){
		if(empty($sellInfo) || empty($buyInfo)){
			return false;
		}
		$sale_price = $buyInfo['price']>=$sellInfo['deal']?$sellInfo['deal']:$buyInfo['price'];
		$fee = round($sale_price/$sellInfo['price']*$sellInfo['fee'],2);
		$time = time();
		$userMo = new UserModel();

		$buy_user = $userMo->fRow($buyInfo['uid']);
		$sell_user = $userMo->fRow($sellInfo['uid']);
		$datalog = [
			'buyid' => $buyInfo['uid'],
			'sellid' => $sellInfo['uid'],
			'coinname' => $sellInfo['coin'],
			'price' => $sale_price,
			'buymoble' => $buy_user['mo'] ? $buy_user['mo'] : $buy_user['email'],
			'buytradeno' => $buyInfo['tradeno'],
			'sellmoble' => $sell_user['mo'] ? $sell_user['mo'] : $sell_user['email'],
			'selltradeno' => $sellInfo['tradeno'],
			'addtime' => $time,
			'bank' => $sellInfo['bank'],
			'wechat' => $sellInfo['wechat'],
			'alipay' => $sellInfo['alipay'],
			'type' => 1,
			'feesell' => $fee,
		];
		$sell_id = $this->exec("update c2c_trade set deal=deal-{$sale_price},num=num+{$sale_price},fee_on=fee_on+{$fee},deal_id={$buyInfo['uid']},deal_time=$time where id={$sellInfo['id']}");
		if (!$sell_id) {
			return false;
		}
		$buy_id = $this->exec("update c2c_trade set deal=deal-{$sale_price},num=num+{$sale_price},deal_id={$sellInfo['uid']},deal_time=$time where id={$buyInfo['id']}");
		if (!$buy_id) {
			return false;
		}
		$order_id = $this->insert($datalog);
		return $order_id;
	}


}
