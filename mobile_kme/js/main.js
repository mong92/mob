$(function(){
    $(".hm img").click(function(){
    $(".ham_menu").animate({marginLeft:"75%"},300);
    });

    $(".menu > li > a").click(function(){
        if($(this).next().is(":visible")) // this.next() => ul , visible: 보이는지 유무
        {
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","img/icon/arrow_down_icon.png");
        }else{
            $(".sub").stop().slideUp(500);
            $(".ham_menu ul.menu > li > a").children("img").attr("src","img/icon/arrow_down_icon.png");
            $(this).next().stop().slideDown(500);
            $(this).children("img").attr("src","img/icon/arrow_up_icon.png");
            //보이지 않으면 else로 간다
            //모든 sub 올려주고
            //모든 sub 이미지 원래상태로 주고
            //선택된 애만 실행해라

        };
    });

    $(".cross").click(function(){
        $(".ham_menu").animate({marginLeft:"0px"},300);
    });




$("#roll a").click(function() {
    const strName=$(this).attr("id");
    slideTarget(strName.substr(3,1));
    return false;
 });
 function  slideTarget(n){
  let pos = Number( n ) * - 100+'%';
  $("#slide ul").animate({left:pos},500,
  function(){
    $("#roll a").removeClass("on");
           $("#roll a").eq(n).addClass("on");
  });
};
let btnNum=0;
setInterval(function(){ 
btnNum++;
    if(btnNum>=3) btnNum=0;
            $("#roll a").eq(btnNum).trigger("click")
},3000);




});