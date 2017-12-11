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

    $('.mobile').click(function () {
        $('.hamburger').removeClass('open');
        $('li').removeClass('active');
        $('nav').removeClass('dim');
    });
    //end of mobile nav functionality

    //start of wow.js effects
    // var wow = new WOW(
    //     {
    //         boxClass: 'wow',      // animated element css class (default is wow)
    //         animateClass: 'fadeInUp', // animation css class (default is animated)
    //         offset: 0,          // distance to the element when triggering the animation (default is 0)
    //         mobile: true,       // trigger animations on mobile devices (default is true)
    //         live: true,       // act on asynchronously loaded content (default is true)
    //         callback: function (box) {
    //             // the callback is fired every time an animation is started
    //             // the argument that is passed in is the DOM node being animated
    //         },
    //         scrollContainer: null,    // optional scroll container selector, otherwise use window,
    //         resetAnimation: true,     // reset animation on end (default is true)
    //     }
    // );
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