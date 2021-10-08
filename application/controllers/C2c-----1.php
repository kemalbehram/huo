<?php
class C2cController extends Ctrl_Base
{

    protected $_auth = 1;

    function init()
    {
        parent::init();
        $this->assign('pageName', $this->_request->action);
    }


    //用户c2c
    public function indexAction($page = 1)
    {

        $this->_ajax_islogin();
        Tool_Session::mark($this->mCurUser['uid']);
//        $C2ctrade = new C2ctradeModel();
//        // 当前总记录条数
//        isset($_GET['p']) or $_GET['p'] = intval($page);
//        $data['totalsell'] = $C2ctrade->where(['status' => 0, 'type' => 2, 'moble' => 15586991887, 'deal_id' => 0])->count();
//        // 获取分页显示
//        $tPage = new Tool_Page($data['totalsell'], 10);
//        $data['pageinfosell'] = $tPage->show();
//        $data['listsell'] = $C2ctrade->field('*')
//            ->where(['status' => 0, 'type' => 2, 'moble' => 15586991887, 'deal_id' => 0])
//            ->limit(5)
//            ->order('id desc')
//            ->fList();
//        foreach ($data['listsell'] as $k => $v) {
//            $data['listsell'][$k]['sellmoble'] = substr_replace($v['moble'], '****', 3, 4);
//        }
//        $urgent = UrgentModel::getInstance()->where("id!=0")->fRow();
//
//        //买单
//        $UserModel = new UserModel();
//        $usertype = $UserModel->where("uid={$this->mCurUser['uid']}")->fRow();
//        if ($usertype['mo'] == '15586991887') {
//            $atime = time() - (72000);
//            //and addtime >$atime
//            $data['buytsell'] = $C2ctrade->where("status=0 and type=1 and moble!=15586991887 and deal_id=0 and addtime >$atime")->limit(5)->order('id desc')->fList();
//            foreach ($data['buytsell'] as $k => $v) {
//                $data['buytsell'][$k]['buymoble'] = substr_replace($v['moble'], '****', 3, 4);
//            }
//        }
//        $repeat_del = md5(time() . rand(10000, 9999));;
//        $_SESSION['repeat_del'] = $repeat_del;
//        $this->assign("repeat_del", $repeat_del);
//        // Tool_Out::p( $data['buytsell']);die;
//        $this->assign('urgent', $urgent);
//        $this->assign('data', $data);

    }
}
