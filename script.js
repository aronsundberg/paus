let timer;
const blurredElement = document.getElementById("manifest"); 
const footer = document.querySelector("footer");

function mouseStopped(){ 
    blurredElement.classList.remove("blur");
}
function myFunction(x) {
    if (x.matches) { // If media query matches
        blurredElement.classList.add("blur");
        footer.innerHTML = "<p>Take a breath...</p>";
        setTimeout(() => {
            blurredElement.classList.remove("blur");
            footer.innerHTML = "<p>To be continued...</p>";
        }, 4000);
    } else {
        blurredElement.classList.remove("blur");
        footer.innerHTML = "<p>To be continued...</p>";
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