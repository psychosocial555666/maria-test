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
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +
      '<span class="circle">' +
        '<span class="circle__half circle__half_left"></span>' +
        '<span class="circle__half circle__half_right"></span>' +
      '</span>' +
    '</span>';
    },
  },
  controller: {
    control: swiper2,
  },
  allowTouchMove: false,
});

let body = document.querySelector('body');
let menu = body.querySelector('.main-menu');
let menuHeight = menu.offsetHeight;

let searchButton = menu.querySelector('.user-menu__search');
let toggleButton = menu.querySelector('.contacts__toggler');


toggleButton.addEventListener('click', () => {
  body.classList.toggle('scroll-block');
  menu.classList.toggle('main-menu--burger-opened');
});

searchButton.addEventListener('click', () => {
  body.classList.toggle('scroll-block');
  menu.classList.toggle('main-menu--searching');
});

window.addEventListener('scroll', function() {

  let feedback = body.querySelector('.feedback');
  if(pageYOffset >= menuHeight) {
    menu.classList.add('main-menu--fixed');
    menu.classList.add('main-menu--fadein');
    feedback.style.marginBottom = menuHeight + 'px';
  } else {
    menu.classList.remove('main-menu--fixed');
    menu.classList.remove('main-menu--fadein');
    feedback.style.marginBottom = '0px';
  };
});
