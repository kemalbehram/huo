<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 2018/12/27
 * Time: 10:48
 */

class OutController extends Ctrl_Base
{
    protected $_auth = 0;

    public function init(){

        //连接数据库
//        $this->fei = new Orm_Base(0, 'huo');
//
//        $this->mo = new Orm_Base();
    }

    public function indexAction()
    {
        $str = 't5c3IA6eVe894K2L0NwZTl0/lHQ3VkGVg6YBM/zMd2nu3BtwfRY8wTQElqCU6391+MG3OEIW3VYWv3vJjA';
        echo Tool_Wallet::encrypt($str,'D',Tool_Wallet::key());die;

        list($a,$b) = explode('_','1_2');

        echo $a.'++++'.$b;die;




        for ($i=0;$i<$this->cou($arr);$i++){

            echo $arr[$i];
        }

        die;






        //查找素数

        $count = 0;
        for ($i=2;$i<10000;$i++){
            $v=2;
            do{
                if($i==2) echo $i."\n";
                if($i%$v==0) break;
                if($v==$i-1 || $i==2){
                    $count++;
                    echo $i."\n";
                }
                $v++;
            }while($i>$v);
        }

        echo "总数:".$count;


        die;




        $expireTime = mktime(23, 59, 59, date("m"), date("d"), date("Y"));

        echo date('Y-m-d H:i:s',$expireTime);die;
        echo $expireTime;die;
        die;
    }

    public function cou($arr){
        echo '0+'.PHP_EOL;
        return count($arr);
    }
}