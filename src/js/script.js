$(document).ready(function () {
    $('.carousel').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        sliderToShow:1,
        arrows: false
        /* prevArrow: '<button type="button" class="prev"><img src="images/img/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="next"><img src="images/img/right_arrow.png"></button>', */
        /* responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }] */
    });
});