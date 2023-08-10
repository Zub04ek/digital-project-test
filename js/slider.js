const refs = {
  prevSlickBtn: document.querySelector('.prev'),
  nextSlickBtn: document.querySelector('.next'),
};

$(document).ready(function () {
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: refs.prevSlickBtn,
    nextArrow: refs.nextSlickBtn,
  });
});
