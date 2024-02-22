$(function(){
    function modalOn(){
        $(".modal_back").addClass("back_on");
        // $("body").addClass("body_lock"); // body 스크롤 안됨  주석풀면 스크롤되지않고 잠금
    }
    
    function modalOff(){
        $(".modal_back").removeClass("back_on");
        // $("body").removeClass("body_lock"); // body 스크롤 안됨 주석풀면 스크롤되지않고 잠금
    }

    $(".hamburger").click(function(){
        modalOn();
    });

    $(".cross").click(function(){
        modalOff();
    });
});