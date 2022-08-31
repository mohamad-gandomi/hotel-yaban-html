import { Tooltip as Tooltip, Toast as Toast, Popover as Popover, Carousel } from 'bootstrap';
import "./import-jquery.js"
import slick from 'slick-carousel';

$(function() {

    $('.slider-for').slick({
        rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow"><i class="icon-arrow_forward_ios text-light"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow"><i class="icon-arrow_back_ios text-light"></i></button>',
        asNavFor: '.slider-nav',
        adaptiveHeight: true
    });

    $('.slider-nav').slick({
        rtl: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-for',
        focusOnSelect: true,
    });

})