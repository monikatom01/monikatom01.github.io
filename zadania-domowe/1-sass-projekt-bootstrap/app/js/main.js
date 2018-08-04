$(document).ready(function () {
    addScrolled();
});

$(window).scroll(function () {
    addScrolled();
});

function addScrolled() {
    if ($(window).scrollTop() > $('#main-nav').outerHeight()) {
        $('#main-nav').addClass('change-color');
    } else {
        $('#main-nav').removeClass('change-color');
    }
}

$("#main-nav").mouseenter(function() {
    $('#main-nav').addClass('change-color');
});

$("#main-nav").mouseleave(function() {
    $('#main-nav').removeClass('change-color');
});