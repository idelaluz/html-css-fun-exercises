const donut = document.querySelector(".donut");
const colors = ["#00e676", "#ffeb3b", "#ff1744", "#2196f3", "#ff9100"];

function createSprinkle() {
    const sprinkle = document.createElement("div");
    sprinkle.classList.add("sprinkle");
    sprinkle.style.top = Math.random() * 80 + 30 + "px";
    sprinkle.style.left = Math.random() * 160 + 20 + "px";
    sprinkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    donut.appendChild(sprinkle);


    setTimeout(() => {
        sprinkle.remove();
    }, 4000);
}

setInterval(createSprinkle, 300);


