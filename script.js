$(document).ready(function() {
    $('a.nav-link').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    $('form').submit(function(e) {
        e.preventDefault(); // Prevents
        alert('Booking submitted!');
    });

    $('#cardInfo').on('input', function() {
        var cardNumber = $(this).val();
        if(cardNumber.length === 16) {
            $(this).css('border-color', 'green');
        } else {
            $(this).css('border-color', 'red');
        }
    });
});
