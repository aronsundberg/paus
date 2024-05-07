const logo = document.querySelector(".logo");
const hiddenElements = document.querySelectorAll(".fadeIn");
let timer;
const blurredElement = document.querySelectorAll(".blurred"); 
const timeElement = document.getElementById("date");
// const footer = document.querySelector("footer");

setTimeout(() => {
    logo.style.width = "100%";
}, 1000);
setTimeout(() => {
    hiddenElements.forEach(el => {
        el.style.opacity = "1";
        el.style.visibility = "visible";
    });
}, 2000);

function mouseStopped(){ 
    blurredElement.forEach(element => {
        element.classList.remove("blur");
    });
}
function mouseMove(x) {
    blurredElement.forEach(element => {
        if (x.matches) { // If media query matches
            window.addEventListener("mousemove", () => {
                blurredElement.forEach(element => {
                    element.classList.add("blur");
                });
                clearTimeout(timer);
                timer = setTimeout(mouseStopped,500);
            });
        }
    });
}
// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 768px)");
// Call listener function at run time
mouseMove(x);
// Attach listener function on state changes
x.addEventListener("change", function() {
    mouseMove(x);
});

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    var formatDate = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const clockStr = `${now.toLocaleDateString('en-UK', formatDate)}, ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    timeElement.innerText = clockStr;
    setTimeout(updateTime, 60000);
}
updateTime();

