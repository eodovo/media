$(document).ready(function () {
    var screenSize, screenHeight;
    var current = false;

    function screen_size() {
        screenSize = $(window).width(); //스크린의 너비
        screenHeight = $(window).height();  //스크린의 높이

        $("#content").css('margin-top', screenHeight);

        if (screenSize > 640 && current == false) {
            $("#videoBG").show();
            $("#videoBG").attr('src', './images/video.mp4');
            $("#imgBG").hide();
            current = true;
        }
        if (screenSize <= 640) {
            $("#videoBG").hide();
            $("#videoBG").attr('src', '');
            $("#imgBG").show();
            current = false;
        }
    }

    screen_size();  //최초 실행시 호출

    $(window).resize(function () {    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        screen_size();
    });

    $('.down').click(function () {
        screenHeight = $(window).height();
        $('html,body').animate({ 'scrollTop': screenHeight }, 1000);
    });

    $('.topMove').hide();

    $(window).on('scroll', function () { //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리


        $('.text').text(Math.floor(scroll));
        if (scroll > 100) { //500이상의 거리가 발생되면
            $('.topMove').fadeIn('slow');  //top보여라~~~~
        } else {
            $('.topMove').fadeOut('fast');//top안보여라~~~~
        }
    });
    $('.topMove').click(function (e) {
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({ "scrollTop": 0 }, 1000);
    });

    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    $(".menu_ham").click(function (e) { //메뉴버튼 클릭시
        e.preventDefault(0)
        var documentHeight = $(document).height();
        $("#gnb").css('height', documentHeight);

        if (op == false) {
            $("#gnb").animate({ right: 0, opacity: 1 }, 'fast');
            $('#headerArea').addClass('mn_open');
            op = true;
        } else {
            $("#gnb").animate({ right: '-100%', opacity: 0 }, 'fast');
            $('#headerArea').removeClass('mn_open');
            op = false;
        }

    });


    var current = 0;
    $(window).resize(function () {    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        var screenSize = $(window).width();
        if (screenSize > 1024) {
            current = 1;
            $("#gnb").css({ right: 0, opacity: 1 });
            $(".box").hide();
        }
        if (current == 1 && screenSize < 1024) {
            $("#gnb").css({ right: '-100%', opacity: 0 });
            $(".box").hide();
            current = 0;
        }
    });
});