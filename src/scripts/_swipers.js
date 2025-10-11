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
      nextEl: '.swiper-button--next',
      prevEl: '.swiper-button--prev',
    },
  },
  'services-swiper': {
    modules: [Navigation],
    spaceBetween: 24,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.swiper-button--next',
      prevEl: '.swiper-button--prev',
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
