$(function () { /// jQB //////////////////
    

    $("#gnb a,.bnav a").click(function (e) {

        e.preventDefault(); //a이동막기!

        // 1.클릭된 순번 알아내기(클릭된 a의 부모 li순번)
        // 알아낸 순번을 전역 페이지번호(pno)에 넣기!
        pno = $(this).parent().index();

        // 만약 #gnb a이면 1을 더함(배너메뉴가 없으므로!)
        let isGNB = $(this).parent().parent().is("ul#gnb");
        // parent()를 두번쓴것은 li위에 ul인지 ol인지로 올라가서
        // is() 메서드로 이것이 ul#gnb 인것을 확인한다!
        // 이것이 맞으면 true가 리턴된다!
        //console.log("부모가#gnb인가?"+isGNB);

        if (isGNB) pno; //1을 더함!

        //console.log("클릭순번:" + pno);


        // 2.기존 위치값 읽어오기 변경!!!!
        // 전체윈도우 높이값(winH)에 페이지번호를 곱한다!
        let pgpos = winH * pno;

        // 3. 스크롤 애니메이션으로 페이지이동하기
        // scrollTop 속성은 세로 스크롤위치값(제이쿼리용!)
        // 스크롤 이동대상: html,body 
        // (범용선택요소: 즉, 여러브라우저에서 공통사용됨!)
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 1200, "easeInOutQuint", pageAction);
        ///// animate /////
        // 맨 끝에 콜백함수로 페이지액션함수를 호출한다!
        // stop()을 사용하여 여러개를 클릭했을때 마지막 선택
        // 만 남아서 처리되도록 중간에 쌓인 애니메이션 지움!

        // 4. GNB메뉴의 a요소 클릭했을때 클릭된
        // a요소의 li에 class를 "on"으로 넣으면
        // 이미 셋팅된 CSS의 디자인이 적용되어
        // 라임색 윗줄의 크기가 조금 커진 디자인이
        // 적용되어 마우스 오버시와 동일 디자인이 유지된다
        // 이것을 하는 이유는 현재 페이지가 무엇인지
        // 표시하기 위함이다!

        // 두개의 네비게이션을 동시에 변경하기

        // GNB네비게이션 클래스 넣기
        if (pno === 0) { //첫번째 메뉴 이므로 모든 class="on"지우기
            $("#gnb li").removeClass("on");
        } ///// if /////////////////////////
        else { //해당순번보다 1작게 해야 3개의 gnb중에서 매칭됨!
            $("#gnb li").eq(pno).addClass("on")
                .siblings().removeClass("on");
        } ////// else ////////////////////////

        // 블릿네비게이션 클래스 넣기
        $(".bnav li").eq(pno).addClass("on")
            .siblings().removeClass("on");

    }); ///////// click ///////////////////

    $("#gnb1").click(
        function () {
            location.href = 'window.open().00.HRportfolio/1stPF/1stMain.html';

        }); ///// click ///////////

    $("#gnb2").click(
        function () {
            location.href = 'window.open().00.HRportfolio/2ndPF/2ndMain.html';

        }); ///// click ///////////

    $("#gnb3").click(
        function () {
            location.href = 'window.open().00.HRportfolio/3rdPF/3rdMain.html';

        }); ///// click ///////////


    $("#gnb4").click(
        function () {
            location.href = 'window.open().00.HRportfolio/4thPF/4stMain.html';

        }); ///// click ///////////







}); // ready end
