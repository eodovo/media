$(document).ready(function () {

    var screenSize = $(window).width();
    var screenHeight = $(window).height();

    $("#content").css('margin-top', screenHeight);



    if (screenSize > 768) {
        $('.videoBox img').attr('src', './images/content/main.png');
    }
    if (screenSize <= 768) {
        $('.videoBox img').attr('src', './images/content/mobile_back.png');
    }

    $(window).resize(function () {
        screenSize = $(window).width();
        screenHeight = $(window).height();

        $("#content").css('margin-top', screenHeight);

        if (screenSize > 768) {
            $('.videoBox img').attr('src', './images/content/main.png');
        }
        if (screenSize <= 768) {
            $('.videoBox img').attr('src', './images/content/mobile_back.png');
        }
    })


    $('#content a').on("click", function (event) {
        event.preventDefault();
    });
})

