$('.nav-btn').on('click', function(e) {
    $(this).toggleClass("on");
    e.preventDefault();
    $('.nav').toggleClass('overlay');
    $('body').toggleClass('locked');
    $('.offer').toggleClass('block');
    $('.nav').toggleClass('enable');
})