document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#header");

    function toggleHeaderClass() {
        if (window.scrollY > 0) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    }

    toggleHeaderClass();

    window.addEventListener("scroll", toggleHeaderClass);
});

$(document).ready(function () {
  $(".feedbacks__slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    easing: "linear",
    infinite: true,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchTreshold: 8,
    touchMove: true,
    waitForAnimate: true,
  });
});