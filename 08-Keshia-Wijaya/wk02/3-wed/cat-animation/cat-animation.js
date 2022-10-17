// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.


const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

let myInterval;

const catAnimationForward = function() {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + 1;
  img.style.left = newLeft + 'px';
  if (img.style.left === "1230px" ) {
    clearInterval(myInterval) 
    myInterval = setInterval(catAnimationBackward, 1);
  }
  
};

const catAnimationBackward = function() {
    const oldLeft = parseInt(img.style.left);
    const newLeft = oldLeft - 1;
    img.style.left = newLeft + 'px';
    if (img.style.left === "0px" ) {
      clearInterval(myInterval) 
    }
  };

myInterval = setInterval(catAnimationForward, 1);


// animation.style.animationPlayState = 'paused'

// var img = document.getElementsByTagName('img')[0];
// img.style.opacity = 1.0;

// var setInterval= function() {  
//   img.style.opacity = img.style.opacity - .1;
//   if (img.style.opacity < .5) {
//     window.clearInterval(fadeTimer);
//   }
// };
// var fadeTimer = window.setInterval(fadeAway, 100);


// if cat animation reaches the end 
// then stop.
// then turn around. how to do that?