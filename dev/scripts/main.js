import $ from "jquery";
import { smoothScroll } from "jquery-smooth-scroll";
import { WOW } from "wowjs";

let chelsea = {}; 

// $(document).ready(function ()

chelsea.effects = () => {

    // smooth scroll on nav
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

    //initialize wow.js effects
    new WOW().init();

    //clear form on submit
    $('form').on('submit', ()=>{
        $('input[type=text]').empty()
        $('input[type=email]').empty()
    });

    

    //put ids on sections that we are scrolling
    // CHANGE SIDEBAR LOCATION INDICATOR
    chelsea.scrolling = function () {

        // GET PAGE LOCATION
        $(window).scroll(function () {
            let location = $(this).scrollTop();

            // GET SECTION AT LOCATION
            $('section').each(function () {
                let target = $(this).offset().top;
                let targetID = $(this).attr('id');

                // UPDATE CURRENT LOCATION
                if (location >= target) {
                    $('.nav__menu--active').removeClass('nav__menu--active');
                    $(`#${targetID}--active`).addClass('nav__menu--active');
                } else if ((target - location) <=200){
                    $('.nav__menu--active').removeClass('nav__menu--active');
                    $(`#${targetID}--active`).addClass('nav__menu--active');
                } else if (location === 0){
                    $('.nav__menu--active').removeClass('nav__menu--active');
                    $(`#home--active`).addClass('nav__menu--active');
                }
            });
        });
    };
    chelsea.scrolling();


    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });
};

chelsea.init = () => {
    chelsea.effects();
}

$(document).ready(function () {
    chelsea.init();
});