$(document).ready(function () {
    $('.carousel').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        sliderToShow:1,
        arrows: true,
        prevArrow: '<button type="button" class="prev"><img src="icons/arrows/arrow_left_icon.png"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/arrows/arrow_right_icon.png"></button>',
        /* responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }] */
    });

    $('.solutions__carousel').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        sliderToShow:1,
        arrows: true,
        prevArrow: '<button type="button" class="prev_slt"><img src="icons/arrows/arrow_slt_left.png"></button>',
        nextArrow: '<button type="button" class="next_slt"><img src="icons/arrows/arrow_slt_right.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }]
    });
    
});