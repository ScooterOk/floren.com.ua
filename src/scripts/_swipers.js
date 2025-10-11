import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const config = {
  'hero-swiper': {
    modules: [Pagination, Navigation, Autoplay],
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '[data-swiper="hero-swiper"] .swiper-button--next',
      prevEl: '[data-swiper="hero-swiper"] .swiper-button--prev',
    },
  },
  'services-swiper': {
    modules: [Navigation],
    spaceBetween: 24,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.services-swiper .swiper-button--next',
      prevEl: '.services-swiper .swiper-button--prev',
    },
  },
  'works-swiper': {
    modules: [Navigation],
    spaceBetween: 24,
    slidesPerView: 5,
    loop: true,
    navigation: {
      nextEl: '.works-swiper .swiper-button--next',
      prevEl: '.works-swiper .swiper-button--prev',
    },
  },
};

export const initSwipers = () => {
  const targets = document.querySelectorAll('[data-swiper]');
  targets.forEach((el) => {
    const swiperType = el.dataset.swiper;
    const swiperConfig = config[swiperType];

    if (!swiperConfig) {
      console.warn(`Swiper config not found for element:`, el);
      return;
    }
    new Swiper(el, swiperConfig);
  });
};
