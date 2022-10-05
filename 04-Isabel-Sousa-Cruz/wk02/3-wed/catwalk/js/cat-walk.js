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
const catGif = document.getElementById("main-cat");
catGif.style.left = -catGif.clientWidth + "px";
catGif.style.transform = "rotate(350deg)";
catGif.style.top = window.innerHeight - catGif.clientHeight + "px";

const leftSpeed = 20;
const topSpeed = -3;
const catWalk = function() {
    const previousLeft = parseInt(catGif.style.left);
    const newLeft = previousLeft + leftSpeed;
    catGif.style.left = newLeft + 'px';

    const previousTop = parseInt(catGif.style.top);
    const newTop = previousTop + topSpeed;
    catGif.style.top = newTop + "px";
    
    const screenSize = window.innerWidth;
    if (newLeft >= screenSize) {
        catGif.style.left = -catGif.clientWidth + "px";
        catGif.style.top = window.innerHeight - catGif.clientHeight + "px";
    }
}

setInterval(catWalk, 50); 