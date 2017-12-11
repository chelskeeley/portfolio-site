import $ from "jquery";
import { smoothScroll } from "jquery-smooth-scroll";
import { WOW } from "wowjs";


$(document).ready(function () {

    //smooth scroll on nav
    $('nav a').smoothScroll({
        speed: 1500,
        easing: 'swing'
    });
    
    // start of mobile nav functionality
    function mediaSize() {
        if (window.matchMedia('(max-width: 940px)').matches) {
            $('a').addClass('mobile')
            
        } 
        else {
            /* Reset for CSS changes – Still need a better way to do this! */
            $('a').removeClass('mobile');
            // $('li').removeClass('active');
            // $('nav').removeClass('dim')
        }
    };
    
    /* Attach the function to the resize event listener */
    window.addEventListener('resize', mediaSize, false);
    /* Call the function */
    mediaSize();

    $('.hamburger').click(function () {
        $(this).toggleClass('open');
        $('li').toggleClass('active');
        $('nav').toggleClass('dim');

    });

    $('nav li').on('click', '.mobile',function () {
        $('.hamburger').removeClass('open');
        $('li').removeClass('active');
        $('nav').removeClass('dim');
    });
    //end of mobile nav functionality

    new WOW().init();
});







// $(document).ready(function () {

//     window.addEventListener('resize', mediaSize, false);
//     mediaSize();
    

//     $('nav a').smoothScroll({
//         speed: 1500,
//         easing: 'swing'
//     });

//     // start of click transition for navicon
    
    
//     function mediaSize() {
//         // console.log('should fire on resize');
//         console.log(window.matchMedia('(max-width: 940px)').matches);
//         if (window.matchMedia('(max-width: 940px)').matches) {
//             console.log('smaller than 940px')
//             $('nav a').addClass('mobile');

//             $('.mobile').click(function () {
//                 console.log('IT WORKS!!!');
//                 if ($('.hamburger').hasClass('open')) {
//                     $('.hamburger').removeClass('open');
//                     // $('li').toggleClass('active');
//                     // $('nav').toggleClass('dim');
//                 } 
//                 // else {
//                 //     $('.hamburger').addClass('open');
//                 // }

//                 $('li').toggleClass('active');
//                 $('nav').toggleClass('dim');

//             });

//             $('.hamburger').click(function () {
//                 console.log('listening');
//                 // $('.hamburger').toggleClass('open');
//                 if ($('.hamburger').hasClass('open')) {
//                     $('.hamburger').removeClass('open');
//                     // $('li').removeClass('active');
//                     // $('nav').removeClass('dim');
//                 } else {
//                     $('.hamburger').addClass('open');
//                     // $('li').addClass('active');
//                     // $('nav').addClass('dim');
//                 }
//                 $('li').toggleClass('active');
//                 $('nav').toggleClass('dim');

//             });
//         } 
//         else {
//             /* Reset for CSS changes – Still need a better way to do this! */
//             $('nav a').removeClass('mobile');
//             $('.hamburger').removeClass('open');
//             $('li').removeClass('active');
//             $('nav').removeClass('dim');
//             console.log('should be removed');

//         }
//     };
    
//     /* Attach the function to the resize event listener */
//     // window.addEventListener('resize', mediaSize, false);
//     /* Call the function */
//     // mediaSize();
    




// });