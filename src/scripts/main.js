import '../styles/style.scss';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

import { initEvents } from './_events';
import { initScroll } from './_scroll';
import { initCatalog } from './_catalog';
import { initClickOutsideHandlers } from './_clickOutside';

document.addEventListener('DOMContentLoaded', () => {
  // console.log('DOM fully loaded and parsed');
  initEvents();
  initScroll();
  initCatalog();
  initClickOutsideHandlers();
});
