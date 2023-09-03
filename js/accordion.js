$(document).ready(function() {
    $(".accordion-list .title").click(function() {
        var content = $(this).next(".content");
        if (content.is(":visible")) {
            $(this).parent().removeClass("active");
            content.slideUp(500);
        }
        else {
            $(this).parent().siblings().removeClass("active");
            $(this).parent().siblings().children(".content").slideUp(500);
            content.slideDown(500);
            $(this).parent().addClass("active");
        }
      });
});