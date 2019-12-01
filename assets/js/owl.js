jQuery(document).ready(function ($) {
    "use strict";
    var slider1 = function () {
        $('.cust-owl').owlCarousel({
            margin: 10,
            loop: true,
            dots: false,
            items: 1,
            margin: 0,
            smartSpeed: 450,
            stagePadding: 0,
            singleItem: true,
            autoplay: true,
            nav: false
        })
    };
    slider1();
});
