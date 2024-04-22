let timer;
const blurredElement = document.getElementById("manifest"); 

function mouseStopped(){ 
    blurredElement.classList.remove("blur");
}
function myFunction(x) {
    if (x.matches) { // If media query matches
        blurredElement.classList.add("blur");
        const btmText = document.getElementById("btm-txt");
        btmText.textContent = "Take a breath...";
        setTimeout(() => {
            blurredElement.classList.remove("blur");
            btmText.textContent = "To be continued...";
        }, 4000);
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