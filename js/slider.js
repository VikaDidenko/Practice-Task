$(document).ready(function() {
    $('.slider__container').slick({
        dots: false,
        autoplay: false,
        infinite: true
    });
});

$(document).ready(function() {
    $('.footer__slider').slick({
        dots: false,
        autoplay: false,
        prevArrow: '<i class="fas fa-angle-left footer__navLeft"></i>',
        nextArrow: '<i class="fas fa-angle-right footer__navRight"></i>',
        infinite: true
    });
});
$(document).ready(function() {
    $('.Slides')
        .jcarousel({
            items: '.Slide',
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 2000,
            target: '+=1',
            autostart: true
        });
});