let carouselEl;
let sliderDotEls;

let autoSlideInterval = 0;
let currentSlide = 0;
const slideCount = 4;

window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
    carouselEl = document.querySelector(".carousel");
    sliderDotEls = document.querySelectorAll(".sliderDot-container .dot");
    for (dot of sliderDotEls) {
        dot.addEventListener("click", changeSlide);
    }
    startSlide();
}

function initiateSlider() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(startSlide, 2000);
}

function startSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    document.querySelector(".sliderDot-container .dot.active").classList.remove("active");
    sliderDotEls[currentSlide].classList.add("active");
    carouselEl.style.setProperty(
        "transform",
        `translateX(-${100 * currentSlide}%)`
    );
}

function changeSlide(event) {
    currentSlide = parseInt(event.target.id.split("-")[1]) - 1;
    startSlide();
    initiateSlider();
}