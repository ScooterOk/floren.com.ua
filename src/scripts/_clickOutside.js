/**
 * Click outside functionality
 * Closes elements when clicking outside their boundaries
 */

/**
 * Initialize click outside handler for specific elements
 * @param {string} selector - CSS selector for elements to watch
 * @param {Function} callback - Callback function to execute on outside click
 * @param {Object} options - Additional options
 * @param {string} options.excludeSelector - CSS selector for elements to exclude from outside click
 */
export const initClickOutside = (selector, callback, options = {}) => {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const handleClickOutside = (event) => {
    elements.forEach((element) => {
      // Check if click is outside the element
      const isClickInside = element.contains(event.target);

      // Check if click is on excluded element
      const isExcluded = options.excludeSelector
        ? event.target.closest(options.excludeSelector)
        : false;

      if (!isClickInside && !isExcluded) {
        callback(element, event);
      }
    });
  };

  document.addEventListener('click', handleClickOutside);

  // Return cleanup function
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
};

/**
 * Close tooltip/dropdown on outside click
 * Works with Shoelace components (sl-tooltip, sl-dropdown)
 */
export const initTooltipClickOutside = () => {
  const tooltips = document.querySelectorAll('sl-tooltip[trigger="manual"]');

  tooltips.forEach((tooltip) => {
    const handleClickOutside = (event) => {
      // Check if tooltip is open
      if (!tooltip.open) return;

      // Check if click is inside tooltip or its trigger
      const isClickInside = tooltip.contains(event.target);

      if (!isClickInside) {
        tooltip.hide();
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Store cleanup function for later removal if needed
    tooltip._cleanupClickOutside = () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
};

/**
 * Initialize click outside for catalog overlay
 */
export const initCatalogClickOutside = () => {
  const overlay = document.getElementById('catalog-overlay');
  const catalog = document.querySelector('.header__catalog_list');
  const catalogButton = document.querySelector(
    '[data-callback="toggleCatalog"]'
  );

  if (!overlay || !catalog) return;

  const handleClickOutside = (event) => {
    // Check if catalog is visible
    if (!overlay.classList.contains('active')) return;

    // Check if click is inside catalog or on catalog button
    const isClickInCatalog = catalog.contains(event.target);
    const isClickOnButton =
      catalogButton && catalogButton.contains(event.target);

    if (!isClickInCatalog && !isClickOnButton) {
      // Close catalog
      overlay.classList.remove('active');
      catalog.classList.remove('active');
    }
  };

  document.addEventListener('click', handleClickOutside);
};

/**
 * Initialize all click outside functionality
 */
export const initClickOutsideHandlers = () => {
  initTooltipClickOutside();
  initCatalogClickOutside();
};
