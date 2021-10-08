<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 2019/3/22
 * Time: 16:00
 */

class DayBeforeCountModel extends Orm_Base
{
    public $table = 'day_before_count';
    public $pk = 'id';

    public function getDayCount($coin){

        return $this->where("coin='{$coin}'")->fRow();
    }
}