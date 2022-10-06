console.log('Yes');
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
const img = document.getElementById('cat1');
let speedX = 2;
let speedY = 2;
let x = 0;
let y = 0;
let scaleX = 1;
const imgWidth = 296;
const imgHeight = 296;
const screenWidth = document.body.clientWidth;
const screenHeight = innerHeight;//screen.availHeight;
console.log(screenHeight);

const catWalk = function () {
    x = x + speedX;
    y = y + speedY
    // console.log(x);
    // console.log(y);
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    let imgRight = x + imgWidth;
    let imgButtom = y + imgHeight;
    console.log(imgHeight);
    if(imgRight >= screenWidth || x <= 0) {
        scaleX = -scaleX;
        img.style.transform=`scaleX(${scaleX})`;
        speedX = -speedX;
    }
    if(imgButtom >= screenHeight || y <= 0) {
        speedY = -speedY;
    }
};

setInterval(catWalk,10);
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 

// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever. 

// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. 

// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// - Bonus #4: Pretty much go nuts or whatever.
// if (imgRight === screenWidth|| x === 0){
//     img.style.transform='scaleX(-1)';
    
// } else