$(document).ready(function () {

    $("#main-nav").hover(function () {
        $(this).addClass("b-g-color");
    }, function () {
        $(this).removeClass("b-g-color");
    });
    
    $(window).scroll(function() {
        addScrolled();
    });

    function addScrolled() {
        if($(window).scrollTop() > $('#main-nav').outerHeight()) {
            $('#main-nav').addClass('b-g-color');
            } else {
                $('#main-nav').removeClass('b-g-color');
            }
    }
})




//
//    $("#main-nav").hover(function () {
//        $(this).css("background-color", "#0ed8d6");
//    }, function () {
//        $(this).css("background-color", " ");
//    });
