$(window).scroll(function() {
    if ($(document).scrollTop() > 780) {
        $('.nav').addClass('nav-bar');
    } else {
        $('.nav').removeClass('nav-bar');
    }
});