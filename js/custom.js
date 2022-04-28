jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 100) {
        jQuery(".header-main").addClass("darkHeader"); 
        jQuery(".logo").addClass("hide")
        jQuery(".logo-2").removeClass("hide-2")
    } else {    
        jQuery(".header-main").removeClass("darkHeader");
        jQuery(".logo").removeClass("hide")
        jQuery(".logo-2").addClass("hide-2")
    }
});

