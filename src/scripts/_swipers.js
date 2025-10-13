import Swiper from 'swiper';
import {
  Autoplay,
  Manipulation,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper/modules';

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
  'clients-swiper': {
    modules: [Navigation],
    spaceBetween: 0,
    slidesPerView: 5,
    loop: true,
    navigation: {
      nextEl: '.clients-swiper .swiper-button--next',
      prevEl: '.clients-swiper .swiper-button--prev',
    },
  },
  'popular-swiper': {
    modules: [Navigation],
    spaceBetween: 0,
    slidesPerView: 5,
    loop: true,
    navigation: {
      nextEl: '.popular-swiper .swiper-button--next',
      prevEl: '.popular-swiper .swiper-button--prev',
    },
  },
  'projects-swiper': {
    modules: [Navigation],
    spaceBetween: 24,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.projects-swiper .swiper-button--next',
      prevEl: '.projects-swiper .swiper-button--prev',
    },
  },
};

export const initSwipers = () => {
  const targets = document.querySelectorAll('[data-swiper]');
  window.swipers = {};
  targets.forEach((el) => {
    const swiperType = el.dataset.swiper;
    const swiperConfig = config[swiperType];

    if (!swiperConfig) {
      console.warn(`Swiper config not found for element:`, el);
      return;
    }
    new Swiper(el, swiperConfig);
  });

  // Photo viewer initialization
  if (document.getElementById('main-photo-viewer')) {
    // Initialize photo viewer swipers
    window.swipers.thumbsSwiper = new Swiper(
      '.swiper.photo-viewer__thumbs-swiper',
      {
        modules: [Manipulation],
        loop: true,
        spaceBetween: 16,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
      }
    );
    // Initialize main swiper and link with thumbs
    window.swipers.mainSwiper = new Swiper(
      '.swiper.photo-viewer__main-swiper',
      {
        modules: [Navigation, Thumbs, Pagination, Manipulation],
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: '.photo-viewer__button-next',
          prevEl: '.photo-viewer__button-prev',
        },
        pagination: {
          el: '.photo-viewer__pagination',
          type: 'custom',
          // formatFractionCurrent: (number) => `aaa0${number}`,
          renderCustom: function (swiper, current, total) {
            return `Фото ${current} з ${total}`;
          },
        },
        thumbs: {
          swiper: window.swipers.thumbsSwiper,
        },
      }
    );

    document
      .querySelectorAll('.photo-viewer__overlay, .photo-viewer__close-button')
      ?.forEach((el) => {
        el.addEventListener('click', () => {
          document.querySelector('.photo-viewer')?.classList.remove('active');
        });
      });
  }
};

export const initHoverPhotoViewers = () => {
  document.querySelectorAll('[data-photo-viewer]').forEach((viewer) => {
    const main = viewer.querySelector('.hover-photo-viewer__main');
    const mainimage = viewer.querySelector('.hover-photo-viewer__main > img');
    const thumbs = viewer.querySelectorAll('.hover-photo-viewer__thumbs li');

    thumbs.forEach((thumb) => {
      thumb.addEventListener('mouseenter', (e) => {
        e.target
          .closest('ul')
          .querySelectorAll('li')
          .forEach((el) => {
            el.classList.remove('active');
          });
        e.target.classList.add('active');
        const img = e.target.querySelector('img');
        mainimage.src = img.src;
      });
    });

    main.addEventListener('click', (e) => {
      const images = Array.from(thumbs).map(
        (thumb) => thumb.querySelector('img').src
      );
      const activeIndex = Array.from(thumbs).findIndex((thumb) =>
        thumb.classList.contains('active')
      );
      activatePhotoViewer(images, activeIndex);
    });
  });
};

function activatePhotoViewer(images, index = 0) {
  const photoViewer = document.getElementById('main-photo-viewer');

  if (!photoViewer || !images || images.length === 0) return;

  const { mainSwiper, thumbsSwiper } = window.swipers;

  if (!mainSwiper || !thumbsSwiper) return;

  mainSwiper.removeAllSlides();
  thumbsSwiper.removeAllSlides();

  const slides = images.map(
    (src) => `<div class="swiper-slide"><img src="${src}" /></div>`
  );

  mainSwiper.appendSlide(slides);
  thumbsSwiper.appendSlide(slides);

  mainSwiper.slideToLoop(index);

  photoViewer.classList.add('active');
}
