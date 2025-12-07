import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js';
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/popup/popup.js';
import '@shoelace-style/shoelace/dist/components/radio/radio.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';

import intlTelInput from 'intl-tel-input';

export const initIntlTelInput = () => {
  const inputs = document.querySelectorAll('[data-tel-input]');
  inputs.forEach((input) => {
    const iti = intlTelInput(input, {
      loadUtils: () => import('intl-tel-input/utils'),
      initialCountry: 'ua',
      strictMode: true,
      separateDialCode: true,
      autoPlaceholder: 'aggressive',
      customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
        return selectedCountryPlaceholder.replace(/[0-9]/g, 'X');
      },
    });

    // Додаємо маску для українського формату
    input.addEventListener('input', function (e) {
      if (iti.getSelectedCountryData().iso2 === 'ua') {
        let value = input.value.replace(/\D/g, '');

        // Застосовуємо маску (xx) xxx-xx-xx
        if (value.length > 0) {
          let formatted = '';
          if (value.length > 0) {
            formatted = '(' + value.substring(0, 2);
          }
          if (value.length >= 3) {
            formatted += ') ' + value.substring(2, 5);
          }
          if (value.length >= 6) {
            formatted += '-' + value.substring(5, 7);
          }
          if (value.length >= 8) {
            formatted += '-' + value.substring(7, 9);
          }

          input.value = formatted;
        }
      }
    });
  });
};
