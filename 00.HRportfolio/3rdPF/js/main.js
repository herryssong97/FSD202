$(document).ready(function(){
    
    $("header nav ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().show();
    },function(){
        $(this).find("ul.sub").stop().hide();        
    }); //////// 메인메뉴바 클릭시 하단에 메뉴 바 펼쳐지게
    
    
    
    
    $("header nav ul.gnb li.ssub").click(function(){
        $(this).find("ul.sub").show;
    },function(){
        $(this).find("ul.sub").hide;
    }); /////// kr클릭시 중국어 튀어나오게 ?? 왜 안되지
    
    
    
}); // ready end