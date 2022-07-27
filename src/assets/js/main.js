import { Tooltip as Tooltip, Toast as Toast, Popover as Popover, Carousel } from 'bootstrap';
import "./import-jquery.js"
import jqueryui from 'jquery-ui';
import slick from 'slick-carousel';
import 'jquery-ui/ui/widgets/mouse';
import 'jquery-ui-touch-punch';
import 'jquery-ui/ui/widgets/slider';

$(function() {

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
  
  $('.range-slider').each(function(key, item){

    var min = parseInt($(this).data('min'));
    var max = parseInt($(this).data('max'));
    var from = $(this).parent().find( ".range-from" );
    var to = $(this).parent().find( ".range-to" );

    $(this).slider ({
      range: true,
      min: min,
      max: max,
      values: [ min, max ],
      slide: function(event, ui) {
        from.val( ui.values[ 0 ].toLocaleString() );
        to.val( ui.values[ 1 ].toLocaleString() );
      }
    })

    from.val( $(this).slider( "values", 0 ).toLocaleString() );
    to.val( $(this).slider( "values", 1 ).toLocaleString() );

  });


  
  $(".filter").on('keyup', function(){ 
 
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val()

    // Loop through the comment list
    $(".facilities-list div label").each(function(){

        // If the list item does not contain the text phrase fade it out
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).parent().addClass('d-none');

        // Show the list item if the phrase matches and increase the count by 1
        } else {
            $(this).parent().removeClass('d-none');
        }
    });

  });

})