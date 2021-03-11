$(document).ready(function () {

    $("header nav ul.gnb>li").hover(function () {
        $(this).find("ul.sub").stop().show();
    }, function () {
        $(this).find("ul.sub").stop().hide();
    }); //////// 메인메뉴바 클릭시 하단에 메뉴 바 펼쳐지게



    $("header nav ul.gnb li.ssub>a").click(function (e) {
        e.preventDefault();
        $(this).next().find("li").toggle();

    }); /////// kr클릭시 중국어 튀어나오게 ?? 왜 안되지



    /* $("header .ssub>li>a").click(function(){
         $(".sub>li>a").toggle();
     });*/ ///// kr클릭시 중국어 튀어나오게 ?? 왜 안되지



    $(".ham img").click(function () {
        $("#mob").stop().show();
    }); ////// click ////////////////


    $("#mob .mxlogo").click(function () {
        $("#mob").stop().hide();
    });


    $(".bnav li a").click(function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();
        // console.log("순번:" + idx);

        pno = idx;

        let pgpos = $(".page").eq(pno).offset().left;
        // 4. 실제 이동위치로 스크롤 애니메이션 이동하기
        $("html,body").stop().animate({
            scrollLeft: pgpos + "px"
        }, 1200, "easeInOutQuint"); /// animate ///

        // 블릿네비게이션 클래스 넣기
        $(".bnav li").eq(pno).addClass("on")
            .siblings().removeClass("on");


    }); ////////// click /////////////







}); // ready end
