/**
 * Header scroll hide/show functionality
 */
export const initHeaderScroll = () => {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScrollTop = 0;
  let isScrolling = false;

  const handleScroll = () => {
    if (isScrolling) return;

    isScrolling = true;
    requestAnimationFrame(() => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Якщо скролимо вниз і не на самому верху
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.classList.add('header--hidden');
      }
      // Якщо скролимо вгору
      else if (scrollTop < lastScrollTop) {
        header.classList.remove('header--hidden');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      isScrolling = false;
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Gets the width of the scrollbar.
 * @returns {number} The width of the scrollbar in pixels.
 */
const getScrollbarWidth = () => {
  // Create a temporary div to measure the scrollbar
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // Force scrollbar
  document.body.appendChild(outer);

  // Create an inner div
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculate the scrollbar width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Remove the temporary div
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};

/**
 * Locks the page scroll.
 */
export const lockScroll = () => {
  const scrollbarWidth = getScrollbarWidth();
  document.documentElement.style.setProperty(
    '--scrollbar-width',
    `${scrollbarWidth}px`
  );
  document.body.classList.add('scroll-blocked');
};

/**
 * Unlocks the page scroll.
 */
export const unlockScroll = () => {
  document.body.classList.remove('scroll-blocked');
};

/**
 * Initialize all scroll-related functionality
 */
export function initScroll() {
  initHeaderScroll();
}
