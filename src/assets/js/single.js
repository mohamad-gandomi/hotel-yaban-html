import { createPopper } from '@popperjs/core';
import * as bootstrap from 'bootstrap';
import "./import-jquery.js"
import slick from 'slick-carousel';
import { Fancybox } from "@fancyapps/ui";

$(function() {

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    $('.slider-for').slick({
        rtl: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow"><i class="icon-arrow_forward_ios text-light"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow"><i class="icon-arrow_back_ios text-light"></i></button>',
        asNavFor: '.slider-nav',
        adaptiveHeight: true,
    });

    $('.slider-nav').slick({
        rtl: true,
        infinite: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                arrows: false,
                slidesToShow: 10
              }
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                slidesToShow: 5
              }
            }
        ]
    
    });

})