<?php
class C2ctradeModel extends Orm_Base{
	public $table = 'c2c_trade';
	public $field = array(
		'id' => array('type' => "int(11) unsigned", 'comment' => 'id'),
		'userid' => array('type' => "int(11) unsigned", 'comment' => '挂单者ID'),
		'price' => array('type' => "decimal(20,8)", 'comment' => '价格'),
		'num' => array('type' => "decimal(20,8)", 'comment' => '总数量'),
		'deal' => array('type' => "decimal(20,8)", 'comment' => '剩余数量'),
		'type' => array('type' => "tinyint(2)", 'comment' => '1，为买 2，为卖'),
		'coin'=> array('type' => "varchar(15)", 'comment' => '币种'),
		'fee'=>array('type' => "decimal(20,8)", 'comment' => '手续费'),
		'moble' => array('type' => "varchar(11)", 'comment' => '手机号'),
		'tradeno'=> array('type' => "varchar(15)", 'comment' => '流水号'),
		'name' => array('type' => "varchar(20)", 'comment' => '姓名认证姓名'),
		'addtime' => array('type' => "int(10)", 'comment' => '时间'),
		'deal_time' => array('typepe' => "int(11)", 'comment' => '匹配时间'),
		'deal_id'=>array('typepe' => "int(11)", 'comment' => '匹配者ID'),
        'bank'=>array('typepe' => "tinyint(2)", 'comment' => '1网银'),
		'wechat'=>array('typepe' => "tinyint(2)", 'comment' => '2微信'),
		'alipay'=>array('typepe' => "tinyint(2)", 'comment' => '3支付宝'),
		'status'=>array('typepe' => "tinyint(2)", 'comment' => '0，交易中 1，完成'),
		'useradmin'=>array('typepe' => "varchar(20)", 'comment' => '管理员'),
	);
	
	public $pk = 'uid';
	//c2c禁止挂单Redis key
	const REDISLOCKUSERTRUST = "C2C_lock_user_trust_";
	const REDISREMOKECOUNT = "C2C_remoke_count_";
	const REDISREMOKETIMEOUT = "C2C_time_out_count_";

	/**
	 * 卖出手续费计算方式
	 * @param int $count
	 * @param int $price
	 * @param int $selltype
	 * @return float|int
	 */
	public function getFeePrice($count = 0,$price = 0,$selltype = 0){
		if($count < 1) {
			$fee = $price*0.005*$selltype<5?5:round($price*0.005*$selltype,2);
		}
		if($count == 1){
			$fee = $price*0.01*$selltype<5?5:round($price*0.01*$selltype,2);
		}
		if($count==2) {
			$fee = $price*0.015*$selltype<5?5:round($price*0.015*$selltype,2);
		}
		if($count>=3) {
			$fee = $price*0.02*$selltype<5?5:round($price*0.02*$selltype,2);
		}
		return $fee;
	}

	/**
	 * 确认收款更新买卖委托单状态
	 * @param array $trust
	 * @param array $buyTrust
	 * @return bool
	 */
	public function confirmPriceTrustStatus($trust = array(),$buyTrust = array()){
		if(empty($trust) || empty($buyTrust)){
			return false;
		}
		//更新卖家委托
		if ($trust['deal'] <= 0) {
			$up_sale_id = $this->table('c2c_trade')->where(['id' => $trust['id']])->update(['status' => 1]);
		} else {
			$up_sale_id = $this->table('c2c_trade')->where(['id' => $trust['id']])->update(['deal_time' => 0, 'deal_id' => 0, 'status' => 0]);
		}
		if(empty($up_sale_id)){
			return false;
		}

		if($buyTrust['deal'] <= 0){
			$up_buy_id = $this->table('c2c_trade')->where(['id' => $buyTrust['id']])->update(['status' => 1]);
		}else{
			$up_buy_id = $this->table('c2c_trade')->where(['id' => $buyTrust['id']])->update(['deal_time' => 0, 'deal_id' => 0, 'status' => 0]);
		}

		if(!empty($up_buy_id)){
			return true;
		}
		return false;

	}

	/**
	 * 确认收款写入明细
	 * @param int $oid
	 * @param array $oldBuyUserInfo
	 * @param array $oldSellUserInfo
	 * @param int $price
	 * @param int $lock_price
	 * @return bool
	 */
	public function confirmPriceUserFinance($oid = 0,$oldBuyUserInfo = array(),$oldSellUserInfo = array(),$price = 0,$lock_price = 0){
		if(empty($oid) || empty($oldBuyUserInfo) || empty($oldSellUserInfo) || empty($price) || empty($lock_price)){
			return false;
		}
		$apMo = new AssetpastModel();
		$newBuyUserInfo = $oldBuyUserInfo;
		$newBuyUserInfo['cnyx_over'] = $newBuyUserInfo['cnyx_over']+$price;
		$newSellUserInfo = $oldSellUserInfo;
		$newSellUserInfo['cnyx_lock'] = $newSellUserInfo['cnyx_lock']-$lock_price;
		$buy_asset = $apMo->InsertAssetData($oldBuyUserInfo,$newBuyUserInfo,$oid,AssetpastModel::ASSET_TYPE_C2CORDER,"cnyx","cnyx",1,"1");
		$sell_asset = $apMo->InsertAssetData($oldSellUserInfo,$newSellUserInfo,$oid,AssetpastModel::ASSET_TYPE_C2CORDER,"cnyx","cnyx",1,'2');
		if($sell_asset !== false && $buy_asset !== false){
			return true;
		}
		return false;
	}

	/**
	 * 撤销买单
	 * @param array $trust
	 * @return bool
	 */
	public function remokeBuyTrust($trust = array()){
		if(empty($trust)){
			return false;
		}
		$order = C2ctradelogModel::getInstance()->where(['buytradeno' => $trust['tradeno'],'status'=>0])->fRow();
		if($trust['deal_id'] != 0){
			$up_id = $this->table('c2c_trade')->where(['id' => $trust['id']])->update(['status' => 3,"num" => $trust['num']-$order['price'],'deal'=>$trust['deal']+$order['price']]);
			if(empty($up_id)){
				return false;
			}
			//恢复卖家记录
			$no_id = $this->exec("update c2c_trade set deal=deal+{$order['price']},num=num-{$order['price']},status=0,deal_id=0,fee_on=fee_on-{$order['feesell']} where tradeno='{$order['selltradeno']}'");
			if(empty($no_id)){
				return false;
			}
			//记录取消为2
			$log_id = $this->table('c2c_trade_log')->where(['id' => $order['id']])->update(['status' => 2]);
			if(!empty($log_id)){
				return true;
			}
		}else{
			$un_id = $this->table('c2c_trade')->where(['id' => $trust['id']])->update(['status' => 3]);
			if(!empty($un_id)){
				return true;
			}
		}
		return false;
	}


	/**
	 * 撤销卖单委托
	 * @param array $trust
	 * @return bool
	 */
	public function remokeSellTrust($trust = array()){
		if(empty($trust)){
			return false;
		}
		$uMo = new UserModel();
		$asset = new AssetpastModel();
		//匹配记录
		$order = C2ctradelogModel::getInstance()->where(['selltradeno' => $trust['tradeno']])->fRow();
		if($trust['deal_id']>0){
			$oldUserInfo = $uMo->fRow($order['sellid']);
			//买
			$no_id = $this->exec("update c2c_trade set deal=deal+{$order['price']},num=num-{$order['price']},status=0,deal_id=0,deal_time=0 where tradeno='{$order['buytradeno']}'");
			if(empty($no_id)){
				return false;
			}

			$lock_price = $trust['num']+$trust['deal'] + $trust['fee_on'];
			//卖
			$sell_id = $this->exec("update user set cnyx_over=cnyx_over+{$lock_price},cnyx_lock=cnyx_lock-{$lock_price} where uid={$trust['uid']}");
			if(empty($sell_id)){
				return false;
			}
			$newUserInfo = $oldUserInfo;
			$newUserInfo['cnyx_over'] = $newUserInfo['cnyx_over']+$lock_price;
			$newUserInfo['cnyx_lock'] = $newUserInfo['cnyx_lock']-$lock_price;
			$assetResult = $asset->InsertAssetData($oldUserInfo,$newUserInfo,$order['id'],AssetpastModel::ASSET_TYPE_C2CORDER,'cnyx','cnyx',3,2);
			if($assetResult === false){
				return false;
			}
			$up_id = $this->table('c2c_trade')->where(['id' => $trust['id']])->update(['status' => 3 ,"num" => $trust['num']-$order['price'],'deal'=>$trust['deal']+$order['price']]);
			if(empty($up_id)){
				return false;
			}
			//记录取消为2
			$log_id = $this->table('c2c_trade_log')->where(['id' => $order['id']])->update(['status' => 2]);
			if(!empty($log_id)){
				return true;
			}
			return false;
		}else{
			$lock_price = $trust['deal']+($trust['fee']-$trust['fee_on']);
			if($trust['fee_on']==0){
				$over_price = $trust['deal']+$trust['fee'];
			}else{
				$fee = $trust['fee_on']>=5?$trust['fee']-$trust['fee_on']:$trust['fee']-5;
				$over_price = $trust['deal']+$fee;
			}
			$oldUserInfo = $uMo->fRow($trust['uid']);
			$user_id = $this->exec("update user set cnyx_over=cnyx_over+{$over_price},cnyx_lock=cnyx_lock-{$lock_price} where uid={$trust['uid']}");
			if(empty($user_id)){
				return false;
			}
			$newUserInfo = $oldUserInfo;
			$newUserInfo['cnyx_over'] = $newUserInfo['cnyx_over']+$over_price;
			$newUserInfo['cnyx_lock'] = $newUserInfo['cnyx_lock']-$lock_price;
			$assetResult = $asset->InsertAssetData($oldUserInfo,$newUserInfo,$trust['id'],AssetpastModel::ASSET_TYPE_C2CTRUST,"cnyx","cnyx",3,2);
			if($assetResult === false){
				return false;
			}
			$up_id = $this->table('c2c_trade')->where(['id' => $trust['id']])->update(['status' => 3]);
			if(!empty($up_id)){
				return true;
			}
			return false;
		}
		return false;
	}

	/**
	 * 用户撤销计数器
	 * @param int $uid
	 * @param int $time
	 */
	public static function c2cRemokeCount($uid = 0,$time = 604800){
		$cot = 1;
		$redis = Cache_Redis::instance();
		$count = $redis->get(self::REDISREMOKECOUNT.$uid);
		if(!empty($count)){
			$redis->incr(self::REDISREMOKECOUNT.$uid);
		}else {
			$redis->set(self::REDISREMOKECOUNT.$uid, $cot,$time);
		}
	}

	/**
	 *
	 * @param string $key
	 * @param int $time
	 */
	public static function c2cTimeOut($key = '',$time = 604800){
		$cot = 1;
		$redis = Cache_Redis::instance();
		$count = $redis->get($key);
		if(!empty($count)){
			$redis->incr($key);
		}else {
			$redis->set($key,$cot,$time);
		}
	}


	/**
	 * 记录对应委托ID 避免重复数据
	 * @param int $trust_id
	 * @param int $uid
	 * @return mixed
	 */
	public static function c2cTrustTimeOut($trust_id = 0,$uid = 0){
		$redis = Cache_Redis::instance();
		$trustArr = $redis->get("time_out_count_arr_".$uid);
		if(!empty($trustArr)){
			$trustArr = json_decode($trustArr,true);
			if(!in_array($trust_id,$trustArr)){
				self::c2cTimeOut(self::REDISREMOKETIMEOUT.$uid);
				$trustArr[] = $trust_id;
				$result = $redis->set("time_out_count_arr_".$uid,json_encode($trustArr),604800);
				return $result;
			}
			return;
		}
		self::c2cTimeOut(self::REDISREMOKETIMEOUT.$uid);
		$trustArr[] = $trust_id;
		$result = $redis->set("time_out_count_arr_".$uid,json_encode($trustArr),604800);
		return $result;
	}



}
