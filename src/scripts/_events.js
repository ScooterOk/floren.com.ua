const clickHandlers = {
  togglePhones: (event) => {
    const element = event.currentTarget;
    const tooltip = element.closest('#phones-tooltip');
    const wrapper = tooltip.querySelector('.header__main--phones');

    tooltip.open = !tooltip.open;
    wrapper.classList.toggle('active');
  },
  toggleFooterPhones: (event) => {
    event.currentTarget.closest('.contacts-phone').classList.toggle('active');
  },
};

export const initEvents = () => {
  const targets = document.querySelectorAll('[data-event]');
  targets.forEach((el) => {
    const event = el.dataset.event;
    const callback = clickHandlers[el.dataset.callback];
    if (!callback) {
      console.warn(
        `Callback function "${el.dataset.callback}" not found for element:`,
        el
      );
      return;
    }
    el.addEventListener(event, callback);
  });
};
