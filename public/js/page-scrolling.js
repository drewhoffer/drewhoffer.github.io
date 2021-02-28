// event listener for navigating landing sections with various keys
document.addEventListener("keydown", (e) => {
    if (e.key === "PageDown" || e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "Enter") {
        changePage();
    } else if (e.key === "PageUp" || e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "Backspace") {
        changePage(true);
    } else {
        // go next page on press of any other key (might disable this)
        // changePage()
    }
});




// event listener for navigating landing sections with mouse scroll
let scrollReady = true;

window.addEventListener("wheel", (e) => {
    if (!scrollReady) {
        return;
    } else if (e.deltaY >= 0) {
        changePage();
        scrollReady = undefined;
    } else {
        changePage(true);
        scrollReady = undefined;
    }

    const timeoutTime = 1000;

    return setTimeout(() => {
        scrollReady = true;
    }, timeoutTime);
});




// navigates to the next page depending on current page based on radio button checked status
const changePage = (backwards = false) => {
    // get the radio buttons by id
    let mainRadio = document.getElementById("page-toggler-main");
    let galleryRadio = document.getElementById("page-toggler-gallery");
    let aboutRadio = document.getElementById("page-toggler-about");

    // navigate to next page depending which one is checked
    if (mainRadio.checked) {
        // navigate forward or back depending if backwards is true or not
        backwards ? aboutRadio.checked = true : galleryRadio.checked = true;
    } else if (galleryRadio.checked) {
        backwards ? mainRadio.checked = true : aboutRadio.checked = true;
    } else if (aboutRadio.checked) {
        backwards ? galleryRadio.checked = true : mainRadio.checked = true;
    }
};