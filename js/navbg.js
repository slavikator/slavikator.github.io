$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 32) {
            $("nav").addClass("navactive");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("nav").removeClass("navactive");
        }
    });
});
