$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navbar").addClass("navactive");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navbar").removeClass("navactive");
        }
    });
});
