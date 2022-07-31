import { Tooltip as Tooltip, Toast as Toast, Popover as Popover, Carousel } from 'bootstrap';
import "./import-jquery.js"

$(function() {

    $('.collapse').each(function(){

        var id = $(this).attr('id');
        var icon = $(`li[data-bs-target="#${id}"]`).find('i');

        $(this).on('show.bs.collapse', function () {
            icon.removeClass('icon-add').addClass('icon-remove');
            icon.removeClass('bg-primary-color').addClass('bg-accent-color');
        })
    
        $(this).on('hide.bs.collapse', function () {
            icon.removeClass('icon-remove').addClass('icon-add');
            icon.removeClass('bg-accent-color').addClass('bg-primary-color');
        })

    })
    


})