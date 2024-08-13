/** @format */

jQuery(document).ready(function () {
  const initializeOwlCarousel = (sliderSelector, rightBtnSelector, leftBtnSelector) => {
    const slider = $(sliderSelector);

    slider.owlCarousel({
      items: 3,
      loop: true,
      dots: false,
      smartSpeed: 800,
      responsive: {
        0: { items: 1 },
        1200: { items: 2 },
        1650: { items: 3 },
      },
    });

    $(rightBtnSelector).click(() => slider.trigger('next.owl.carousel'));
    $(leftBtnSelector).click(() => slider.trigger('prev.owl.carousel'));
  };

  initializeOwlCarousel('#offerSlider2', '#offer-sliderRight-second', '#offer-sliderLeft-second');
});
