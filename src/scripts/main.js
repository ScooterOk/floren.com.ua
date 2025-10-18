import '../styles/index.scss';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// shoelace components (side-effect imports)
import './_shoelace';

import { initEvents } from './_events';
import { initScroll } from './_scroll';
import { initCatalog } from './_catalog';
import { initHoverPhotoViewers, initSwipers } from './_swipers';
import { initClickOutsideHandlers } from './_clickOutside';
import { initExpandableText } from './_expandableText';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';

export { Autoplay, Navigation, Pagination, Thumbs, Swiper };

export function startApp() {
  // console.log('startApp called');
  initEvents();
  initScroll();
  initCatalog();
  initClickOutsideHandlers();
  initSwipers();
  initExpandableText();
  initHoverPhotoViewers();
}

// Auto-start when loaded in browser
document.addEventListener('DOMContentLoaded', () => {
  startApp();
});
