<?php
class Tool_Secret
{
    public static $key = "sada^&NMBVfas$9323";

    public static function encrypt($name){
        $username = $name >> 5;
        $SecretKey = md5(md5(sha1(time() . md5($username) . base64_encode(self::$key))));
        return $SecretKey;
    }
}
