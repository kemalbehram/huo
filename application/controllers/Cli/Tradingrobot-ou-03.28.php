<?php
class Cli_TradingrobotController extends Ctrl_Cli{

    // 自动交易用户
    private $user = array(
        "cnyx"=>array(
            'uid'=>34558
        ),
    );

    //要刷的交易对
    private $coinList=array(
        1=>array(
            "name"=>"pc_cnyx",
            'pricePointMin'=>5,
            'pricePointMax'=>7,
            'time_limit_min'=>40,
            'time_limit_max'=>70
        ),
        2=>array(
            "name"=>"oioc_cnyx",
            'pricePointMin'=>5,
            'pricePointMax'=>7,
            'time_limit_min'=>40,
            'time_limit_max'=>70
        ),
        3=>array(
            "name"=>"eac_cnyx",
            'pricePointMin'=>3,
            'pricePointMax'=>5,
            'time_limit_min'=>40,
            'time_limit_max'=>70
        ),
        4=>array(
            "name"=>"ifc_cnyx",
            'pricePointMin'=>3,
            'pricePointMax'=>6,
            'time_limit_min'=>40,
            'time_limit_max'=>70
        ),
        5=>array(
            "name"=>"bcx_cnyx",
            'pricePointMin'=>3,
            'pricePointMax'=>5,
            'time_limit_min'=>40,
            'time_limit_max'=>70
        ),
        6=>array(
            "name"=>"sie_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>40,
            'time_limit_max'=>70
        ),
        7=>array(
            "name"=>"doge_cnyx",
            'pricePointMin'=>2,
            'pricePointMax'=>5,
            'time_limit_min'=>40,
            'time_limit_max'=>70
        ),
        8=>array(
            "name"=>"btm_cnyx",
            'pricePointMin'=>2,
            'pricePointMax'=>5,
            'time_limit_min'=>40,
            'time_limit_max'=>70
        ),
        9=>array(
            "name"=>"gvm_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>60
        ),
        10=>array(
            "name"=>"mtr_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>60
        ),
        11=>array(
            "name"=>"qtum_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>60
        ),
        12=>array(
            "name"=>"eqt_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>60
        ),
        13=>array(
            "name"=>"wos_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>40,
            'time_limit_max'=>80
        ),
        14=>array(
            "name"=>"mat_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>70
        ),
        15=>array(
            "name"=>"drt_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>70
        ),
        16=>array(
            "name"=>"bcd_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>70
        ),
        17=>array(
            "name"=>"etc_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>70
        ),
        18=>array(
            "name"=>"ctm_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>70
        ),
        19=>array(
            "name"=>"wcg_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>6,
            'time_limit_max'=>20
        ),
        20=>array(
            "name"=>"eth_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>2,
            'time_limit_min'=>10,
            'time_limit_max'=>25
        ),
        21=>array(
            "name"=>"eos_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>10,
            'time_limit_max'=>30
        ),
        22=>array(
            "name"=>"xrp_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>4,
            'time_limit_min'=>10,
            'time_limit_max'=>25
        ),
        23=>array(
            "name"=>"btc_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>2,
            'time_limit_min'=>30,
            'time_limit_max'=>60
        ),
    );

    // 小数量单笔下单范围
    private $trustNumArr = array(
        "pc_cnyx"=>array(
            'min'=>500,
            'max'=>5000
        ),
        "oioc_cnyx"=>array(
            'min'=>500,
            'max'=>5000,
        ),
        "eac_cnyx"=>array(
            'min'=>500,
            'max'=>5000,
        ),
        "ifc_cnyx"=>array(
            'min'=>500,
            'max'=>5000,
        ),
        "bcx_cnyx"=>array(
            'min'=>500,
            'max'=>5000,
        ),
        "sie_cnyx"=>array(
            'min'=>200,
            'max'=>1000,
        ),
        "doge_cnyx"=>array(
            'min'=>300,
            'max'=>1500,
        ),
        "btm_cnyx"=>array(
            'min'=>100,
            'max'=>1000,
        ),
        "gvm_cnyx"=>array(
            'min'=>150,
            'max'=>300,
        ),
        "mtr_cnyx"=>array(
            'min'=>50,
            'max'=>200,
        ),
        "qtum_cnyx"=>array(
            'min'=>5,
            'max'=>50,
        ),
        "eqt_cnyx"=>array(
            'min'=>50,
            'max'=>100,
        ),
        "wos_cnyx"=>array(
            'min'=>50,
            'max'=>100,
        ),
        "mat_cnyx"=>array(
            'min'=>50,
            'max'=>200,
        ),
        "drt_cnyx"=>array(
            'min'=>50,
            'max'=>300,
        ),
        "bcd_cnyx"=>array(
            'min'=>20,
            'max'=>100,
        ),
        "etc_cnyx"=>array(
            'min'=>1,
            'max'=>30,
        ),
        "ctm_cnyx"=>array(
            'min'=>10,
            'max'=>50,
        ),
        "wcg_cnyx"=>array(
            'min'=>10,
            'max'=>100,
        ),
        "eth_cnyx"=>array(
            'min'=>1,
            'max'=>20,
        ),
        "eos_cnyx"=>array(
            'min'=>10,
            'max'=>50,
        ),
        "xrp_cnyx"=>array(
            'min'=>50,
            'max'=>200,
        ),
        "btc_cnyx"=>array(
            'min'=>1,
            'max'=>2,
        ),
    );

    // 大数量单笔下单范围
    private $trustNumArr_max = array(
        "pc_cnyx"=>array(
            'min'=>5000,
            'max'=>30000
        ),
        "oioc_cnyx"=>array(
            'min'=>5000,
            'max'=>30000,
        ),
        "eac_cnyx"=>array(
            'min'=>5000,
            'max'=>30000,
        ),
        "ifc_cnyx"=>array(
            'min'=>5000,
            'max'=>30000,
        ),
        "bcx_cnyx"=>array(
            'min'=>10000,
            'max'=>15000,
        ),
        "sie_cnyx"=>array(
            'min'=>1000,
            'max'=>3000,
        ),
        "doge_cnyx"=>array(
            'min'=>1000,
            'max'=>5000,
        ),
        "btm_cnyx"=>array(
            'min'=>600,
            'max'=>1500,
        ),
        "gvm_cnyx"=>array(
            'min'=>200,
            'max'=>500,
        ),
        "mtr_cnyx"=>array(
            'min'=>300,
            'max'=>600,
        ),
        "qtum_cnyx"=>array(
            'min'=>50,
            'max'=>100,
        ),
        "eqt_cnyx"=>array(
            'min'=>100,
            'max'=>500,
        ),
        "wos_cnyx"=>array(
            'min'=>100,
            'max'=>300,
        ),
        "mat_cnyx"=>array(
            'min'=>150,
            'max'=>500,
        ),
        "drt_cnyx"=>array(
            'min'=>150,
            'max'=>500,
        ),
        "bcd_cnyx"=>array(
            'min'=>100,
            'max'=>300,
        ),
        "etc_cnyx"=>array(
            'min'=>100,
            'max'=>200,
        ),
        "ctm_cnyx"=>array(
            'min'=>50,
            'max'=>200,
        ),
        "wcg_cnyx"=>array(
            'min'=>100,
            'max'=>200,
        ),
        "eth_cnyx"=>array(
            'min'=>20,
            'max'=>30,
        ),
        "eos_cnyx"=>array(
            'min'=>100,
            'max'=>200,
        ),
        "xrp_cnyx"=>array(
            'min'=>500,
            'max'=>1000,
        ),
        "btc_cnyx"=>array(
            'min'=>2,
            'max'=>5,
        ),
    );

    // 数量小数点位数
    private $numberPoint = 4;

    // 单价小数点位数
//    private $pricePoint = 8;

    // 低买高卖比例
    private $rate = 0.0001;

    // 刷单时间
//    private $time_limit = 30;

    // 保留买卖单委托条数
//    private $trustCount = 1;

    //刷单价格
    private $price = 0;

    //刷单随机价格变化次数
    private $priceChange = 8;

    private $priceNum = 0;



    // 日志文件
    private $logDir=APPLICATION_PATH.'/log/';

    /*
     * 需要使用的model
     */
    private $user_mo;
    private $coin_pair_mo;
    private $coin_float_mo;
    private $trust_coin_mo;
    private $order_coin_mo;
    private $mo = array('User', 'Coin_Pair', 'Coin_Float', 'Order_Coin', 'Trust_Coin');



    //启动标识文件
    private $processRunning = 'robotRunning.lock';


    /**
     * 程序入口（多进程）
     */
    public function runAction()
    {


            //如果进程正在运行，需要删掉‘启动标识文件’
//        $this->checkProcessRunningLock();
        $redis = Cache_Redis::instance('token');

        foreach($this->user as $coin)
        {
            foreach ($coin as $uid)
            {
                $redis->set($uid, '1');

            }
        }
        $coinList   = $this->coinList;

        if ($coinList)
        {
            //分发任务
            $this->distribute($coinList);
        }
        exit;
    }

    /**
     * 单币启动入口（用于调试）
     */
    public function oneAction($coin)
    {
        $coinPairMo = Coin_PairModel::getInstance();
        $coinObj    = $coinPairMo->where("status=1 and name='{$coin}'")->fRow();
        if ($coinObj)
        {
            $this->initModels();
            $this->quoteInit($coinObj['name'], 'init');
            $this->coin2coin($coinObj);
        }
        else
        {
            throw new Exception('cannot found coin : ' . $coin);
        }
        exit;
    }

    /**
     * 单进程启动方式
     */
    public function singleAction()
    {
        //如果进程正在运行，需要删掉‘启动标识文件’
        $this->checkProcessRunningLock();

        $coinPairMo = Coin_PairModel::getInstance();
        $coinList   = $coinPairMo->where('status=1')->fList();
        if ($coinList)
        {
            $this->initModels();
            while(true)
            {
                foreach($coinList as $v)
                {
                    $this->coin2coin($v, $this->sleep);
                }
            }
        }
        exit;
    }

    /**
     * 避免重复启动
     */
    private function checkProcessRunningLock()
    {
        if(file_exists($this->processRunning))
        {
            throw new Exception('the process is already running, check process and the lock file'.PHP_EOL);
        }
        file_put_contents($this->processRunning, posix_getpid());
    }

    /**
     * 用到的model实例(注意：每个进程一定要使用不同的数据库连接)
     */
    private function initModels($connect='default')
    {
        $models = array('User', 'Coin_Pair', 'Coin_Float', 'Order_Coin', 'Trust_Coin');
        foreach ($models as $v)
        {
            $m               = $v . 'Model';
            $this->model[$v] = new $m('', 'default', $connect);
        }
    }

    /**
     * 分发任务
     */
    private function distribute($list)
    {
        //创建子进程
        foreach ($list as $v)
        {
            //检查是否有重复任务
            if(isset($this->process[$v['name']]))
            {
                echo 'duplicate process name ' . $v['name'].PHP_EOL;
                $this->killAll();
            }
            else
            {
                $this->process[$v['name']] = $v;
            }

            $pid = pcntl_fork();
            if ($pid == 0)
            {
                $this->setProcessTitle($v['name']);
                $this->process[$v['name']]['process_id'] = posix_getpid();
                break;
            }
            else
            {
                $this->process[$v['name']]['process_id'] = $pid;
            }
        }

        //工作
        if ($pid == 0)
        {
            $myPid = posix_getpid();

            //根据当前进程id，找到自己的任务
            $namePidMap = array_column($this->process, 'name', 'process_id');

            //Tool_Log::wlog(sprintf("child process pid:%d, name:%s ", $myPid, $namePidMap[$myPid]), $this->logDir, true, '[m-d H:i:s]');
            //开始工作
            $this->work($this->process[$namePidMap[$myPid]]);
        }
        else
        {
            //这里是父进程，监控所有子进程状态
            pcntl_signal(SIGTERM, array(&$this,"sigHandler"), false);
            //Tool_Log::wlog(sprintf("father process pid:%d ", posix_getpid()), $this->logDir, true, '[m-d H:i:s]');
            $this->oversee();

        }
    }

    /**
     * 监控子进程
     */
    private function oversee()
    {
        while(true)
        {
            //阻塞等待任意子进程退出
            $pid = pcntl_wait($status, WUNTRACED);
            //处理信号
            pcntl_signal_dispatch();
            //查找具体退出进程
            if ($pid > 0)
            {
                $namePidMap = array_column($this->process, 'name', 'process_id');
                //Tool_Log::wlog(sprintf("%s die; pid: %d ", $namePidMap[$pid], $pid), $this->logDir, true, '[m-d H:i:s]');
                unset($this->process[$namePidMap[$pid]]['process_id']);
                //重建
                $this->createProcess($namePidMap[$pid]);
            }
        }
    }

    /**
     *  进程命名
     */
    private function setProcessTitle($processName)
    {
        //命名
        $title = sprintf('├─Cli_tradingrobot───%s', $processName);
        if (function_exists('cli_set_process_title'))
        {
            @cli_set_process_title($title);
        }
    }

    /**
     * 创建新进程
     */
    private function createProcess($processName)
    {
        $pid = pcntl_fork();
        if ($pid > 0)
        {
            //给父进程更新监听列表
            $this->process[$processName]['process_id'] = $pid;
        }
        elseif ($pid == 0)
        {
            $this->setProcessTitle($processName);
            //子进程投入工作
            //Tool_Log::wlog(sprintf("created %s; pid: %d ", $processName, posix_getpid()), $this->logDir, true, '[m-d H:i:s]');
            //信号委托
            pcntl_signal(SIGTERM, function(){exit;});
            $this->work($this->process[$processName]);
        }
    }




    /**
     * 信号处理
     */
    private function sigHandler($signo)
    {
        if($signo==SIGTERM)
        {
            $this->killAll();
            exit;
        }
    }


    /**
     * 结束所有进程
     */
    protected function killAll($msg='')
    {
        foreach($this->process as $v)
        {
            posix_kill($v['process_id'], SIGKILL);
        }

        //删除启动标识
        unlink($this->processRunning);

        $msg = $msg?sprintf('(%s)', $msg):'';
        Tool_Log::wlog('kill all process'. $msg, $this->logDir, true, '[m-d H:i:s]');
        exit(0);
    }


    /**
     * 交易处理
     */
    private function work($coin)
    {
        //日志分币存放
        //$this->logDir .= '/'.$coin['name'];
        $this->initModels($coin['name']);

        //记录当前的mysql thread_id，便于出现问题后定位
        $threadId = $this->model['User']->query('SELECT CONNECTION_ID() thread_id');
        Cache_Redis::instance('quote')->hSet('current_trust_mysql_tid', $coin['name'], $threadId[0]['thread_id']);

        $arr=explode("_",$coin['name']);
        $this->cancelAllAction($arr);

        //重复劳动
        while (true)
        {
            $pricePoint = mt_rand($coin['pricePointMin'],$coin['pricePointMax']);
            $this->dotrust(strtolower($coin['name']),$pricePoint,$coin['pricePointMax']);
            //处理信号
            pcntl_signal_dispatch();

            sleep(rand($coin['time_limit_min'],$coin['time_limit_max']));
        }
    }




    public function cancelAllAction($arr)
    {
        $this->initMo();
        $tMO= $this->trust_coin_mo;
        $tMO->designtable($arr[0]); //chen
        //启动前要先撤销掉该机器人的委托单
        $sale_cancel = $tMO->field('id')->where("coin_from = '{$arr[0]}' and coin_to='{$arr[1]}' and uid = {$this->user[$arr[1]]['uid']}  and numberover > 0 and status < 2 and 1=1  ")->order('price desc')->fList();
        if($sale_cancel) {
            foreach ($sale_cancel as $val) {
                $this->adminCancel($val['id'],$arr);
                sleep(5);
            }
        }
        return true;

    }

    /**
     * model初始化
     */
    private function initMo($refresh=false){
        foreach($this->mo as $mo){
            if($refresh === false && $this->{strtolower($mo).'_mo'}){
                continue;
            }
            $model = $mo.'Model';
            $this->{strtolower($mo).'_mo'} = new $model;
            
        }
    }

    /**
     * 挂单
     */
    private function dotrust($coin,$pricePoint,$pricePointMax){

        $logDir=$this->logDir.$coin."/".date("Ymd");

        $arr=explode('_',$coin);

        //获取该币种的最大最小交易数量

        $tMO= $this->trust_coin_mo;
        $tMO->designtable($arr[0]); //chen
        $tMO1= $this->order_coin_mo;
        $tMO1->designtable($arr[0]);    //chen


//        $this->order_coin_mo;

            $robotUserInfo = UserModel::getById($this->user[$arr[1]]['uid']);

            // 获取市场深度行情
            if($this->price == 0){
                $market = $this->getMarket($arr);
                if(!$market ){
                    echo '获取市场价格失败';
                    return;
                }
                // 市场买一价和卖一价
                $marketPrice = array('buy_one'=>$market['bid'], 'sale_one'=>$market['ask']);

                // 在市场买一价和卖一价之间随机
                $this->price = $this->getRangePrice($marketPrice['buy_one'], $marketPrice['sale_one'],$pricePoint);
            }


        //用户的买一价
        $BuyOne=$tMO->where("uid !=34588 and flag='buy' and coin_to='{$arr[1]}' and status<2")->order("price desc")->fOne('price');
        //用户的卖一价
        $SaleOne=$tMO->where("uid !=34588 and flag='sale' and coin_to='{$arr[1]}' and status<2")->order("price asc")->fOne('price');



        echo 'priceNum'.$this->priceNum.PHP_EOL;
        echo 'priceChange'.$this->priceChange.PHP_EOL;
        echo 'price'.$this->price.PHP_EOL;



        $this->priceNum++;

        //刷到最大随机次数时开始变化价格
        if($this->priceNum == $this->priceChange){
            $priceRand = mt_rand(30,60);
            $this->priceChange = $priceRand;
            $this->priceNum = 0;

            //价格变化
            if($priceRand%2){
                $this->price = round($BuyOne+($SaleOne-$BuyOne)/5,$pricePoint);
            }else{
                $this->price = round($BuyOne+($SaleOne-$BuyOne)/5,$pricePoint);
            }
        }else{
            $mrand = mt_rand(0,3);

//            $mtrand = mt_rand(0,10);
            $mtrand = $mrand>=3?$pricePoint:$pricePointMax;

            //价格变化
            if($this->price>=100){
                if($this->price>=10000){
                    $grow = ($this->price*$mrand/10000);
                }else{
                    $grow = ($this->price*$mrand/1000);
                }

                if($mrand%2){
                    $this->price = round($this->price-$grow,$mtrand);
                }else{
                    $this->price = round($this->price+$grow,$mtrand);
                }
            }else{
                $pointMax = $mrand*(pow(0.1,$mtrand));
                if($mrand%2){
                    $this->price = round($this->price-$pointMax,$mtrand);
                }else{
                    $this->price = round($this->price+$pointMax,$mtrand);
                }
            }
        }


        //随机价格不在当前 卖一卖一范围内
        if($this->price<=$BuyOne){
            $this->price = Tool_Math::add($BuyOne,$pointMax,$pricePointMax);
        }
        if($this->price>=$SaleOne){
            $this->price = Tool_Math::sub($SaleOne,$pointMax,$pricePointMax);
        }


            // 组装委托数据
            $trust_number1 = $this->getRandomNum($arr);
//            $trust_number2 = $this->getRandomNum($arr);

            if($mrand%2){
                $type1 = 'in';
                $type2 = 'out';
            }else{
                $type1 = 'out';
                $type2 = 'in';
            }

        if($this->price<=$BuyOne || $this->price>=$SaleOne){
            $this->price = round($BuyOne+($SaleOne-$BuyOne)/5,$pricePointMax);
        }

        if($this->price<=$BuyOne || $this->price>=$SaleOne) return false;


        $trust_datas = array(
            0 => array('type'=>$type1, 'price'=>$this->price, 'number'=>$trust_number1, 'coin_from' => $arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
            1 => array('type'=>$type2, 'price'=>$this->price, 'number'=>$trust_number1, 'coin_from'=>$arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
//                2 => array('type'=>'out', 'price'=>round($price*(1+$this->rate), $pricePoint+1), 'number'=>$trust_number1, 'coin_from' => $arr[0],'coin_to'=>$arr[1], 'trust_type'=>0),
//                3 => array('type'=>'in', 'price'=>round($price*(1-$this->rate), $pricePoint+1), 'number'=>$trust_number2, 'coin_from' => $arr[0],'coin_to'=>$arr[1], 'trust_type'=>0)
        );


        echo '买一'.$BuyOne.'卖一'.$SaleOne.PHP_EOL;
        echo 'priceNum'.$this->priceNum.PHP_EOL;
        echo 'priceChange'.$this->priceChange.PHP_EOL;
        echo 'price'.$this->price.PHP_EOL;


//        if($price<=$BuyOne || $price>=$SaleOne) {
//            //exit("Commissioned by the current price is not buy a price and sold for a price");
//
//            echo '价格'.$price.'---'.'买一'.$BuyOne.PHP_EOL;
//            echo '价格'.$price.'---'.'卖一'.$SaleOne.PHP_EOL;
//            Tool_Log::wlog("随机价格不在当前用户的买一卖一价之间, price:$price", $logDir, true);
//            return ;
//        }

//            //再查出用户的买一价和卖一价
//            //用户的买一价
//            $dobBuyOne=$tMO->where("uid !=34588 and flag='buy' and coin_to='{$arr[1]}' and status<2")->order("price desc")->fOne('price');
////            //用户的卖一价
//            $dobSaleOne=$tMO->where("uid !=34588 and flag='sale' and coin_to='{$arr[1]}' and status<2")->order("price asc")->fOne('price');
//
//            if($price<=$dobBuyOne || $price>=$dobSaleOne) {
//                //exit("Commissioned by the current price is not buy a price and sold for a price");
//
//                echo '价格'.$price.'---'.'买一'.$dobBuyOne.PHP_EOL;
//                echo '价格'.$price.'---'.'卖一'.$dobSaleOne.PHP_EOL;
//                Tool_Log::wlog("随机价格不在当前用户的买一卖一价之间, price:$price", $logDir, true);
//                return ;
//            }


            // 下委托单
            foreach ($trust_datas as $v) {
                $tids[] = $this->trustbtc($v, $robotUserInfo,$arr);
            }

            sleep(1);
            foreach ($tids as $v){
                $this->adminCancel($v,$arr );
            }

    }

    /**
     * 获取市场深度行情
     */
    private function getMarket($arr){

        //再查出用户的买一价和卖一价
        $tMO= $this->trust_coin_mo;
        $tMO->designtable($arr[0]); //chen
        //用户的买一价
        $dobBuyOne=$tMO->where("uid !=34558 and flag='buy' and coin_to='{$arr[1]}' and status<2")->order("price desc")->fOne('price');
        //用户的卖一价
        $dobSaleOne=$tMO->where("uid !=34558 and flag='sale' and coin_to='{$arr[1]}' and status<2")->order("price asc")->fOne('price');
        $marketArr['bid']=$dobBuyOne;
        $marketArr['ask']=$dobSaleOne;

        return $marketArr;

    }

    /**
     * 买一价和卖一价直接随机价格
     */
    private function getRangePrice($min, $max,$pricePoint){
        //$price = round($min + mt_rand() / mt_getrandmax() * ($max - $min), $this->pricePoint);
        $m2 = pow(10,$pricePoint);
        $price = Tool_Math::format(mt_rand($min*$m2, $max*$m2)/$m2, $pricePoint);
        return $price;
    }

    /**
     * 随机生成委托数量
     */
    private function getRandomNum($arr){
        $num = mt_rand(0,100);
        $numberPoint = mt_rand(0,$this->numberPoint);

        if( $num >= 90 ){
            return round($this->trustNumArr_max[$arr[0]."_".$arr[1]]['min'] + mt_rand() / mt_getrandmax() * ($this->trustNumArr_max[$arr[0]."_".$arr[1]]['max'] - $this->trustNumArr_max[$arr[0]."_".$arr[1]]['min']), $numberPoint);
        }else{
            return round($this->trustNumArr[$arr[0]."_".$arr[1]]['min'] + mt_rand() / mt_getrandmax() * ($this->trustNumArr[$arr[0]."_".$arr[1]]['max'] - $this->trustNumArr[$arr[0]."_".$arr[1]]['min']), $numberPoint);
        }

    }

    /**
     * 写入委托
     */
    private function trustbtc($pData, &$pUser,$arr){
        // 保存DB
        $tMO= $this->trust_coin_mo;
        $tMO->designtable($arr[0]); //chen
       // $tMO->btc($pData, $pUser);

        $tMO->begin();
            # 买入
            if($pData['type']=='in'){
                $totalPrice = Tool_Math::mul($pData['price'], $pData['number']);
                $coinData = array($pData['coin_to'].'_lock' => $totalPrice, $pData['coin_to'].'_over' => Tool_Math::mul('-1', $totalPrice));
                $pData['type'] = 'buy';
            }
            # 卖出
            else {
                $number = $pData['number'];
                $coinData = array($pData['coin_from'].'_lock' => $number, $pData['coin_from'].'_over' => Tool_Math::mul('-1', $number));
                $pData['type'] = 'sale';
            }
            # 写入
            $userMo = UserModel::getInstance();
            if(!$userMo->safeUpdate($pUser, $coinData, false, $pData['coin_from'].'_'.$pData['coin_to'])){
                $tMO->back();
                Tool_Fnc::warning($pData['coin_from'].'_'.$pData['coin_to'].'機器人賬戶餘額不足'."; price:{$pData['price']}, number:{$number}");
                return $tMO->setError($userMo->error[2]);
            }
            # 写入委托
            if($pData['number']>0 && !$tId = $tMO->insert(array(
                'uid'=>$pUser['uid'],
                'price'=>$pData['price'],
                'number'=>$pData['number'],
                'numberover'=>$pData['number'],
                'flag'=>$pData['type'],
                'status'=>0,
                'coin_from'=>$pData['coin_from'],
                'coin_to'=>$pData['coin_to'],
                'created'=>time(),
                'createip'=>'0.0.0.0'//Tool_Fnc::realip()
            ))){
                $tMO->back();
                echo 222;
                return $tMO->setError($GLOBALS['MSG']['SYS_ERROR']);
            }


            //写入队列
            $r = $tMO->pushInQueue($pData['coin_from'].'_'.$pData['coin_to'], array(
                'id'=>$tId,
            ), 'new');

            if(!$r)
            {
                echo 333;
                $tMO->back();
                return $tMO->setError($GLOBALS['MSG']['SYS_ERROR'].'[2]');
            }
            # 提交数据
        $tMO->commit();
        return $tId;
    }

    /**
     * 撤销
     */
    private function adminCancel($pId,$arr){
        # 开始事务

        $tMO= $this->trust_coin_mo;
        $tMO->designtable($arr[0]); //chen
        // 自动交易用户信息
        $robotUserInfo = UserModel::getById($this->user[$arr[1]]['uid']);
        $result = $tMO->cancel($pId, $robotUserInfo, 1);
        return $result;
    }
}
