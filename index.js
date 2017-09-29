$(document).ready(function(){

    //smooth scrolling
    $('a[href*="#"]').on('click', function(event) {

        // turns off default browser behaviour so you can override w/ smoothscroll
        event.preventDefault();
        $(document).off('scroll');

        // // handle active menu item
        // $('a[href*="#"]').each(function() {
        //     $(this).removeClass('active');
        // });
        // $(this).addClass('active');

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    });

    // --hide nav on scroll down, show on scroll up--
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var topbarHeight = $('.topBar').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });
    
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > topbarHeight) {
            $('.topBar').removeClass('navShow').addClass('navHide');
        } else if (st < lastScrollTop) {
                $('.topBar').removeClass('navHide').addClass('navShow');
            }

        lastScrollTop = st;
    }
});
