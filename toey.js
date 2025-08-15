const text = document.getElementById("floating-text");

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = 2;
let dy = 2;

function moveText() {
    x += dx;
    y += dy;

    if (x + text.clientWidth >= window.innerWidth || x <= 0) {
        dx = -dx;
    }
    if (y + text.clientHeight >= window.innerHeight || y <= 0) {
        dy = -dy;
    }

    text.style.left = x + "px";
    text.style.top = y + "px";

    requestAnimationFrame(moveText);
}

moveText();
