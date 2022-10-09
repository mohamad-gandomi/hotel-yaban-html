import { createPopper } from '@popperjs/core';
import * as bootstrap from 'bootstrap';
import "./import-jquery.js"
import jqueryui from 'jquery-ui';
import 'jquery-ui/ui/widgets/mouse';
import 'jquery-ui-touch-punch';
import 'jquery-ui/ui/widgets/slider';
import slick from 'slick-carousel';
import { Fancybox } from "@fancyapps/ui";


$(function() {

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    $('.item-range-slider').each(function(key, item){

      var inputRangeSlider = $(this).parent().find('.input-range-slider')
      var textRangeSlider  = $(this).parent().find('.text-range-slider')

      $(this).slider({
        value:0,
        range: "min",
        min: 0,
        max: 10,
        step: 0.1,
        orientation: "horizontal",
        slide: function( event, ui ) {
          inputRangeSlider.val(ui.value );
          textRangeSlider.html(ui.value)
        }
      });

      inputRangeSlider.val($(this).slider( "value" ) );
      textRangeSlider.html($(this).slider( "value" ));

    });



    $('.slider-for').slick({
        rtl: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow d-flex align-items-center justify-content-center"><i class="icon-chevron-right text-light fs-4"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow d-flex align-items-center justify-content-center"><i class="icon-chevron-left text-light fs-4"></i></button>',
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
              slidesToShow: 8
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 7
            }
          },
          {
            breakpoint: 510,
            settings: {
              arrows: false,
              slidesToShow: 5
            }
          },
          {
            breakpoint: 380,
            settings: {
              arrows: false,
              slidesToShow: 4
            }
          }
        ]
    });

})