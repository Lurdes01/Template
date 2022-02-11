$(function() {

    /*Fixed Header*/

    let header = $("#header");
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, headerH);

    $(window).on("scroll resize", function() {
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, headerH);
    });

    function checkScroll(scrollPos, headerH) {
        if( scrollPos > headerH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth Scroll*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
    
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
    
        nav.removeClass("show");
    
        $("html, body").animate({
            scrollTop:  elementOffset - 100
        }, 700);
    });

    /*Nav Toggle*/

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});