// main.js
'use strict';

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

$(document).ready(function(){
    $('.inner_header ul .header_c').hover(function(){
        $('.inner_header ul .header_c').css('opacity','0')
        $('.inner_header .show').addClass('active');
    }, function(){
        $('.inner_header ul .header_c').css('opacity','1')
        $('.inner_header .show').removeClass('active')
    })
})