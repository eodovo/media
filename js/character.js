$(document).ready(function () {

    var screenSize = $(window).width();
    var screenHeight = $(window).height();

    $("#content").css('margin-top', screenHeight);



    if (screenSize > 768) {
        $('.videoBox img').attr('src', './images/character/main.png');
    }
    if (screenSize <= 768) {
        $('.videoBox img').attr('src', './images/character/mobile_back.png');
    }

    $(window).resize(function () {
        screenSize = $(window).width();
        screenHeight = $(window).height();

        $("#content").css('margin-top', screenHeight);

        if (screenSize > 768) {
            $('.videoBox img').attr('src', './images/character/main.png');
        }
        if (screenSize <= 768) {
            $('.videoBox img').attr('src', './images/character/mobile_back.png');
        }
    })
    // JavaScript Document


    var cnt = 4;  //탭메뉴 개수 ***
    $('#content .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    // $('.tabs .tab1').css('background', 'green').css('color', '#333'); //첫번째 탭메뉴 활성화
    //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

    $('.tabs .tab').click(function (e) {
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

        var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
        $(".tabs .contlist:eq(" + ind + ")").fadeIn(); //클릭한 해당 탭내용만 보여라
    });
    $(window).on('scroll', function () { //스크롤 값의 변화가 생기면
        let mainScroll = $(window).scrollTop(); //스크롤의 거리
        // let mainScrollGap = $(window).height() / 2;
        let mainScrollGap = $(window).height() - 600;


        let character = $('.contlist').offset().top - mainScrollGap;
        if (mainScroll > character) {
            $('.contlist').addClass('active');
        } else if (mainScroll < character - 600) {
            $('.contlist').removeClass('active');
        };

        $('.openBtn').on('click', function (e) {
            e.preventDefault();

            $(this).next('.big').fadeIn('slow');
            $('.box').show();
        });

        $('.closeBtn').on('click', function (e) {
            e.preventDefault();

            $('.big').fadeOut('fast');
            $('.box').hide();
        });


    })
});