$(document).ready(function () {



    $('nav a').smoothScroll({
        speed: 1500,
        easing: 'swing'
    });

    // start of click transition for navicon
    
    
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


});