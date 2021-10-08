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
        4=>array(
            "name"=>"ifc_cnyx",
            'pricePointMin'=>3,
            'pricePointMax'=>6,
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
        11=>array(
            "name"=>"qtum_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>60
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
        19=>array(
            "name"=>"wcg_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>15,
            'time_limit_max'=>50
        ),
        20=>array(
            "name"=>"eth_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>2,
            'time_limit_min'=>20,
            'time_limit_max'=>60
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
            'time_limit_min'=>50,
            'time_limit_max'=>100
        ),
        25=>array(
            "name"=>"ltc_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>80
        ),
        26=>array(
            "name"=>"gt_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>60
        ),
        28=>array(
            "name"=>"moa_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>3,
            'time_limit_min'=>30,
            'time_limit_max'=>60
        ),
        30=>array(
            "name"=>"wen_cnyx",
            'pricePointMin'=>1,
            'pricePointMax'=>2,
            'time_limit_min'=>30,
            'time_limit_max'=>60
        ),
        32=>array(
            "name"=>"ect_cnyx",
            'pricePointMin'=>5,
            'pricePointMax'=>5,
            'time_limit_min'=>30,
            'time_limit_max'=>60
        ),
    );

    // 小数量单笔下单范围
    private $trustNumArr = array(
        "pc_cnyx"=>array(
            'min'=>100,
            'max'=>2000
        ),
        "ifc_cnyx"=>array(
            'min'=>100,
            'max'=>2000,
        ),
        "doge_cnyx"=>array(
            'min'=>100,
            'max'=>1000,
        ),
        "btm_cnyx"=>array(
            'min'=>50,
            'max'=>1000,
        ),
        "qtum_cnyx"=>array(
            'min'=>1,
            'max'=>50,
        ),
        "mat_cnyx"=>array(
            'min'=>20,
            'max'=>200,
        ),
        "drt_cnyx"=>array(
            'min'=>20,
            'max'=>200,
        ),
        "bcd_cnyx"=>array(
            'min'=>10,
            'max'=>100,
        ),
        "etc_cnyx"=>array(
            'min'=>1,
            'max'=>20,
        ),
        "wcg_cnyx"=>array(
            'min'=>10,
            'max'=>800,
        ),
        "eth_cnyx"=>array(
            'min'=>1,
            'max'=>5,
        ),
        "eos_cnyx"=>array(
            'min'=>1,
            'max'=>30,
        ),
        "xrp_cnyx"=>array(
            'min'=>5,
            'max'=>80,
        ),
        "btc_cnyx"=>array(
            'min'=>0,
            'max'=>1,
        ),
        "ltc_cnyx"=>array(
            'min'=>1,
            'max'=>3,
        ),
        "gt_cnyx"=>array(
            'min'=>1,
            'max'=>100,
        ),
        "moa_cnyx"=>array(
            'min'=>30,
            'max'=>1000,
        ),
        "wen_cnyx"=>array(
            'min'=>2,
            'max'=>30,
        ),
        "ect_cnyx"=>array(
            'min'=>5000,
            'max'=>50000,
        ),
    );

    // 大数量单笔下单范围
    private $trustNumArr_max = array(
        "pc_cnyx"=>array(
            'min'=>2000,
            'max'=>20000
        ),
        "ifc_cnyx"=>array(
            'min'=>2000,
            'max'=>20000,
        ),
        "doge_cnyx"=>array(
            'min'=>500,
            'max'=>3000,
        ),
        "btm_cnyx"=>array(
            'min'=>200,
            'max'=>1000,
        ),
        "qtum_cnyx"=>array(
            'min'=>10,
            'max'=>80,
        ),
        "mat_cnyx"=>array(
            'min'=>30,
            'max'=>300,
        ),
        "drt_cnyx"=>array(
            'min'=>30,
            'max'=>300,
        ),
        "bcd_cnyx"=>array(
            'min'=>20,
            'max'=>200,
        ),
        "etc_cnyx"=>array(
            'min'=>20,
            'max'=>150,
        ),
        "wcg_cnyx"=>array(
            'min'=>100,
            'max'=>1000,
        ),
        "eth_cnyx"=>array(
            'min'=>1,
            'max'=>10,
        ),
        "eos_cnyx"=>array(
            'min'=>5,
            'max'=>30,
        ),
        "xrp_cnyx"=>array(
            'min'=>50,
            'max'=>300,
        ),
        "btc_cnyx"=>array(
            'min'=>0,
            'max'=>2,
        ),
        "ltc_cnyx"=>array(
            'min'=>2,
            'max'=>5,
        ),
        "gt_cnyx"=>array(
            'min'=>100,
            'max'=>500,
        ),
        "moa_cnyx"=>array(
            'min'=>800,
            'max'=>2000,
        ),
        "wen_cnyx"=>array(
            'min'=>30,
            'max'=>80,
        ),
        "ect_cnyx"=>array(
            'min'=>50000,
            'max'=>200000,
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

            sleep(rand(floor($coin['time_limit_min']),floor($coin['time_limit_max'])));//
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

//        echo '$this->price:'.$this->price;

        // 获取市场深度行情
//        if($this->price == 0){
//            $market = $this->getMarket($arr);
//            if(!$market ){
//                echo '获取市场价格失败';
//                return;
//            }
//            // 市场买一价和卖一价
//            $marketPrice = array('buy_one'=>$market['bid'], 'sale_one'=>$market['ask']);

//            echo $arr[0].'------'.PHP_EOL;

        $price = 0;
        $number = 0;
        if(in_array($arr[0],['btc','ltc','eos','eth','fil','etc','gt','qtum','xrp','btm','bcd','doge'])){
            //获取GATEIO的价格
            $coininfo = json_decode(file_get_contents("https://data.gateio.co/api2/1/candlestick2/{$arr[0]}_usdt?group_sec=10&range_hour=0.005"),true);
            $usdtinfo = json_decode(file_get_contents("https://data.gateio.co/api2/1/ticker/usdt_cnyx"),true);
            $usdtPrice = $usdtinfo['last'];//USDT价格
            $coinPrice = $coininfo['data'][count($coininfo['data'])-1][2];

            if(!$coininfo['data'] || !$coininfo['data'][count($coininfo['data'])-1][2]) return;
            if(!$usdtPrice) return;

            $price = Tool_Math::mul($coinPrice,$usdtPrice,$pricePoint);
            $number = Tool_Math::format($coininfo['data'][count($coininfo['data'])-1][1],$pricePointMax);
        }


//        echo "GATE价格:{$arr[0]}".$price.PHP_EOL;

            // 在市场买一价和卖一价之间随机
//            $this->price = Tool_Math::mul($usdtPrice,$coininfo['data'][2],$pricePoint);
//            if($this->price<$marketPrice['buy_one'] || $this->price>$marketPrice['sale_one']){
//                $this->price = Tool_Math::div(($marketPrice['buy_one']+$marketPrice['sale_one']),2,$pricePoint);
//            }



                //$this->getRangePrice($marketPrice['buy_one'], $marketPrice['sale_one'],$pricePoint);
//        }
//        echo "PRICE:".$this->price.PHP_EOL;

        //用户的买一价uid !=34588 and
        $BuyOne=$tMO->where("flag='buy' and coin_to='{$arr[1]}' and status<2")->order("price desc")->fOne('price');
        //用户的卖一价uid !=34588 and
        $SaleOne=$tMO->where("flag='sale' and coin_to='{$arr[1]}' and status<2")->order("price asc")->fOne('price');


        //echo '交易对:'. $coin. PHP_EOL .'买一:'.$BuyOne.PHP_EOL.'卖一:'.$SaleOne.PHP_EOL;



//        echo $arr[0].'_'.$arr[1].PHP_EOL;
//        echo '买一价'.$BuyOne.PHP_EOL;
//        echo '卖一价'.$SaleOne.PHP_EOL;
//        echo 'priceNum'.$this->priceNum.PHP_EOL;
//        echo 'priceChange'.$this->priceChange.PHP_EOL;
//        echo 'price'.$this->price.PHP_EOL;



//        $this->priceNum++;

        //刷到最大随机次数时开始变化价格
//        if($this->priceNum == $this->priceChange){
//            $priceRand = mt_rand(30,60);
//            $this->priceChange = $priceRand;
//            $this->priceNum = 0;
//
//            //价格变化
//            if($priceRand%2){
//                $this->price = round($BuyOne+($SaleOne-$BuyOne)/5,$pricePoint);
//            }else{
//                $this->price = round($BuyOne+($SaleOne-$BuyOne)/5,$pricePoint);
//            }
//        }else{
//            $mrand = mt_rand(0,3);
//
////            $mtrand = mt_rand(0,10);
//            $mtrand = $mrand>=3?$pricePoint:$pricePointMax;
//
//            //价格变化
//            if($this->price>=100){
////                if($this->price>=10000){
//                $grow = ($this->price*$mrand/10000);
////                }else{
////                    $grow = ($this->price*$mrand/1000);
////                }
//
//                if($mrand%2){
//                    $this->price = round($this->price-$grow,$mtrand);
//                }else{
//                    $this->price = round($this->price+$grow,$mtrand);
//                }
//            }else{
//                $pointMax = $mrand*(pow(0.1,$mtrand));
//                if($mrand%2){
//                    $this->price = round($this->price-$pointMax,$mtrand);
//                }else{
//                    $this->price = round($this->price+$pointMax,$mtrand);
//                }
//            }
//        }


        //随机价格不在当前 卖一卖一范围内
        if($price<=$BuyOne || $price>=$SaleOne){
//            $priceRand = mt_rand(1,10);
            $price = $this->random($BuyOne,$SaleOne);
//            $price = round($SaleOne-($SaleOne-$BuyOne)/mt_rand(48,52)/10,$pricePointMax);
//            if($price<=$BuyOne || $price>=$SaleOne){
//                $price = ($SaleOne+$BuyOne)/2;
//
//                $tradeRand = mt_rand(0,1);
//                if($tradeRand%2){
//                    $price = $price+$price*mt_rand(0,5)*0.0001;
//                }else{
//                    $price = $price-$price*mt_rand(0,5)*0.0001;
//                }
//                $price = round($price,$pricePointMax);
//            }
//
//            echo "火网价格:".$price.PHP_EOL;
        }

        //var_dump('价格:'. $price . PHP_EOL);


        // 组装委托数据
//        $trust_number1 = $this->getRandomNum($arr);
//            $trust_number2 = $this->getRandomNum($arr);

        $mrand = mt_rand(0,1);
        if($mrand%2){
            $type1 = 'in';
            $type2 = 'out';
        }else{
            $type1 = 'out';
            $type2 = 'in';
        }

//        $this->price = $this->random($BuyOne,$SaleOne);
//        $this->price1 = $this->random($BuyOne,$SaleOne);
//        $this->price2 = $this->random($BuyOne,$SaleOne);
//        $this->price3 = $this->random($BuyOne,$SaleOne);


//        if($this->price<=$BuyOne || $this->price>=$SaleOne){
//            $this->price = round($BuyOne+($SaleOne-$BuyOne)/5,$pricePointMax);
//            $this->price1 = round($BuyOne+($SaleOne-$BuyOne)/7,$pricePointMax);
//            $this->price2 = round($BuyOne+($SaleOne-$BuyOne)/3,$pricePointMax);
//            $this->price3 = round($BuyOne+($SaleOne-$BuyOne)/2,$pricePointMax);
//        }else{
//            $this->price1 = round($BuyOne+($SaleOne-$BuyOne)/7,$pricePointMax);
//            $this->price2 = round($BuyOne+($SaleOne-$BuyOne)/3,$pricePointMax);
//            $this->price3 = round($BuyOne+($SaleOne-$BuyOne)/2,$pricePointMax);
//        }
//

        if($price<=$BuyOne || $price>=$SaleOne) {
            echo ('价格小于买一:'. $price .'|' . $BuyOne . PHP_EOL);
            echo ('价格大于卖一:'. $price .'|' . $SaleOne . PHP_EOL);
            return false;
        }
//        if($this->price1<=$BuyOne || $this->price1>=$SaleOne) $this->price1 = $this->price;
//        if($this->price2<=$BuyOne || $this->price2>=$SaleOne) $this->price2 = $this->price;
//        if($this->price3<=$BuyOne || $this->price3>=$SaleOne) $this->price3 = $this->price;

//        $numberPoint = mt_rand(0,$this->numberPoint);
//        $number1 = $this->getRandomNum($coininfo['data'][1]);
        $number = $number?$number:$this->getRandomNum($arr);
//        $number3 = $this->getRandomNum($arr);
        $trust_datas = array(//Tool_Math::format($coininfo['data'][count($coininfo['data'])-1][1],$pricePoint),
            0 => array('type'=>$type1, 'price'=>$price, 'number'=>$number, 'coin_from' => $arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
            1 => array('type'=>$type2, 'price'=>$price, 'number'=>$number, 'coin_from'=>$arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
//            2 => array('type'=>$type1, 'price'=>$this->price1, 'number'=>$number1, 'coin_from' => $arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
//            3 => array('type'=>$type2, 'price'=>$this->price1, 'number'=>$number1, 'coin_from'=>$arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
//            4 => array('type'=>$type1, 'price'=>$this->price2, 'number'=>$number2, 'coin_from' => $arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
//            5 => array('type'=>$type2, 'price'=>$this->price2, 'number'=>$number2, 'coin_from'=>$arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
//            6 => array('type'=>$type1, 'price'=>$this->price3, 'number'=>$number3, 'coin_from' => $arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
//            7 => array('type'=>$type2, 'price'=>$this->price3, 'number'=>$number3, 'coin_from'=>$arr[0],'coin_to'=>$arr[1],'trust_type'=>1),
//                2 => array('type'=>'out', 'price'=>round($price*(1+$this->rate), $pricePoint+1), 'number'=>$trust_number1, 'coin_from' => $arr[0],'coin_to'=>$arr[1], 'trust_type'=>0),
//                3 => array('type'=>'in', 'price'=>round($price*(1-$this->rate), $pricePoint+1), 'number'=>$trust_number2, 'coin_from' => $arr[0],'coin_to'=>$arr[1], 'trust_type'=>0)
        );


//        echo '买一'.$BuyOne.'卖一'.$SaleOne.PHP_EOL;
//        echo 'priceNum'.$this->priceNum.PHP_EOL;
//        echo 'priceChange'.$this->priceChange.PHP_EOL;
//        echo 'price'.$this->price.PHP_EOL;


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
            usleep(2000);//00
        }

        sleep(1);
        foreach ($tids as $v){
            $this->adminCancel($v,$arr);
        }

    }

    function count_decimals($x){
        return  strlen(substr(strrchr($x+"", "."), 1));
    }

    public function random($min, $max){
        $decimals = max($this->count_decimals($min), $this->count_decimals($max));
        $factor = pow(10, $decimals);
        return rand($min*$factor, $max*$factor) / $factor;
    }


    //获取小数位数
    private function _getFloatLength($num) {
        $count = 0;
        $temp = explode ( '.', $num );
        if (sizeof ( $temp ) > 1) {
            $decimal = end ( $temp );
            $count = strlen ( $decimal );
        }
        return $count;
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
            echo '更改用户资产失败:'. $pData['coin_from'].'_'.$pData['coin_to'] .PHP_EOL;
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
            echo '写入委托失败:'. $pData['coin_from'].'_'.$pData['coin_to'] .PHP_EOL;
            return $tMO->setError($GLOBALS['MSG']['SYS_ERROR']);
        }


        //写入队列
        $r = $tMO->pushInQueue($pData['coin_from'].'_'.$pData['coin_to'], array(
            'id'=>$tId,
        ), 'new');

        if(!$r)
        {
            echo '队列写入失败:'. $pData['coin_from'].'_'.$pData['coin_to'] .PHP_EOL;
            $tMO->back();
            return $tMO->setError($GLOBALS['MSG']['SYS_ERROR'].'[2]');
        }
        # 提交数据
        $tMO->commit();
        //echo '挂单成功:'. $pData['coin_from'].'_'.$pData['coin_to'] . "订单号:" . $tId .PHP_EOL;
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
