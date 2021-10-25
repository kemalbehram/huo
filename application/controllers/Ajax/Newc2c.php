<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 2019/2/25
 * Time: 14:44
 */
class Ajax_Newc2cController extends Ajax_BaseController{


    public function ajaxBuyOrderAction(){
        $page = $_REQUEST['page']?:1;
        $pageSize = 10;
        $C2ctrade = new C2ctradeModel();
//        $list = $C2ctrade->where("type = 1 and status = 0 and moble!=15586991887 and deal_id = 0 ")->page($page, $pageSize)->order('addtime asc,id asc')->limit(10)->fList();
        $list = $C2ctrade->where("type = 1 and status = 0 and moble!=15586991887 and deal_id = 0 ")->order('addtime asc,id asc')->limit(10)->fList();
        //对数据进行处理
        foreach($list as &$value){
            $value['moble'] = substr($value['moble'],0,3)."****".substr($value['moble'],7,4);
        }
        $this->ajax('',1,$list);
    }

    public function ajaxSellOrderAction(){
        $page = $_REQUEST['page']?:1;
        $pageSize = 10;
        $C2ctrade = new C2ctradeModel();
//        $list = $C2ctrade->where("type = 1 and status = 0 and moble!=15586991887 ")->page($page, $pageSize)->order('addtime asc,id asc')->fList();
        $list = $C2ctrade->where("type = 2 and status = 0 and moble!=15586991887 and deal_id = 0 ")->group("uid")->order('selltype desc,addtime asc,id asc')->limit(10)->fList();
        //对数据进行处理
        foreach($list as &$value){
            $value['moble'] = substr($value['moble'],0,3)."****".substr($value['moble'],7,4);
        }
        $this->ajax('',1,$list);
    }

    //用户吃单
    public function buyTrustAction(){
        $this->_ajax_islogin();
        $this->ajax_user_finance();
        $this->ajax_validata_user();
        $postData = coll("post");
        $pwdtradeval = coll("post","val");
        $type = trim(coll("post","type"));
        $selltype =intval(coll("post",'selltype'));
        $price = floatval($postData['num']);//下单金额
        $sell_id = coll("post","sell_id");
        $post_repeat = coll("post","repeat_del");
        $newRepeat = Tool_Request::valiRepeatData($post_repeat);
        if($newRepeat === false){
            $this->ajax("请勿重复提交");
        }
        $validate = new Validate_C2c();
        $result = $validate->TrustPrice($postData);
        if($result['code'] == 0){
            $this->ajax($result['msg'],0,['repeat'=>$newRepeat]);
        }
        $userMo = new UserModel();
        $uid = $this->mCurUser['uid'];
          $this->ajaxLockUserTrust(C2ctradeModel::REDISLOCKUSERTRUST.$uid);  //验证用户是否被锁定
        $userInfo = $userMo->fRow($uid);
        if($userInfo['pwdtrade'] != Tool_Md5::encodePwdTrade($pwdtradeval,$userInfo['prand'])){
            $this->ajax("交易密码错误",0,['repeat'=>$newRepeat]);
        }
        $c2ctradeMo = new C2ctradeModel();
        $trust_type = $type==1?2:1;
        $where = "id = {$sell_id} and status = 0 and deal_id = 0 and type= {$trust_type} ";
        $trustInfo = $c2ctradeMo->lock()->where($where)->fRow();
        if($type == 1) {
            if ($price < $trustInfo['min']  && $price < $trustInfo['deal'] ) {
                $this->ajax("买入金额不能小于该订单最小匹配金额！",0,['repeat'=>$newRepeat]);
            }
        }
        if($type == 2){
            if($price < $trustInfo['price']){
                $this->ajax("卖出金额不能小于该订单金额",0,['repeat'=>$newRepeat]);
            }
        }
        if(empty($trustInfo)){
            $this->ajax("该笔订单不存在或正在交易中",0,['repeat'=>$newRepeat]);
        }
        if($trustInfo['uid'] == $this->mCurUser['uid']){
            $this->ajax("不可以交易自己的订单",0,['repeat'=>$newRepeat]);
        }
        $txt = ($type==1?'买':'卖');
        $daytime = strtotime(date("Y-m-d"));
//        $count = $c2ctradeMo->where("uid={$uid} and type=$type and addtime>$daytime")->fOne("count(id)");
//        $where = " c2c_trade.uid={$uid} and c2c_trade.type=$type and c2c_trade.addtime>$daytime and c2c_trade_log.id is not null ";
//        $joinWhere = "";
//        if($type == 1){
//            $joinWhere .= " c2c_trade.tradeno = c2c_trade_log.buytradeno ";
//        }else{
//            $joinWhere .= " c2c_trade.tradeno = c2c_trade_log.selltradeno ";
//        }
//        $countData = $c2ctradeMo->table("c2c_trade")->field("c2c_trade.id")->join("c2c_trade_log",$joinWhere,"left")->where($where)->group("c2c_trade.id")->fList();
//        $count = count($countData);
        $count = $this->getCount($uid,$type,$daytime);
        if ($count >= 4 && $type == 2  && $uid != 35440 && $uid != 43308){
            $this->ajax("每天只能挂四笔{$txt}单");
        }
        //获取验证码
        for (; true;) {
            $tradeno = $this->tradeno('c2c');
            if (!$c2ctradeMo->where(array('tradeno' => $tradeno))->fRow()) break;
        }

        $userbankMo = new UserbankModel();
        $userBank = $userbankMo->field('type')->where("uid = {$uid} and status=1")->fList();
        if(empty($userBank)){
            $this->ajax("请绑定并开启可用的付款方式",0,['repeat'=>$newRepeat]);
        }
        $userBank = array_column($userBank,'type');
        $data = [
            'uid' => $uid,
            'coin' => 'usdt',
            'price' => $price,//总价格
            'num' => 0,//匹配价格
            'deal' => $price,//剩余数量
            'tradeno' => $tradeno,
            'type' => $type,
            'moble' => $userInfo['mo'] ? $userInfo['mo'] : $userInfo['email'],
            'bank' => in_array(1,$userBank) ? 1 : 0,
            'wechat' => in_array(2,$userBank) ? 2 : 0,
            'alipay' => in_array(3,$userBank) ? 3 : 0,
            'addtime' => time(),
        ];
        $c2ctradelogMo = new C2ctradelogModel();
        if($type == 1) {
            $data['selltype'] = 1;
            $buy_count = $c2ctradeMo->where("uid={$uid} and status!=1 and status!=3 and type=1")->fOne("count(id)");
            if ($buy_count) {
                $this->ajax('您还有未完成交易的订单',0,['repeat'=>$newRepeat]);
            }
            $c2ctradeMo->begin();
            $in_id = $c2ctradeMo->insert($data);
            if (empty($in_id)) {
                $c2ctradeMo->back();
                $this->ajax('匹配失败!', 0, ["repeat" => $newRepeat]);
            }
            $data['id'] = $in_id;
            $buy_log_id = $c2ctradelogMo->marketBuy($trustInfo, $data);
            if (!empty($buy_log_id)) {
                $c2ctradeMo->commit();
                $this->ajax('匹配成功!', 1, ["repeat" => $newRepeat]);
            }
            $c2ctradeMo->back();
            $this->ajax('匹配失败!', 0, ["repeat" => $newRepeat]);
        }

        if($type == 2){
            if($price != $trustInfo['price'] ){
                $this->ajax("买入金额要等于该笔订单金额",0,['repeat'=>$newRepeat]);
            }

            if($this->mCurUser['uid'] !=  35440  && $this->mCurUser['uid'] != 43308){
                $fee = $c2ctradeMo->getFeePrice($count,$price,2);
            }else{
                $fee = 0;
            }
            $data['fee'] = $fee;
            $data['selltype'] = 2;
            $data['min'] = $price;
            $totalPrice = $price+$fee;
            //余额不足
            if ($totalPrice > floatval($userInfo['usdt_over'])){
                $this->ajax("您的余额不足,该笔订单需要{$totalPrice}USDT",0,['repeat'=>$newRepeat]);
            }
            $userMo->lock()->fRow($uid);
            $c2ctradeMo->begin();
            $up_id = $c2ctradeMo->exec("update user set usdt_over=usdt_over-{$totalPrice},usdt_lock=usdt_lock+{$totalPrice} where uid={$uid}");
            if(empty($up_id)){
                $c2ctradeMo->back();
                $this->ajax('匹配失败!',0,['repeat'=>$newRepeat]);
            }
            $newUser = $c2ctradeMo->table("user")->where("uid = {$uid}")->fRow();
            if($newUser['usdt_over'] < 0){
                $c2ctradeMo->back();
                $this->ajax('挂单失败!',0,["repeat"=>$newRepeat]);
            }
            $in_id = $c2ctradeMo->insert($data);
            $newUserInfo = $userInfo;
            $newUserInfo['usdt_over'] = $newUserInfo['usdt_over']-$totalPrice;
            $newUserInfo['usdt_lock'] = $newUserInfo['usdt_lock']+$totalPrice;
            $assetpast = new AssetpastModel();
            $asset_result = $assetpast->InsertAssetData($userInfo,$newUserInfo,$in_id,AssetpastModel::ASSET_TYPE_C2CTRUST,"usdt","usdt",0,$type);
            if($asset_result === false){
                $c2ctradeMo->back();
                $this->ajax("匹配失败!",0,["repeat"=>$newRepeat]);
            }
            if(empty($in_id)){
                $c2ctradeMo->back();
                $this->ajax('匹配失败!', 0, ["repeat" => $newRepeat]);
            }
            $data['id'] = $in_id;
            $buy_log_id = $c2ctradelogMo->marketBuy($data,$trustInfo);
            if (!empty($buy_log_id)) {
                $c2ctradeMo->commit();
                $this->ajax('匹配成功!', 1, ["repeat" => $newRepeat]);
            }
            $c2ctradeMo->back();
            $this->ajax('挂单失败!',0,['repeat'=>$newRepeat]);
        }

    }



    //用户挂单
    public function tradeAction()
    {
        $this->_ajax_islogin();

        Tool_Lock::add($this);

        $this->ajax_user_finance();
        $this->ajax_validata_user();
        $uid = $this->mCurUser['uid'];
         $this->ajaxLockUserTrust(C2ctradeModel::REDISLOCKUSERTRUST.$uid);
        $post_repeat = coll("post","repeat_del");
        $newRepeat = Tool_Request::valiRepeatData($post_repeat);
        if($newRepeat === false){
            $this->ajax("请勿重复提交");
        }
        //验证价格
        $postData = coll("post");
        $pwdtradeval = coll("post","val");
        $type = trim(coll("post","type"));
        $selltype =intval(coll("post",'selltype'));
        $price = floatval($postData['num']);//下单金额
        $min = coll("post",'min');
        $validate = new Validate_C2c();
        $result = $validate->TrustPrice($postData);
        if($result['code'] == 0){
            $this->ajax($result['msg'],0,['repeat'=>$newRepeat]);
        }

        $userMo = new UserModel();
        $userInfo = $userMo->fRow($uid);
        if($userInfo['pwdtrade'] != Tool_Md5::encodePwdTrade($pwdtradeval,$userInfo['prand'])){
            $this->ajax("交易密码错误",0,['repeat'=>$newRepeat]);
        }

        $c2ctradeMo = new C2ctradeModel();
        $txt = ($type==1?'买':'卖');
        $daytime = strtotime(date("Y-m-d"));
//        $count = $c2ctradeMo->where("uid={$uid} and type=$type and addtime>$daytime")->fOne("count(id)");
//        $where = " c2c_trade.uid={$uid} and c2c_trade.type=$type and c2c_trade.addtime>$daytime and c2c_trade_log.id is not null ";
//        $joinWhere = "";
//        if($type == 1){
//            $joinWhere .= " c2c_trade.tradeno = c2c_trade_log.buytradeno ";
//        }else{
//            $joinWhere .= " c2c_trade.tradeno = c2c_trade_log.selltradeno ";
//        }
//        $countData = $c2ctradeMo->table("c2c_trade")->field("c2c_trade.id")->join("c2c_trade_log",$joinWhere,"left")->where($where)->group("c2c_trade.id")->fList();
//        $count = count($countData);
        $count = $this->getCount($uid,$type,$daytime);
        if ($count >= 4 && $type == 2 && $uid != 35440 && $uid != 43308){
            $this->ajax("每天只能挂四笔{$txt}单",0,["repeat"=>$newRepeat]);
        }

        //获取验证码
        for (; true;) {
            $tradeno = $this->tradeno('c2c');
            if (!$c2ctradeMo->where(array('tradeno' => $tradeno))->fRow()) break;
        }

        $userbankMo = new UserbankModel();
        $userBank = $userbankMo->field('type')->where("uid = {$uid} and status=1")->fList();
        if(empty($userBank)){
            $this->ajax("请绑定并开启可用的付款方式",0,["repeat"=>$newRepeat]);
        }
        if($price > 50000){
            $this->ajax('交易的金额最大为50000！',0,["repeat"=>$newRepeat]);
        }
        $userBank = array_column($userBank,'type');
        $data = [
            'uid' => $uid,
            'coin' => 'usdt',
            'price' => $price,//总价格
            'num' => 0,//匹配价格
            'deal' => $price,//剩余数量
            'tradeno' => $tradeno,
            'type' => $type,
            'moble' => $userInfo['mo'] ? $userInfo['mo'] : $userInfo['email'],
            'bank' => in_array(1,$userBank) ? 1 : 0,
            'wechat' => in_array(2,$userBank) ? 2 : 0,
            'alipay' => in_array(3,$userBank) ? 3 : 0,
            'addtime' => time(),
        ];

        //买单用户 未付款点击已付款，只允许每个用户存在两笔这样的订单
        if($type==1){
            $data['selltype'] = 1;
            $buy_count = $c2ctradeMo->where("uid={$uid} and status!=1 and status!=3 and type=1")->fOne("count(id)");
            if ($buy_count){
                $this->ajax('您还有未完成交易的订单',0,["repeat"=>$newRepeat]);
            }
            $c2ctradeMo->begin();
            $in_id = $c2ctradeMo->insert($data);
            if(!empty($in_id)){
                $c2ctradeMo->commit();
                $bayResult = $this->marketBuy($in_id);
                if($bayResult === true){
                    $this->ajax('匹配成功!', 1,["repeat"=>$newRepeat]);
                }
                $this->ajax('挂单成功!',1,["repeat"=>$newRepeat]);
            }
            $c2ctradeMo->back();
            $this->ajax('挂单失败!',0,["repeat"=>$newRepeat]);
        }

        if($type == 2){
            if(empty($min)){
                $this->ajax("最小金额不能为空",0,['repeat'=>$newRepeat]);
            }
            if($this->mCurUser['uid'] !=  35440  && $this->mCurUser['uid'] != 43308){
                $fee = $c2ctradeMo->getFeePrice($count,$price,$selltype);
            }else{
                $fee = 0;
            }
            $data['fee'] = $fee;
            $data['selltype'] = $selltype;
            $data['min'] = $min;
            $totalPrice = $price+$fee;
            //余额不足
            if ($totalPrice > floatval($userInfo['usdt_over'])){
                $this->ajax("您的余额不足,该笔订单需要{$totalPrice}USDT",0,["repeat"=>$newRepeat]);
            }
            $userMo->lock()->fRow($uid);
            $c2ctradeMo->begin();
            $up_id = $c2ctradeMo->exec("update user set usdt_over=usdt_over-{$totalPrice},usdt_lock=usdt_lock+{$totalPrice} where uid={$uid}");
            if(empty($up_id)){
                $c2ctradeMo->back();
                $this->ajax('挂单失败!',0,["repeat"=>$newRepeat]);
            }
            $newUser = $c2ctradeMo->table("user")->where("uid = {$uid}")->fRow();
            if($newUser['usdt_over'] < 0){
                $c2ctradeMo->back();
                $this->ajax('挂单失败!',0,["repeat"=>$newRepeat]);
            }
            $in_id = $c2ctradeMo->insert($data);
            $newUserInfo = $userInfo;
            $newUserInfo['usdt_over'] = $newUserInfo['usdt_over']-$totalPrice;
            $newUserInfo['usdt_lock'] = $newUserInfo['usdt_lock']+$totalPrice;
            $assetpast = new AssetpastModel();
            $asset_result = $assetpast->InsertAssetData($userInfo,$newUserInfo,$in_id,AssetpastModel::ASSET_TYPE_C2CTRUST,"usdt","usdt",0,$type);
            if($asset_result === false){
                $c2ctradeMo->back();
                $this->ajax("挂单失败!",0,["repeat"=>$newRepeat]);
            }
            if(!empty($in_id)){
                $c2ctradeMo->commit();
                $sellResult = $this->marketSell($in_id);
                if($sellResult === true){
                    $this->ajax('匹配成功!', 1,["repeat"=>$newRepeat]);
                }
                $this->ajax('挂单成功!',1,["repeat"=>$newRepeat]);
            }
            $c2ctradeMo->back();
            $this->ajax('挂单失败!',0,["repeat"=>$newRepeat]);
        }
    }

    /**
     * 买单匹配
     * @param int $id
     * @return bool
     */
    public function marketBuy($id = 0){
        $uid = $this->mCurUser['uid'];
        $c2ctradeMo = new C2ctradeModel();
        $userMo = new UserModel();
        $c2ctradelogMo = new C2ctradelogModel();
        $mo = Orm_Base::getInstance();
        $order = $c2ctradeMo->where("id=$id")->fRow();
        $atime=time()-86400;
        $where = "status=0 and type=2 and moble!='15586991887' and uid!={$uid} and deal_id=0 and (bank={$order['bank']} or wechat={$order['wechat']} or alipay={$order['alipay']}) and (( deal>={$order['price']} and {$order['price']} >= min ) or deal={$order['price']})";
        $sell = $c2ctradeMo->lock()->where($where)->order('selltype desc,deal desc,addtime asc,id asc')->fRow();
        $sale_price = $order['price']>=$sell['deal']?$sell['deal']:$order['price'];
        if($sell['uid'] != 35440 && $sell['uid'] != 43308) {
            $fee = round($sale_price / $sell['price'] * $sell['fee'], 2);
        }else{
            $fee = 0;
        }
        $time = time();


        if ($sell) {
            $buy_user = $userMo->fRow($uid);
            $sell_user = $userMo->fRow($sell['uid']);
            $datalog = [
                'buyid' => $uid,
                'sellid' => $sell['uid'],
                'coinname' => $sell['coin'],
                'price' => $sale_price,
                'buymoble' => $buy_user['mo'] ? $buy_user['mo'] : $buy_user['email'],
                'buytradeno' => $order['tradeno'],
                'sellmoble' => $sell_user['mo'] ? $sell_user['mo'] : $sell_user['email'],
                'selltradeno' => $sell['tradeno'],
                'addtime' => $time,
                'bank' => $sell['bank'],
                'wechat' => $sell['wechat'],
                'alipay' => $sell['alipay'],
                'type' => 1,
                'feesell' => $fee,
            ];

            # 事务开始
            $mo->begin();
            //匹配冻结
            try{
                //匹配处理用户金额
                $sell_id = $mo->exec("update c2c_trade set deal=deal-{$sale_price},num=num+{$sale_price},fee_on=fee_on+{$fee},deal_id={$uid},deal_time={$time} where id={$sell['id']}");

                $buy_id = $mo->exec("update c2c_trade set deal=deal-{$sale_price},num=num+{$sale_price},deal_id={$sell['uid']},deal_time={$time} where id={$id}");
                $in_id = $c2ctradelogMo->insert($datalog);

                if ($sell_id && $buy_id && $in_id) {
                    $mo->commit();
                    return true;
                } else {
                    $mo->back();
                    return false;
                }
            }catch (Exception $e){
                $mo->back();
                return false;
            }
        }

    }

    /**
     * 卖单匹配
     * @param int $id
     * @return bool
     */
    public function marketSell($id = 0){
        $c2ctradeMo = new C2ctradeModel();
        $userMo = new UserModel();
        $c2ctradelogMo = new C2ctradelogModel();
        $mo = Orm_Base::getInstance();

        $uid = $this->mCurUser['uid'];

        //当前订单
        $order = $c2ctradeMo->where("id=$id")->fRow();

        //默认账户15989482699
        $where = "status=0 and type=1 and moble!=15586991887 and moble=15989482699 and uid!={$order['uid']} and ((deal>={$order['min']} and deal<={$order['price']}) or deal={$order['price']}) and (bank={$order['bank']} or wechat={$order['wechat']} or alipay={$order['alipay']})";
        $buy = $c2ctradeMo->lock()->where($where)->order('addtime asc,id asc')->fRow();

        $sale_price = $order['price']>=$buy['deal']?$buy['deal']:$order['price'];
        if($order['uid'] != 35440 && $order['uid'] != 43308) {
            $fee = round($sale_price / $order['price'] * $order['fee'], 2);
        }else{
            $fee = 0;
        }
        $time = time();
        $mo->begin();
        if ($buy){
            $sell_user = $userMo->fRow($uid);
            $buy_user = $userMo->fRow($buy['uid']);
            $datalog = [
                'buyid' => $buy['uid'],
                'sellid' => $uid,
                'coinname' => $order['coin'],
                'price' =>$sale_price,
                'buymoble' => $buy_user['mo'] ? $buy_user['mo'] : $buy_user['email'],
                'buytradeno' => $buy['tradeno'],
                'sellmoble' => $sell_user['mo'] ? $sell_user['mo'] : $sell_user['email'],
                'selltradeno' => $order['tradeno'],
                'addtime' => time(),
                'bank' => $order['bank'],
                'wechat' => $order['wechat'],
                'alipay' => $order['alipay'],
                'type' => 2,
                'feesell' => $fee,
            ];

            # 事务开始
            try{
                //匹配处理用户金额
                $sell_id = $mo->exec("update c2c_trade set deal=deal-{$sale_price},num=num+{$sale_price},fee_on=fee_on+{$fee},deal_id={$buy['uid']},deal_time=$time where id={$order['id']}");
                $buy_id = $mo->exec("update c2c_trade set deal=deal-{$sale_price},num=num+{$sale_price},deal_id=$uid,deal_time=$time where id={$buy['id']}");
                $in_id = $c2ctradelogMo->insert($datalog);

                if($sell_id && $buy_id && $in_id){
                    $mo->commit();
                    return true;
                }else{
                    $mo->back();
                    return false;
                }
            }catch (Exception $e){
                $mo->back();
                return false;
            }
        }else{
            $mo->back();
            return false;
        }
    }

    //已付款
    public function paymentAction(){
        $id = coll("post","id");
        if(!$id){
            $this->ajax("参数错误");
        }
        $this->ajax_validata_user();
        $post_repeat = coll("post","repeat_del");
        $newRepeat = Tool_Request::valiRepeatData($post_repeat);
        if($newRepeat === false){
            $this->ajax("请勿重复提交");
        }
        $C2ctrade = new C2ctradeModel();
        $trade = $C2ctrade->where(['id' => $id,'type'=>1])->fRow();
        if(!$trade) $this->ajax('该订单不存在',0,["repeat"=>$newRepeat]);
        if ($trade['status'] == 1){
            $this->ajax('该订单已完成!',0,["repeat"=>$newRepeat]);
        }
        if ($trade['status'] == 3){
            $this->ajax('该订单已撤销',0,["repeat"=>$newRepeat]);
        }
        if ($trade['deal_id'] == 0){
            $this->ajax('该订单正在匹配中',0,["repeat"=>$newRepeat]);
        }

        $mo = Orm_Base::getInstance();
        $log = $mo->table('c2c_trade_log')->where(['buytradeno' => $trade['tradeno'], 'status' => 0])->fRow();
        $sell_user = UserModel::getInstance()->fRow($log['sellid']);
        # 事务开始
        $mo->begin();
        $up_id = $mo->table('c2c_trade')->where(['id' => $id])->update(['status' => 2]);
        if(empty($up_id)){
            $mo->back();
            $this->ajax('系统繁忙，请稍後再试!', 0,["repeat"=>$newRepeat]);
        }

        $up_sell_id = $mo->table('c2c_trade')->where(['tradeno' => $log['selltradeno']])->update(['status' => 2,'pay_time'=>time()]);
        if(!empty($up_sell_id)){
            $mo->commit();
            //短信通知
            $username = 'xzgr';  //用户名
            $password_md5 = '48bc19c3d2e6763b31c0583aae5e457d';  //32位MD5密码加密，不区分大小写
            $apikey = 'b943b645e1cc2fb7850abc06aaff975b';  //apikey秘钥（请登录 http://m.5c.com.cn 短信平台-->账号管理-->我的信息 中复制apikey）

            $message = '【火网】尊敬的火网用户，您的卖单' .$log['selltradeno'] . '已成功匹配金额' . $log['price'] . '，请收到款后及时登入平台点击“确认收款”按钮完成交易；如有疑问，请联系官方客服。';
            $contentUrlEncode = urlencode($message);//执行URLencode编码  ，$content = urldecode($content);解码
            $sms = $this->sendSMS($username, $password_md5, $apikey, $sell_user['area'] . $sell_user['mo'], $contentUrlEncode, 'UTF-8');  //进行发送
            $this->ajax('付款成功!',1,["repeat"=>$newRepeat]);
        }
        $mo->back();
        $this->ajax('系统繁忙，请稍後再试!', 0,["repeat"=>$newRepeat]);

    }

    //确认收款
    public function confirmPriceAction(){
        $id = coll("post","id");
        $this->ajax_validata_user();
        $this->ajax_user_finance();
        $post_repeat = coll("post","repeat_del");
        $newRepeat = Tool_Request::valiRepeatData($post_repeat);
        if($newRepeat === false){
            $this->ajax("请勿重复提交");
        }
        $C2ctrade = new C2ctradeModel();
        $C2ctradelog = new C2ctradelogModel();
        $trust = $C2ctrade->where(['id' =>$id,'type'=>2])->fRow();
        if(empty($trust)){
            $this->ajax('该订单不存在',0,["repeat"=>$newRepeat]);
        }
        if ($trust['deal_id']==0){
            $this->ajax('订单还未匹配!',0,["repeat"=>$newRepeat]);
        }
        if ($trust['status'] == 1 || $trust['status'] == 3){
            $this->ajax('订单已处理，不可以重复操作！',0,["repeat"=>$newRepeat]);
        }
        //查找交易中的订单
        $order = $C2ctradelog->where(['selltradeno' => $trust['tradeno']])->order('id desc')->fRow();
        //查找买家委托
        $buyTrust = $C2ctrade->where(['tradeno' => $order['buytradeno']])->order('id desc')->fRow();
        //买家查找from_UID
        $from_uid = UserModel::getInstance()->where("uid={$buyTrust['uid']}")->fOne("from_uid");
        $mo = Orm_Base::getInstance();
        $mo->begin();
        //更新委托
        $result = $C2ctrade->confirmPriceTrustStatus($trust,$buyTrust);
        if($result === false){
            $this->back();
            $this->ajax('卖出失败',0,["repeat"=>$newRepeat]);
        }

        $price = floatval($order['price']);
        $lock_usdt = $price+$order['feesell'];
        $uMo = new UserModel();
        $oldBuyUserInfo = $uMo->fRow($buyTrust['uid']);
        $oldSellUserInfo = $uMo->fRow($trust['uid']);
        //更新用户资产
        $buy_id = $mo->exec("update user set usdt_over=usdt_over+{$price} where uid={$buyTrust['uid']}");
        if(!$buy_id){
            $mo->back();
            $this->ajax('卖出失败',0,["repeat"=>$newRepeat]);
        }
        $sell_id = $mo->exec("update user set usdt_lock=usdt_lock-{$lock_usdt} where uid={$trust['uid']}");
        if(!$sell_id){
            $mo->back();
            $this->ajax('卖出失败',0,["repeat"=>$newRepeat]);
        }
        //写入明细
        $asset_result = $C2ctrade->confirmPriceUserFinance($order['id'],$oldBuyUserInfo,$oldSellUserInfo,$price,$lock_usdt);
        if($asset_result === false){
            $mo->back();
            $this->ajax('卖出失败',0,["repeat"=>$newRepeat]);
        }
        //用户分红
        if($from_uid){
            $fee_result = $uMo->c2cOrderFromUserFinance($from_uid,$buyTrust['uid'],$order['id'],$order['price']);
            if($fee_result === false){
                $mo->back();
                $this->ajax('卖出失败',0,["repeat"=>$newRepeat]);
            }
        }
        //更新订单状态
        $od_id = $C2ctradelog->where(['id' => $order['id'], 'status' => 0])->update(['status' => 1]);//更新交易记录状态
        $start_time = strtotime(C2cactiveModel::C2CACTIVESTARTTIME);
        $end_time = strtotime(C2cactiveModel::C2CACTIVEENDTIME);
        $time = time();
        if($time >= $start_time && $time <= $end_time){
            $active_result = C2cactiveModel::insertData($buyTrust['uid'],$trust['uid'],$price);
            if($active_result === false){
                $mo->back();
                $this->ajax('卖出失败',0,["repeat"=>$newRepeat]);
            }
        }
        if ($od_id) {
            $mo->commit();
            $this->ajax('卖出成功', 1, ["repeat"=>$newRepeat,$_SESSION['token']]);
        }
        $mo->back();
        $this->ajax('卖出失败',0,["repeat"=>$newRepeat]);
    }

    //撤销
    public function revokeOrderAction(){
        $id = coll("post","id");
        $this->ajax_validata_user();
        $post_repeat = coll("post","repeat_del");
        $remokeCount = Cache_Redis::instance()->get(C2ctradeModel::REDISREMOKECOUNT.$this->mCurUser['uid']);
        if($remokeCount > 3){
            $time = 172800+(($remokeCount-3)*(3600*24));
            UserModel::C2cTrustlockUser(C2ctradeModel::REDISLOCKUSERTRUST.$this->mCurUser['uid'],$this->mCurUser['uid'],$time);
        }
        $newRepeat = Tool_Request::valiRepeatData($post_repeat);
        if($newRepeat === false){
            $this->ajax("请勿重复提交");
        }
        if(empty($id)){
            $this->ajax("订单号不存在",0,["repeat"=>$newRepeat]);
        }
        $C2ctradeMo = new C2ctradeModel();
        $trade = $C2ctradeMo->where(['id' => $id])->fRow();
        if($trade['status'] == 3){
            $this->ajax("订单已撤销！",0,["repeat"=>$newRepeat]);
        }
        if($trade['status'] == 1){
            $this->ajax("订单已完成！");
        }
        //买单撤销
        if ($trade['type'] == 1) {
            $C2ctradeMo->begin();
            $result = $C2ctradeMo->remokeBuyTrust($trade);
            if($result === true){
                $C2ctradeMo->commit();
                if($trade['deal_id'] > 0) {
                    C2ctradeModel::c2cRemokeCount($this->mCurUser['uid']);
                }
                $this->ajax('撤单成功！', 1,["repeat"=>$newRepeat]);
            }
            $C2ctradeMo->back();
            $this->ajax('撤单失败！',0,["repeat"=>$newRepeat]);
        } else {
            //卖单撤销
            $userModel = new UserModel();
            $usdt = $userModel->where("uid={$trade['uid']}")->fRow();
            if ($trade['deal_id'] != 0){
                $this->ajax('订单已匹配成功，无法撤单',0,["repeat"=>$newRepeat]);
            }
            if($trade['deal_id']>0) {
                if (floatval($trade['deal'] + $trade['num'] + $trade['fee']) > floatval($usdt['usdt_lock'])){
                    $this->ajax('冻结金额不足!', 0, ["repeat" => $newRepeat]);
                }
            }else{
                if (floatval($trade['deal']) > floatval($usdt['usdt_lock'])){
                    $this->ajax('冻结金额不足!',0,["repeat"=>$newRepeat]);
                }
            }
            $C2ctradeMo->begin();
            $result = $C2ctradeMo->remokeSellTrust($trade);
            if($result === true){
                $C2ctradeMo->commit();
                if($trade['deal_id'] > 0) {
                    C2ctradeModel::c2cRemokeCount($this->mCurUser['uid']);
                }
                $this->ajax('撤单成功！', 1,["repeat"=>$newRepeat]);
            }
            $C2ctradeMo->back();
            $this->ajax('撤单失败！',0,["repeat"=>$newRepeat]);
        }
        $this->ajax('撤单失败！',0,["repeat"=>$newRepeat]);
    }

    //获取流水号
    function tradeno($type = '')
    {
        if ($type == 'c2c') {
            $length = 5;
            $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';//abcdefghijklmnopqrstuvwxyz
            $string = '';
            for ($i = 0; $i < $length; $i++) {
                // 取字符数组 $chars 的任意元素
                $string .= $chars[mt_rand(0, strlen($chars) - 1)];
            }
            return $string;
        } else {
            return substr(str_shuffle('ABCDEFGHIJKLMNPQRSTUVWXYZ'), 0, 2) . substr(str_shuffle(str_repeat('123456789', 4)), 0, 3);
        }
    }
    //发送接口
    public function sendSMS($username,$password_md5,$apikey,$mobile,$contentUrlEncode,$encode)
    {
        //发送链接（用户名，密码，apikey，手机号，内容）
        $url = "http://m.5c.com.cn/api/send/index.php?";  //如连接超时，可能是您服务器不支持域名解析，请将下面连接中的：【m.5c.com.cn】修改为IP：【115.28.23.78】
        $data=array
        (
            'username'=>$username,
            'password_md5'=>$password_md5,
            'apikey'=>$apikey,
            'mobile'=>$mobile,
            'content'=>$contentUrlEncode,
            'encode'=>$encode,
        );
        $result = $this->curlSMS($url,$data);

        return $result;
    }

    private function curlSMS($url,$post_fields=array())
    {
        $ch=curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);//用PHP取回的URL地址（值将被作为字符串）
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);//使用curl_setopt获取页面内容或提交数据，有时候希望返回的内容作为变量存储，而不是直接输出，这时候希望返回的内容作为变量
        curl_setopt($ch,CURLOPT_TIMEOUT,30);//30秒超时限制
        curl_setopt($ch,CURLOPT_HEADER,1);//将文件头输出直接可见。
        curl_setopt($ch,CURLOPT_POST,1);//设置这个选项为一个零非值，这个post是普通的application/x-www-from-urlencoded类型，多数被HTTP表调用。
        curl_setopt($ch,CURLOPT_POSTFIELDS,$post_fields);//post操作的所有数据的字符串。
        $data = curl_exec($ch);//抓取URL并把他传递给浏览器
        curl_close($ch);//释放资源

        $res = explode("\r\n\r\n",$data);//explode把他打散成为数组
        return $res[2]; //然后在这里返回数组。
    }


    public function getactivelistAction(){
        $c2cActiveRankingMo = new C2cactiverankingModel();
        $list = $c2cActiveRankingMo->order(" ranking asc ")->limit(50)->fList();
        if(empty($list)){
            $this->ajax("没有数据",0,[]);
        }
        foreach($list as &$value){
            unset($value['uid']);
            unset($value['created']);
            unset($value['updated']);
            $value['mo'] = substr($value['mo'],0,3)."****".substr($value['mo'],7,4);
            $value['name'] = $this->substr_cut($value['name']);
        }
        $this->ajax("",1,$list);
    }

    public function getactiveinfoAction(){
        $this->_session();
        $uid = $this->mCurUser['uid'];
        if(empty($uid)){
            $this->ajax("用户未登录！");
        }
        $key = C2cactiveModel::C2CACTIVEREDISKEY;
        if(!empty($this->mCurUser['mo'])){
            $key .= $this->mCurUser['mo'];
        }else{
            $key .= $this->mCurUser['email'];
        }
        $redis = Cache_Redis::instance(C2cactiveModel::C2CACTIVEREDIS);
        $rdata = $redis->get($key);
        if($rdata === false){
            $data = array(
                "mo" => $this->mCurUser['mo'],
                "name" => $this->mCurUser['realInfo']['name'],
                "buy_price" => 0,
                "sell_price" => 0,
                "ranking" => 0,
            );
            $this->ajax("",1,$data);
        }else{
            $rdata = json_decode($rdata,true);
            $rdata['mo'] = $rdata['mo'];
            $rdata['name'] = $rdata['name'];
            $this->ajax(1,1,$rdata);
        }

    }

    public function getCount($uid = 0,$type = 2,$daytime = 0){
        $c2ctradeMo = new C2ctradeModel();
        $count_list = $c2ctradeMo->where("uid={$uid} and type=$type and addtime>$daytime")->fList();
        $count = count($count_list);
        if($count != 0) {
            $cot = 0;
            $recount = 0;
            $reset_arr = array();
            foreach($count_list as $value){
                if($value["status"]!=3){
                    $cot++;
                }else{
                    $reset_arr[] = $value['id'];
                }
            }

            if(!empty($reset_arr)) {
                $ids = implode(",",$reset_arr);
                $where = " c2c_trade.uid={$uid} and c2c_trade.type=$type and c2c_trade.addtime>$daytime and c2c_trade_log.id is not null and c2c_trade.id in ({$ids}) ";
                $joinWhere = "";
                if ($type == 1) {
                    $joinWhere .= " c2c_trade.tradeno = c2c_trade_log.buytradeno ";
                } else {
                    $joinWhere .= " c2c_trade.tradeno = c2c_trade_log.selltradeno ";
                }
                $countData = $c2ctradeMo->table("c2c_trade")->field("c2c_trade.id")->join("c2c_trade_log", $joinWhere, "left")->where($where)->group("c2c_trade.id")->fList();
                $recount = count($countData);
            }
            $count = $cot+$recount;
        }
        return $count;
    }

    /**
     * 中文替换
     * @param $user_name
     * @return string
     */
    function substr_cut($user_name){
        $strlen     = mb_strlen($user_name, 'utf-8');
        $firstStr     = mb_substr($user_name, 0, 1, 'utf-8');
        return $strlen == 2 ? $firstStr . str_repeat('*', mb_strlen($user_name, 'utf-8') - 1) : $firstStr . str_repeat("*", $strlen - 2) . str_repeat('*', mb_strlen($user_name, 'utf-8') - 2);
    }


}
