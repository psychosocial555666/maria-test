'use strict';

(function () {
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
})();

(function () {
  let body = document.querySelector('body');
  let menu = body.querySelector('.main-menu');
  let feedback = body.querySelector('.feedback');
  let mainMenu = menu.querySelector('.main-menu__content');
  let menuHeight = menu.offsetHeight;

  let searchButton = menu.querySelector('.user-menu__search');
  let toggleButton = body.querySelector('.contacts__toggler');

  const blockScroll = () => {
    if(menu.classList.contains('main-menu--burger-opened') || menu.classList.contains('main-menu--searching')) {
      body.classList.add('scroll-block');
    } else {
      body.classList.remove('scroll-block');
    }
  }
  const onBurgerButtonClick = () => {
    menu.classList.toggle('main-menu--burger-opened');

    if (menu.classList.contains('main-menu--burger-opened')) {
      feedback.style.marginBottom = menuHeight + 'px';
    } else {
      feedback.style.marginBottom = '0px';
    }

    blockScroll();
  };

  const onSearchButtonClick = () => {
    let siteMenu = menu.querySelector('.main-menu__site-menu');
    let searchElem = menu.querySelector('.search');
    menu.classList.toggle('main-menu--searching');

    if (menu.classList.contains('main-menu--fixed')) {
      searchElem.classList.add('search--with-fixed');
    } else {
      searchElem.classList.remove('search--with-fixed');
    }

    if (menu.classList.contains('main-menu--burger-opened')) {
      searchElem.classList.add('search--with-burger');
    } else {
      searchElem.classList.remove('search--with-burger');
    }

    blockScroll();
  };

  const onWindowScroll = () => {
    let feedback = body.querySelector('.feedback');
    if (pageYOffset >= menuHeight) {
      menu.classList.add('main-menu--fixed');
      menu.classList.add('main-menu--fadein');
      feedback.style.marginBottom = menuHeight + 'px';
    } else {
      menu.classList.remove('main-menu--fixed');
      menu.classList.remove('main-menu--fadein');
      feedback.style.marginBottom = '0px';
    };
  }

  toggleButton.addEventListener('click', onBurgerButtonClick);

  searchButton.addEventListener('click', onSearchButtonClick);

  window.addEventListener('scroll', onWindowScroll);
})();
