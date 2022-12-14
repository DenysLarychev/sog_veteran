$(document).ready(function() {
    $('.header-front__button').click(function(event) {
        $('.header-front__button-burger, .main-menu, .header-front__button-burger-span').toggleClass('active');
        $('body').toggleClass('lock');
    });
});