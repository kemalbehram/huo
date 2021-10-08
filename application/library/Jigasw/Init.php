<?php

class Jigasw_Init{

     CONST LINE_L = 42;
     CONST LINE_R = 9;
     CONST LINE_W = 310;
     CONST LINE_H = 155;
     CONST LINE_OL = self::LINE_L + self::LINE_R * 2 + 3;

     public static function getLeftLength(){
     return rand(self::LINE_OL + 10, self::LINE_W - (self::LINE_OL + 10));
     }

     public static function getHeightLength(){
     return rand(10 + self::LINE_R * 2, self::LINE_H - ( self::LINE_OL + 10 ));
     }

    public static function aaa(){
        return 2222;
    }

}