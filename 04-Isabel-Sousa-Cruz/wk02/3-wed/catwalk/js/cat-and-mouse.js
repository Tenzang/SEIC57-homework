/**

Create a variable to store a reference to the img.

Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

Bonus #4: Pretty much go nuts or whatever.
 */
const screenSize = window.innerWidth;
const tempBackground = document.getElementById("temp-background") ;

const transitionTempBackground = function() {
    tempBackground.style.opacity = "0%";
}

// cat
const catGif = document.getElementById("main-cat");
catGif.style.left = -catGif.clientWidth + "px";
catGif.style.transform = "rotate(350deg)";
catGif.style.top = window.innerHeight - catGif.clientHeight + "px";

let backgroundShowed = false;

const catLeftSpeed = 30;
const catTopSpeed = -3;
const catWalk = function() {
    const previousLeft = parseInt(catGif.style.left);
    const newLeft = previousLeft + catLeftSpeed;
    catGif.style.left = newLeft + 'px';

    const previousTop = parseInt(catGif.style.top);
    const newTop = previousTop + catTopSpeed;
    catGif.style.top = newTop + "px";

    if (newLeft >= screenSize / 2 && !backgroundShowed) {
        tempBackground.style.opacity = "50%";
        setTimeout(transitionTempBackground, 800);
        backgroundShowed = true;
    }
    
    if (newLeft >= screenSize) {
        catGif.style.left = -catGif.clientWidth + "px";
        catGif.style.top = window.innerHeight - catGif.clientHeight + "px";
        backgroundShowed = false;
    }
}

// mouse 
const mouseGif = document.getElementById("mouse");
mouseGif.style.width = "200px"
mouseGif.style.left = -mouseGif.clientWidth + "px";
mouseGif.style.transform = "rotate(350deg)";
mouseGif.style.top = window.innerHeight - mouseGif.clientHeight + "px";

const mouseLeftSpeed = 40;
const mouseTopSpeed = -6;
const mouseWalk = function() {
    const previousLeft = parseInt(mouseGif.style.left);
    const newLeft = previousLeft + mouseLeftSpeed;
    mouseGif.style.left = newLeft + 'px';

    const previousTop = parseInt(mouseGif.style.top);
    const newTop = previousTop + mouseTopSpeed;
    mouseGif.style.top = newTop + "px";
    
    const catOffset = 30;
    if (parseInt(catGif.style.left) >= screenSize - catOffset) {
        mouseGif.style.left = -mouseGif.clientWidth + "px";
        mouseGif.style.top = window.innerHeight - mouseGif.clientHeight + "px";
    }
}



setInterval(catWalk, 50); 
setInterval(mouseWalk, 50); 