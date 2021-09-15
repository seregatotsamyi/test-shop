$(function(){
  $('.header__slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $(".input-tel").mask("+9 (999) 99-99-999");
});