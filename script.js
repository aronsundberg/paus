const logo = document.querySelector(".logo");
const hiddenElements = document.querySelectorAll(".fadeIn");
const blurredElements = document.querySelectorAll(".blurred");
const timeElement = document.getElementById("date");
let timer;

// Set logo width after 1 second
setTimeout(() => {
    logo.style.width = "100%";
}, 1000);

// Show hidden elements after 2 seconds
setTimeout(() => {
    hiddenElements.forEach(el => {
        el.style.opacity = "1";
        el.style.visibility = "visible";
    });
}, 2000);

// Function to remove blur class from elements
function mouseStopped() {
    blurredElements.forEach(element => {
        element.classList.remove("blur");
    });
}

// Function to add blur class to elements when mouse moves
function mouseMoveHandler() {
    blurredElements.forEach(element => {
        element.classList.add("blur");
    });
    clearTimeout(timer);
    timer = setTimeout(mouseStopped, 500);
}

// Attach mousemove event listener for blur effect
function attachMouseMoveListener() {
    window.addEventListener("mousemove", mouseMoveHandler);
}

// Add blur effect on larger screens
function addBlurOnLargeScreens(mediaQuery) {
    if (mediaQuery.matches) {
        attachMouseMoveListener();
    } else {
        window.removeEventListener("mousemove", mouseMoveHandler);
        blurredElements.forEach(element => {
            element.classList.remove("blur");
        });
    }
}

// Set up media query listener for screen size change
const largeScreen = window.matchMedia("(min-width: 768px)");
addBlurOnLargeScreens(largeScreen); // Call listener function at run time
largeScreen.addEventListener("change", () => addBlurOnLargeScreens(largeScreen)); // Attach listener function on state changes

// Update time every minute
function updateTime() {
    const now = new Date();
    const formatDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const clockStr = `${now.toLocaleDateString('en-UK', formatDate)}, ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    timeElement.innerText = clockStr;
    setTimeout(updateTime, 60000);
}
updateTime();
