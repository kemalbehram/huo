<?php
class C2cactiveModel extends Orm_Base{
	public $table = 'c2c_active';
	public $pk = 'id';

	CONST C2CACTIVESTARTTIME = "2019-05-16 09:00:00";
	CONST C2CACTIVEENDTIME = "2019-06-05 09:00:00";

	CONST C2CACTIVEREDIS = "email";
	CONST C2CACTIVEREDISKEY = "c2c_active_order_";


	/**
	 * 买入数据添加/更新
	 * @param int $buy_uid
	 * @param int $price
	 * @return bool
	 */
	public static function buyInsertData($buy_uid = 0,$price = 0){
		if(empty($buy_uid) || empty($price)){
			return false;
		}
		$c2cActiveMo = new C2cactiveModel();
		$buy_active_info = $c2cActiveMo->where("uid = {$buy_uid}")->fRow();
		$buy_name = $c2cActiveMo->table("autonym")->where("uid = {$buy_uid}")->fOne("name");
		$buy_user_info = $c2cActiveMo->table("user")->fRow($buy_uid);
		if(empty($buy_user_info)){
			return false;
		}
		if(!empty($buy_active_info)){
			$buy_active_info['buy_price'] = $buy_active_info['buy_price']+$price;
			$buy_active_info['updated'] = time();
			$buy_data = $buy_active_info;
		}else{
			$buy_data = array(
				"mo" => empty($buy_user_info['mo'])?$buy_user_info['email']:$buy_user_info['mo'],
				"name" => $buy_name,
				"uid" => $buy_uid,
				"buy_price" => $price,
				"created" => time(),
				"updated" => time()
			);
		}
		$result = $c2cActiveMo->save($buy_data);
		if(!empty($result)){
			return true;
		}
		return false;
	}

	/**
	 * 卖出更新数据
	 * @param int $sell_uid
	 * @param int $price
	 * @return bool
	 */
	public static function sellInsertData($sell_uid = 0,$price = 0){
		if(empty($sell_uid) || empty($price)){
			return false;
		}
		$c2cActiveMo = new C2cactiveModel();
		$sell_active_info = $c2cActiveMo->where("uid = {$sell_uid}")->fRow();
		$sell_name = $c2cActiveMo->table("autonym")->where("uid = {$sell_uid}")->fOne("name");
		$sell_user_info = $c2cActiveMo->table("user")->fRow($sell_uid);
		if(empty($sell_user_info)){
			return false;
		}
		if(!empty($sell_active_info)){
			$sell_active_info['sell_price'] = $sell_active_info['sell_price']+$price;
			$sell_active_info['updated'] = time();
			$sell_data = $sell_active_info;
		}else{
			$sell_data = array(
				"mo" => empty($sell_user_info['mo'])?$sell_user_info['email']:$sell_user_info['mo'],
				"uid" => $sell_uid,
				"name" => $sell_name,
				"sell_price" => $price,
				"created" => time(),
				"updated" => time()
			);
		}
		$result = $c2cActiveMo->save($sell_data);
		if(!empty($result)){
			return true;
		}
		return false;
	}


	/**
	 * 更新或插入数据
	 * @param int $buy_uid
	 * @param int $sell_uid
	 * @param int $price
	 * @return bool
	 */
	public static function insertData($buy_uid = 0,$sell_uid = 0,$price = 0){
		if(empty($buy_uid) || empty($sell_uid) || empty($price)){
			return false;
		}
		$c2cActiveMo = new C2cactiveModel();
		$buy_active_info = $c2cActiveMo->where("uid = {$buy_uid}")->fRow();
		$sell_active_info = $c2cActiveMo->where("uid = {$sell_uid}")->fRow();
		$buy_name = $c2cActiveMo->table("autonym")->where("uid = {$buy_uid}")->fOne("name");
		$sell_name = $c2cActiveMo->table("autonym")->where("uid = {$sell_uid}")->fOne("name");
		$buy_user_info = $c2cActiveMo->table("user")->where("uid = $buy_uid")->fRow();
		$sell_user_info = $c2cActiveMo->table("user")->where("uid = $sell_uid")->fRow();
		if(empty($buy_user_info) || empty($sell_user_info)){
			return false;
		}
		if(!empty($buy_active_info)){
			$buy_active_info['buy_price'] = $buy_active_info['buy_price']+$price;
			$buy_active_info['updated'] = time();
			$buy_data = $buy_active_info;
		}else{
			$buy_data = array(
				"mo" => empty($buy_user_info['mo'])?$buy_user_info['email']:$buy_user_info['mo'],
				"uid" => $buy_uid,
				"name" => $buy_name,
				"buy_price" => $price,
				"created" => time(),
				"updated" => time()
			);
		}
		$result = $c2cActiveMo->save($buy_data);
		if(empty($result)){
			return false;
		}
		if(!empty($sell_active_info)){
			$sell_active_info['sell_price'] = $sell_active_info['sell_price']+$price;
			$sell_active_info['updated'] = time();
			$sell_data = $sell_active_info;
		}else{
			$sell_data = array(
				"mo" => empty($sell_user_info['mo'])?$sell_user_info['email']:$sell_user_info['mo'],
				"uid" => $sell_uid,
				"name" => $sell_name,
				"sell_price" => $price,
				"created" => time(),
				"updated" => time()
			);
		}
		$result = $c2cActiveMo->save($sell_data);
		if(!empty($result)){
			return true;
		}
		return false;
	}
}
