$(document).ready(function () {

    var screenSize = $(window).width();
    var screenHeight = $(window).height();

    $("#content").css('margin-top', screenHeight);



    if (screenSize > 768) {
        $('.videoBox img').attr('src', './images/about/main.png');
    }
    if (screenSize <= 768) {
        $('.videoBox img').attr('src', './images/about/mobile_back.png');
    }

    $(window).resize(function () {
        screenSize = $(window).width();
        screenHeight = $(window).height();

        $("#content").css('margin-top', screenHeight);

        if (screenSize > 768) {
            $('.videoBox img').attr('src', './images/about/main.png');
        }
        if (screenSize <= 768) {
            $('.videoBox img').attr('src', './images/about/mobile_back.png');
        }
    });

    $('.down').click(function () {
        screenHeight = $(window).height();
        $('html,body').animate({ 'scrollTop': screenHeight }, 1000);
    });


    var article = $('.slide .article');  //모든 질문 답변 리스트   
    $('.slide .article:first').find('.a').show();
    $('.slide .article .trigger').click(function (e) {  // 각각의 질문을 클릭하면
        e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.article'); //클릭한 해당 list 

        if (myArticle.hasClass('hide')) {   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.a').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체


            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  

            // } else {  // 'show' 답변이 열려있냐??
            //     myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            //     myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  

        }
    })

});