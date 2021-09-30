<?php
/**
 * AES 加密
 */
class Tool_Lock
{

    public static function add($self,$s=5)
    {
        if(!isset($self->mCurUser['uid']) || !$self->mCurUser['uid']) Tool_Fnc::ajaxMsg('请先登录');
        $lock_key = REDIRECT_URL.'/'.$self->mCurUser['uid'];
        $redis = Cache_Redis::instance('common');

        $val = $redis->hGet('lock',$lock_key);
        if($val && time()<$val+$s){//5秒有效期
            Tool_Fnc::ajaxMsg('请勿重复操作');
        }
        $redis->hSet('lock',$lock_key,time());
    }

    public static function del($self)
    {
//	    echo REDIRECT_URL;die;
        $uid = isset($self->mCurUser['uid'])?$self->mCurUser['uid']:0;
        $lock_key = REDIRECT_URL.'/'.$uid;
        $redis = Cache_Redis::instance('common');
        $redis -> hDel('lock',$lock_key);
    }

}