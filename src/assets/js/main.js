import { Tooltip as Tooltip, Toast as Toast, Popover as Popover, Carousel } from 'bootstrap';
import $ from 'jquery';
import slick from 'slick-carousel';

$(document).ready(function(){

    // $('.slider').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     rtl: true,
    //     nextArrow: '.next_caro',
    //     prevArrow: '.previous_caro',
    // });

    $('.slider').each(function(key, item) {

        var sliderIdName = 'slider' + key;
        var sliderNextBtnIdName = 'next_caro' + key;
        var sliderPrevBtnIdName = 'previous_caro' + key;

        this.id = sliderIdName;
        $(this).parent().find('.next_caro').attr( "id", sliderNextBtnIdName );
        $(this).parent().find('.previous_caro').attr( "id", sliderPrevBtnIdName );

        var sliderId =  '#' + sliderIdName;
        var sliderNextBtnId = '#' + sliderNextBtnIdName;
        var sliderPrevBtnId = '#' + sliderPrevBtnIdName;

        $(sliderId).slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            rtl: true,
            nextArrow: sliderNextBtnId,
            prevArrow: sliderPrevBtnId,

            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                    }
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '50px',
                  }
                },
            ]

        });

    });
})