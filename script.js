var timer;
var blurredElement = document.getElementById("manifest");   // store element for faster access

function mouseStopped(){                                 // the actual function that is called
    blurredElement.classList.remove("blur");
}

window.addEventListener("mousemove", () => {
    blurredElement.classList.add("blur")
    clearTimeout(timer);
    timer = setTimeout(mouseStopped,500);
});

window.addEventListener("devicemotion", (event) => {
    blurredElement.textContent = "Skak";
  });