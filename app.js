// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const button = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

button.addEventListener("click", () => {
    if(!button.classList.contains("slide")) {
        button.classList.add("slide");
        video.pause();
    }
    else {
        button.classList.remove("slide");
        video.play();
    }
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
});