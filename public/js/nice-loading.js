// add loading-hidden class to document to hide items before loading
let style = document.createElement('style');
style.innerHTML = '.loading-hidden { display: none }';
document.getElementsByTagName('head')[0].appendChild(style);

const revealPages = () => {
    // once page is loaded, reveal the items
    document.querySelector(".landing-gallery").classList.remove("loading-hidden");
    document.querySelector(".landing-about").classList.remove("loading-hidden");
    document.querySelector(".nav-menu").classList.remove("loading-hidden");
};