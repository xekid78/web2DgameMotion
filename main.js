(function($){
  'use strict';

  $(document).ready(function(){

    var girl = $("#girl");
    var flg = false;

    $("#magic1").click(function(){
      motion(1);
    });

    $("#magic2").click(function(){
      motion(2);
    });

    $("#magic3").click(function(){
      motion(3);
    });

    $("#magic4").click(function(){
      motion(4);
    });

    function motion( num ){
      var class_name;
      if( flg === false ) {
        class_name = "girl_magic" + num;
        flg = true;
        girl.addClass( class_name );
        setTimeout( function(){
          girl.removeClass( class_name );
          flg = false;
        }, 1000);
      }
    }

  });

})(jQuery);
