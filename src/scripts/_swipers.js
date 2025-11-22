/**
 * @file This file initializes all Swiper instances on the site.
 * It includes a generic initializer for swipers found in the DOM via `data-swiper` attributes,
 * and specific logic for a photo viewer modal with main and thumbnail sliders.
 */

import Swiper from 'swiper';
import { Autoplay, Manipulation, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { generateRandomId } from './main';

/**
 * Configuration object for different Swiper instances.
 * The key corresponds to the value of the `data-swiper` attribute in the HTML.
 * @type {Object.<string, SwiperOptions>}
 */
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
  'delivery-swiper': {
    modules: [Navigation],
    spaceBetween: 24,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '[data-swiper="delivery-swiper"] .swiper-button--next',
      prevEl: '[data-swiper="delivery-swiper"] .swiper-button--prev',
    },
  },
};

/**
 * Initializes all Swiper instances based on the `data-swiper` attribute.
 * Also initializes the photo viewer modal swipers if the element exists.
 */
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
    // Initialize thumbs swiper for the photo viewer
    window.swipers.thumbsSwiper = new Swiper('.swiper.photo-viewer__thumbs-swiper', {
      modules: [Manipulation],
      loop: true,
      spaceBetween: 16,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: true,
    });
    // Initialize main swiper for the photo viewer and link it with the thumbs swiper
    window.swipers.mainSwiper = new Swiper('.swiper.photo-viewer__main-swiper', {
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
    });

    window.swipers.mainSwiper.on('slideChange', () => {
      // Stop all YouTube players when the slide changes
      window.youtubePlayers.forEach((player) => {
        if (player.stopVideo) {
          player.stopVideo();
        }
      });
    });

    // Add event listeners to close the photo viewer modal
    document.querySelectorAll('.photo-viewer__overlay, .photo-viewer__close-button')?.forEach((el) => {
      el.addEventListener('click', () => {
        document.querySelector('.photo-viewer')?.classList.remove('active');
        // Stop all YouTube players when closing the viewer
        window.youtubePlayers.forEach((player) => {
          if (player.stopVideo) {
            player.stopVideo();
          }
        });
      });
    });
  }
};

/**
 * Initializes hover-based photo viewers.
 * These components show a main image that changes on thumbnail hover
 * and open the main photo viewer modal on click.
 */
export const initHoverPhotoViewers = () => {
  document.querySelectorAll('[data-photo-viewer]').forEach((viewer) => {
    const main = viewer.querySelector('.hover-photo-viewer__main');
    const mainimage = viewer.querySelector('.hover-photo-viewer__main > img');
    const thumbsBox = viewer.querySelector('.hover-photo-viewer__thumbs');
    const thumbs = viewer.querySelectorAll('.hover-photo-viewer__thumbs li');

    // Handle thumbnail hover to change the main image
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

    thumbsBox.addEventListener('click', (e) => {
      const li = e.target.closest('li');
      let activeIndex = 0;
      let prev = li;

      while ((prev = prev.previousElementSibling)) {
        activeIndex++;
      }

      const images = Array.from(thumbs).map((thumb) => ({
        src: thumb.querySelector('img')?.src || thumb.querySelector('[data-video-src]')?.dataset.videoSrc,
        type: thumb.querySelector('img') ? 'image' : 'video',
      }));

      activatePhotoViewer(images, activeIndex);
    });

    // Handle click on the main image to open the full-screen photo viewer
    main.addEventListener('click', () => {
      const images = Array.from(thumbs).map((thumb) => ({
        src: thumb.querySelector('img')?.src || thumb.querySelector('[data-video-src]')?.dataset.videoSrc,
        type: thumb.querySelector('img') ? 'image' : 'video',
      }));
      const activeIndex = Array.from(thumbs).findIndex((thumb) => thumb.classList.contains('active'));
      activatePhotoViewer(images, activeIndex);
    });
  });
};

/**
 * Activates and populates the main photo viewer modal.
 * @param {string[]} images - An array of image source URLs to display in the viewer.
 * @param {number} [index=0] - The initial slide index to show.
 */
function activatePhotoViewer(images, index = 0) {
  const photoViewer = document.getElementById('main-photo-viewer');

  if (!photoViewer || !images || images.length === 0) return;

  const { mainSwiper, thumbsSwiper } = window.swipers;

  if (!mainSwiper || !thumbsSwiper) return;

  // Clear previous slides
  mainSwiper.removeAllSlides();
  thumbsSwiper.removeAllSlides();

  // Create new slides from the image array
  const thumbs = images.map((item) => {
    if (item.type === 'image') {
      return `<div class="swiper-slide"><img src="${item.src}" /></div>`;
    } else {
      return `<div class="swiper-slide"><button><span class="icon icon-video-button"></span><span>Відео</span></button></div>`;
    }
  });

  const videoIdArray = [];

  // Add new slides to the thumbnails swiper
  const slides = images.map((item) => {
    if (item.type === 'image') {
      return `<div class="swiper-slide"><img src="${item.src}" /></div>`;
    } else {
      const videoId = generateRandomId();
      videoIdArray.push(videoId);
      return `
      <div class="swiper-slide">
        <iframe id="${videoId}"       
          src="${item.src}&enablejsapi=1" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>`;
    }
  });

  // Add new slides to both swipers
  mainSwiper.appendSlide(slides);
  thumbsSwiper.appendSlide(thumbs);

  // Go to the specified slide and show the viewer
  mainSwiper.slideToLoop(index);

  photoViewer.classList.add('active');

  videoIdArray.forEach((videoId) => {
    const player = new YT.Player(videoId);
    window.youtubePlayers.push(player);
  });

  // window.player = new YT.Player(videoId);
  // window.scooterok.push(window.player);
}

export const initLastworkViewers = () => {
  document.querySelectorAll('[data-lastwork-viewer]').forEach((viewer) => {
    const thumbsBox = viewer.querySelector('.swiper-wrapper');
    const thumbs = viewer.querySelectorAll('.swiper-wrapper .swiper-slide');
    thumbsBox.addEventListener('click', (e) => {
      const li = e.target.closest('.swiper-slide');
      let activeIndex = 0;
      let prev = li;

      while ((prev = prev.previousElementSibling)) {
        activeIndex++;
      }

      const images = Array.from(thumbs).map((thumb) => ({
        src: thumb.querySelector('img')?.src || thumb.querySelector('[data-video-src]')?.dataset.videoSrc,
        type: thumb.querySelector('img') ? 'image' : 'video',
      }));

      activatePhotoViewer(images, activeIndex);
    });
  });
};
