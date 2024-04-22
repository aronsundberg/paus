var timer;
var blurredElement = document.getElementById("manifest");   // store element for faster access

function mouseStopped(){                                 // the actual function that is called
    blurredElement.classList.remove("blur");
}
function myFunction(x) {
    if (x.matches) { // If media query matches
        blurredElement.classList.add("blur");
        setTimeout(() => {
            blurredElement.classList.remove("blur");
        }, 2000);
    } else {
        blurredElement.classList.remove("blur");
        window.addEventListener("mousemove", () => {
            blurredElement.classList.add("blur");
            clearTimeout(timer);
            timer = setTimeout(mouseStopped,500);
        });
    }
}
  
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 768px)");
  
// Call listener function at run time
myFunction(x);
  
// Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
});