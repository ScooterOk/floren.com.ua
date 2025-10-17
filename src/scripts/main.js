import '../styles/index.scss';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { initEvents } from './_events';
import { initScroll } from './_scroll';
import { initCatalog } from './_catalog';
import { initHoverPhotoViewers, initSwipers } from './_swipers';
import { initClickOutsideHandlers } from './_clickOutside';
import { initExpandableText } from './_expandableText';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  // console.log('DOM fully loaded and parsed');
  initEvents();
  initScroll();
  initCatalog();
  initClickOutsideHandlers();
  initSwipers();
  initExpandableText();
  initHoverPhotoViewers();
});
