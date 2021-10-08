<?php


class Ajax_MoreController extends Ajax_BaseController
{
    # 启用 SESSION
    protected $_auth = 1;

    /**
     * 资金划转
     * 示例参数
     * $data = ['number'=>10,'coin'=>'wcg','type'=>1];
     */
    public function overToMoreAction()
    {
        //检查是否登录
        $this->_ajax_islogin();
        $data = $_POST;

        //验证参数是否正确
        if(!$data['number'] || !$data['coin'] || !$data['type']) $this->ajax('参数错误',0);
        $uid = $this->mCurUser['uid'];
        $userMo = UserModel::getInstance();
        $userMoreLogMo = UserMoreLogModel::getInstance();

        //判断是币币转余币宝还是余币宝转 1币币转至余币宝 2.余币宝转至币币
        if($data['type']==1){
            $coinOut = 'over';
            $coinIn = 'more';
            //无论是转入还是转出，asset_pert 中显示的金额都是币币的余额，所以设定了下面的变量
            $asset_coin_number = $data['number'];
        }elseif($data['type']==2){
            $coinOut = 'more';
            $coinIn = 'over';
            //无论是转入还是转出，asset_pert 中显示的金额都是币币的余额，所以设定了下面的变量
            $asset_coin_number = -($data['number']);
        }

        //设置转币名称，被转币名称， 冻结币
        $coin_out_name = $data['coin'] . '_' . $coinOut;
        $coin_in_name  = $data['coin'] . '_' . $coinIn;
        $coin_lock_name = $data['coin']. '_lock';

        //更改用户的数据
        $userMo->begin();
        //查询用户的信息（为了防止用户在变更数据的时候出现脏读，所以直接用排它锁）
        $user_info = $userMo->where("uid=$uid") -> lock()->fRow();

        //判断用户是否有足够的余额
        if($user_info[$coin_out_name] < $data['number']){
            $userMo->back();
            $this->ajax('账户余额不足',0);
        }

        $up_id = $userMo->exec("update user set {$coin_out_name}={$coin_out_name} - {$data['number']},
                 {$coin_in_name}={$coin_in_name}+{$data['number']} where uid=$uid");
        if(!$up_id){
            $userMo->back();
            $this->ajax("更新资产失败",0);
        }

        //插入数据
        $in_data = [
            'uid' => $uid,
            'type' => $data['type'],
            'coin' => $data['coin'],
            'number' => $data['number'],
            'created' => time()
        ];
        if(!$in_id = $userMoreLogMo->insert($in_data)){
            $userMo->back();
            $this->ajax("数据写入失败",0);
        }

        //进行总账单数据的添加
        $insert_asset_past_data = [
            'date'          => date('Y-m-d H:i:s'),
            'uid'           => $uid,
            'type'          => 12,
            'opt_type'      => $data['type'],
            'coin_from'     => $data['coin'],
            'coin_to'       => $data['coin'],
            'oid'           => $in_id,
            'otable'        => 'user_more_log',
            'former_over'   => $user_info[$data['coin'].'_over'],
            'now_over'      => $user_info[$data['coin'].'_over'] - $asset_coin_number,
            'former_lock'   => $user_info[$coin_lock_name],
            'now_lock'      => $user_info[$coin_lock_name],
            'created'       => time(),
            'addtime'       => time(),
        ];
        $asset_insert_id = AssetpastModel::getInstance() -> insert($insert_asset_past_data);
        if(!$asset_insert_id){
            $userMo -> back();
            $this -> ajax('数据写入失败',0);
        }

        //事务进行提交
        $userMo->commit();

        //进行数据的反馈
        $this->ajax('操作成功',1);
    }

    /*
     * 显示余币宝余额
     */
    public function getMoreAction(){
        $this->_ajax_islogin();
        $userMo = UserModel::getInstance();
        $uid = $this->mCurUser['uid'];
        $data = $userMo->where("uid=$uid")->fRow();

        $this->ajax("获取成功",1,$data);
    }


    //转入记录
    public function getMoreLogAction(){
        $this->_ajax_islogin();

        $userMoerLogMo = UserMoreLogModel::getInstance();
        $uid = $this->mCurUser['uid'];

        $get = coll('get');

        $data['total'] = $userMoerLogMo->where("uid=$uid")->count();

        $tPage = new Tool_Page($data['total'],10);
        $data['pageinfo'] = $tPage->show();

        $data['list'] = $userMoerLogMo
            ->where("uid=$uid")
            ->limit($tPage->limit())
            ->order('id desc')
            ->fList();

        $this->ajax('获取成功',1,$data);
    }


    /*
     * 打够3倍流水提现
     */
    public function luckyToOverAction(){

        $this->_ajax_islogin();

        Tool_Session::mark($this->mCurUser['uid']);

        $post = coll('get');
        if(!$post['number'] || !is_numeric($post['number'])) $this->ajax("参数错误");

        $uid = $this->mCurUser['uid'];
        $luckUserMo = LuckUserModel::getInstance();

        $startTime = strtotime(date("Y-m-d"));

        //查询流水
        $total_money = $luckUserMo->where("addtime>$startTime and uid=$uid and is_invalid=0")->field("sum(money) total_money")->fRow();
        $total_money = $total_money['total_money'];

        $wcg_lucky_lock = $this->mCurUser['wcg_lucky_lock'];

        if($wcg_lucky_lock<=0) $this->ajax("暂无可提现额度");
        if(!$total_money) $this->ajax("需达到3倍流水才可提现");
        if($total_money<($wcg_lucky_lock*3)) $this->ajax("需达到3倍流水才可提现");

        $userMo = UserModel::getInstance();
        $userLuckLogMo = UserLuckyLogModel::getInstance();

        Tool_Session::mark($this->mCurUser['uid']);
        if($post['number']>$this->mCurUser['wcg_lucky']){// || $post['number']>$this->mCurUser['wcg_lucky_lock']
            $this->ajax("可提现额度不足");
        }

        $userMo->begin();

        $in_data = [
            'uid' => $uid,
            'coin' => 'wcg',
            'number' => $post['number'],
            'created' => time(),
            'before_number' => $this->mCurUser['wcg_lucky'],
            'type' => 1
        ];

        $in_id = $userLuckLogMo->insert($in_data);
        if(!$in_id){
            $userMo->back();
            $this->ajax("写入数据失败");
        }

        $up_id = $userMo->exec("update user set wcg_over=wcg_over+{$post['number']},wcg_lucky=wcg_lucky-{$post['number']} where uid=$uid");
        if(!$up_id){
            $userMo->back();
            $this->ajax("更新资产失败");
        }

        $userMo->commit();

        $this->ajax("转出成功",1);
    }

    /*
     * 我的定存
     */
    public function depositAction(){
        $this->_ajax_islogin();
        $uid = $this->mCurUser['uid'];

        $userMoreLogMo = UserMoreLogModel::getInstance();
        $data['total'] = $userMoreLogMo->where("uid=$uid")->count();

        $tPage = new Tool_Page($data['total'],10);
        $data['pageinfo'] = $tPage->show();

        $data['list'] = $userMoreLogMo
            ->where("uid=$uid")
            ->limit($tPage->limit())
            ->order('id desc')
            ->fList();

        $this->ajax('获取成功',1,$data);
    }


    /*
     * 我的利息
     */
    public function interestAction(){
        $this->_ajax_islogin();

        $uid = $this->mCurUser['uid'];

        $userLuckyLogMo = UserLuckyLogModel::getInstance();

        $data['total'] = $userLuckyLogMo->where("uid=$uid and type=0")->count();

        $tPage = new Tool_Page($data['total'],10);
        $data['pageinfo'] = $tPage->show();

        $data['list'] = $userLuckyLogMo
            ->where("uid=$uid and type=0")
            ->limit($tPage->limit())
            ->order('id desc')
            ->fList();

        $this->ajax('获取成功',1,$data);

    }
}

