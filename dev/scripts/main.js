$(document).ready(function () {



    $('nav a').smoothScroll({
        speed: 1500,
        easing: 'swing'
    });

    // start of click transition for navicon
    
    
    function mediaSize() {
        if (window.matchMedia('(max-width: 940px)').matches) {
            $('nav').addClass('mobile')
            
        } 
        else {
            /* Reset for CSS changes – Still need a better way to do this! */
            $('nav').removeClass('mobile');
            // $('li').removeClass('active');
            // $('nav').removeClass('dim')
        }
    };
    
    /* Call the function */
    mediaSize();
    /* Attach the function to the resize event listener */
    window.addEventListener('resize', mediaSize, false);
    
    $('.hamburger').click(function () {
        $(this).toggleClass('open');
        $('li').toggleClass('active');
        $('nav').toggleClass('dim');

    });


    $('.mobile a').click(function () {
        $('.hamburger').toggleClass('open');
        $('li').removeClass('active');
        $('nav').toggleClass('dim');

    });


});