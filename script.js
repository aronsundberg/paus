const logo = document.querySelector(".logo");
const hiddenElements = document.querySelectorAll(".hide");
let timer;
const blurredElement = document.querySelectorAll(".manifest"); 
const timeElement = document.getElementById("date");
// const footer = document.querySelector("footer");

setTimeout(() => {
    logo.style.flex = "0 0 100%";
}, 1000);

setTimeout(() => {
    hiddenElements.forEach(el => {
        el.style.opacity = "1";
        el.style.visibility = "visible";
    });
}, 3000);

function mouseStopped(){ 
    blurredElement.forEach(element => {
        element.classList.remove("blur");
    });
}
function mouseMove(x) {
    blurredElement.forEach(element => {
        if (x.matches) { // If media query matches
            element.classList.add("blur");
            // footer.innerHTML = "<p>Take a breath...</p>";
            setTimeout(() => {
                blurredElement.forEach(element => {
                    element.classList.remove("blur");
                });
            }, 1000);
            setTimeout(() => {
                // footer.innerHTML = "<p>Nice to meet you!</p>";
            }, 5000);
        } else {
            element.classList.remove("blur");
            // footer.innerHTML = "<p>Nice to meet you!</p>";
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
var x = window.matchMedia("(max-width: 768px)");
  
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

// let timer;
// const manifestOne = document.getElementById("manifest-1"); 
// const manifestTwo = document.getElementById("manifest-2"); 
// // const footer = document.querySelector("footer");

// function mouseStopped(){ 
//     manifestOne.classList.remove("blur");
//     manifestTwo.classList.remove("blur");
// }
// function mouseMove(x) {
//     if (x.matches) { // If media query matches
//         manifestOne.classList.add("blur");
//         manifestTwo.classList.add("blur");
//         // footer.innerHTML = "<p>Take a breath...</p>";
//         setTimeout(() => {
//             manifestOne.classList.remove("blur");
//             manifestTwo.classList.remove("blur");
//         }, 1000);
//         setTimeout(() => {
//             // footer.innerHTML = "<p>Nice to meet you!</p>";
//         }, 5000);
//     } else {
//         manifestOne.classList.remove("blur");
//         manifestTwo.classList.remove("blur");
//         // footer.innerHTML = "<p>Nice to meet you!</p>";
//         window.addEventListener("mousemove", () => {
//             manifestOne.classList.add("blur");
//             manifestTwo.classList.add("blur");
//             clearTimeout(timer);
//             timer = setTimeout(mouseStopped,500);
//         });
//     }
// }
  
// // Create a MediaQueryList object
// var x = window.matchMedia("(max-width: 768px)");
  
// // Call listener function at run time
// mouseMove(x);
  
// // Attach listener function on state changes
// x.addEventListener("change", function() {
//     mouseMove(x);
// });