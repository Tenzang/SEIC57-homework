const flyingCat = document.getElementById("flying-cat");
flyingCat.style.width = "200px";
flyingCat.style.left = -flyingCat.clientWidth + "px";

let flyingCatLeftSpeed = 20;
const catFly = function() {
    const previousLeft = parseInt(flyingCat.style.left);
    const newLeft = previousLeft + flyingCatLeftSpeed;
    flyingCat.style.left = newLeft + 'px';

    const screenSize = window.innerWidth;
    if (newLeft >= screenSize) {
        flyingCatLeftSpeed = -10;
        flyingCat.style.transform = "scaleX(-1)"
    }

    if (newLeft <= -flyingCat.clientWidth) {
        flyingCatLeftSpeed = 10;
        flyingCat.style.transform = "scaleX(1)";
    }
}

setInterval(catFly, 50);