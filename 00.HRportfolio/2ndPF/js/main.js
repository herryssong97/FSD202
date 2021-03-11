$(document).ready(function(){
    
    $("header nav ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().show();
    },function(){
        $(this).find("ul.sub").stop().hide();        
    }); //////// 메인메뉴바 클릭시 하단에 메뉴 바 펼쳐지게
    
    
    
    $("header nav ul.gnb li.ssub>a").click(function(e){
        e.preventDefault();
        $(this).next().find("li").toggle();
        
    }); /////// kr클릭시 중국어 튀어나오게 ?? 왜 안되지
    
    
    
   /* $("header .ssub>li>a").click(function(){
        $(".sub>li>a").toggle();
    });*/ ///// kr클릭시 중국어 튀어나오게 ?? 왜 안되지
    
    
    
    $(".ham img").click(function(){
        $("#mob").stop().show();
    }); ////// click ////////////////
    
    
    $("#mob .mxlogo").click(function(){
        $("#mob").stop().hide();
    });
    
    
}); // ready end