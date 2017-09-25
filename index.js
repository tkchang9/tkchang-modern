$(document).ready(function(){

    //smooth scrolling
    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        $(document).off('scroll');

        $('a').each(function() {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
                window.location.hash = hash;
            }
        );    
    });
});
