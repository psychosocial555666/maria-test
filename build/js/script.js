'use strict';
const swiper = new Swiper('.slider__small', {
  loop: true,
  speed: 400,
  spaceBetween: 1,
  slidesPerView: 1,
  allowTouchMove: false,
});

const swiper2 = new Swiper('.slider__offer', {
  loop: true,
  speed: 400,
  effect: 'fade',
  controller: {
    control: swiper,
  },
  allowTouchMove: false,
});

const swiper3 = new Swiper('.slider__big', {
  loop: true,
  spaceBetween: 1,
  speed: 400,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  controller: {
    control: swiper2,
  },
  allowTouchMove: false,
});


