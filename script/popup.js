$(function(){
    $(".pop1").click(function(){
        $(".big1").show();//.fadeIn(); 서서히 나타남.
        $(".big2,.big3,.big4").hide();//.fadeOut(); 서서히 사라짐.
    });
    $(".pop2").click(function(){
        $(".big2").show();//.fadeIn(); 서서히 나타남.
        $(".big1,.big3,.big4").hide();//.fadeOut(); 서서히 사라짐.
    });
    $(".pop3").click(function(){
        $(".big3").show();//.fadeIn(); 서서히 나타남.
        $(".big1,.big2,.big4").hide();//.fadeOut(); 서서히 사라짐.
    });
    $(".pop4").click(function(){
        $(".big4").show();//.fadeIn(); 서서히 나타남.
        $(".big2,.big3,.big1").hide();//.fadeOut(); 서서히 사라짐.
    });
  
});
