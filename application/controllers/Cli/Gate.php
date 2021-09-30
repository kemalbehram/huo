<?php

class Cli_GateController extends Ctrl_Cli
{

    public function runAction(){

        $i = 0;
        while (true){
            $data = Tool_Gate::get_candlestick2('btc_usdt', 60*5,24);

            if(!isset($data['result']) || $data['result']!=true){
                echo "获取失败...".PHP_EOL;
                sleep(20);
                continue;
            }

            $volume = 0;
            foreach ($data['data'] as $k=>$v){
//                $volumes[$k] = $v[1];
                $volume += $v[1];
                $data['data'][$k][0] = date('m月d日 H:i',$data['data'][$k][0]/1000);
            }

            $count = count($data['data']);
            $avgVolume = $volume/$count;

            if($data['data'][$count-1][1]>$avgVolume*5){

                $msg = '【火网】'."交易量数据暴涨5倍，平均成交量:$avgVolume ，最近一次成交量:".$data['data'][$count-1][1].','.date('m-d H:i:s');
                $returnMsg = Tool_SmsMeilian::sendSMS('+8618566771810',$msg);
                if(strpos($returnMsg,"success")>-1) {
                    echo '发送成功'.PHP_EOL;
                }else{
                    echo '发送失败'.PHP_EOL;
                }

                echo "平均成交量:$avgVolume".PHP_EOL;
                echo "最近一次成交量:".$data['data'][$count-1][1].PHP_EOL;
            }


            $msg = '【火网】'."交易量数据暴涨5倍，平均成交量:$avgVolume ，最近一次成交量:".$data['data'][$count-1][1].','.date('m-d H:i:s');
            $returnMsg = Tool_SmsMeilian::sendSMS('+8618566771810',$msg);
            if(strpos($returnMsg,"success")>-1) {
                echo '发送成功'.PHP_EOL;
            }else{
                var_dump($returnMsg);
                echo '发送失败'.PHP_EOL;
            }

            echo $i.PHP_EOL;
            sleep(20);

            $i++;
        }






//
//        $volume = 0;
////    $close = 0;
////    $high = 0;
////    $low = 0;
////    $open = 0;
//
//        foreach ($data['data'] as $k=>$v){
//            $volumes[$k] = $v[1];
//            $volume += $v[1];
////        $close += $v[2];
////        $high += $v[3];
////        $low += $v[4];
////        $open += $v[5];
//            $data['data'][$k][0] = date('m月d日 H:i',$data['data'][$k][0]/1000);
//        }
//
//        array_multisort($volumes,SORT_DESC,$data['data']);
//
//        echo "<pre>";
//        print_r(array_slice($data['data'],0,5) );die;
//
//        $count = count($data['data']);
//        $avgVolume = $volume/$count;
//        $nowVolume = $data['data'][$count-1][1];
//        $avgHigh = $high/$count;
//        $avgLow = $low/$count;
//
//        echo "总交易量:$volume".PHP_EOL;
//        echo "平均交易量:$avgVolume".PHP_EOL;
//        echo "当前交易量:$nowVolume".PHP_EOL;
//
//        echo "平均最高价:$avgHigh".PHP_EOL;
//        echo "平均最低价:$avgLow".PHP_EOL;
//
//        echo "当前时间:".date('md H:i').PHP_EOL;
//        echo "最后一次时间:".date('md H:i',$data['data'][$count-1][0]/1000).PHP_EOL;
////
////
//        echo "<pre>";
//        print_r($data);die;
    }
}

