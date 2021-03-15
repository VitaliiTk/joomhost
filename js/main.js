$(function(){
    $('.reviews-slider').slick({
        // setting-name: setting-value
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
      });

      $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
      });
});