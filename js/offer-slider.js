jQuery(document).ready(function() {
    const offerSlider = $('#offerSlider');
    const settings = {
        items: 3,
        loop: true,
        dots: false,
        smartSpeed: 800,
        responsive: {
            0: { items: 1 },
            1200: { items: 2 },
            1650: { items: 3 }
        }
    };

    offerSlider.owlCarousel(settings);

    const navigateSlider = (direction) => {
        console.log(direction);
        offerSlider.trigger(`${direction}.owl.carousel`);
    };

    $('#offer-sliderRight').click(() => navigateSlider('next'));
    $('#offer-sliderLeft').click(() => navigateSlider('prev'));
});
