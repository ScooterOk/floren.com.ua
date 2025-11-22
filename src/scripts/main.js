// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'intl-tel-input/build/css/intlTelInput.css';
import '../styles/index.scss';

// import Swiper JS
import Swiper from 'swiper';

// shoelace components (side-effect imports)
import './_shoelace';

import { initEvents } from './_events';
import { initScroll } from './_scroll';
import { initCatalog } from './_catalog';
import { initHoverPhotoViewers, initLastworkViewers, initSwipers } from './_swipers';
import { initClickOutsideHandlers } from './_clickOutside';
import { initExpandableText } from './_expandableText';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { initIntlTelInput } from './_shoelace';

export { Autoplay, Navigation, Pagination, Thumbs, Swiper };

window.youtubePlayers = [];

// export function onYouTubeIframeAPIReady() {
//   console.log('YouTube API is ready!');
//   window.player = new YT.Player('youtube-player', {
//     events: {
//       onReady: onPlayerReady, // Можна додати подію "onReady"
//     },
//   });
// }

export function startApp() {
  // console.log('startApp called');
  initEvents();
  initScroll();
  initCatalog();
  initClickOutsideHandlers();
  initSwipers();
  initExpandableText();
  initHoverPhotoViewers();
  initLastworkViewers();
  initIntlTelInput();
}

export const generateRandomId = (length = 10) => {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
};

// Auto-start when loaded in browser
document.addEventListener('DOMContentLoaded', () => {
  startApp();
});
