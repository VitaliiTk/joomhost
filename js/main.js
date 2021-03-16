$(function () {
  $('.reviews-slider').slick({
    // setting-name: setting-value
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1106,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.btn__menu').on('click', function () {
    $('.menu__list').slideToggle();
  });
});