const slideshows = {
    1: {
        images: ["imgs/sink-after.jpg", "imgs/sink-before.jpg"],
        index: 0
    },
    2: {
        images: ["imgs/living-after.jpg", "imgs/living-before.jpg"],
        index: 0
    },
    3: {
        images: ["imgs/bath-after.jpg", "imgs/bath-before.jpg"],
        index: 0
    }
};

function changeSlide(slideshowID, direction) {
    const slideshow = slideshows[slideshowID];
    slideshow.index = (slideshow.index + direction + slideshow.images.length) % slideshow.images.length;

    const container = document.querySelector(`[data-slideshow="${slideshowID}"]`);
    const img = container.querySelector(".slide-img");
    img.src = slideshow.images[slideshow.index];
}
