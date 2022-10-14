
// $('img').animate({
//     'left': '1000px',
//     'height': '200%',
//     'width': 'auto'
// },5000)

// $('img').animate({
//     'left': '0px',
//     'height': '10%',
//     'width': 'auto'
// },5000)








//create a variable to store a reference to the img

// const catImage = document.getElementsByTagName('img')[0];

//Change the style of the img to have a "left" of "0px", so that the cat starts at the left hand side of the screen

// catImage.style.left = "0px";

// console.log(Number(catImage.style.left))
// console.log(parseInt(catImage.style.left))
// console.log(catImage.width)

//create a function called catWalk that moves the cat 10 pixels to the right of where it started, by changing the "left" style property

// const catWalkRight = function (){
//     let oldPosition = parseInt(catImage.style.left);
//     let newPosition = oldPosition + 10;
//     catImage.style.left = newPosition + "px";
//     if(parseInt(catImage.style.left) > window.innerWidth-catImage.width){
//         catImage.style.transform = "scaleX(-1)"
//         clearInterval(stopTimerRight);
//         const catWalkLeft = function () {
//             oldPosition = parseInt(catImage.style.left);
//             newPosition = oldPosition - 10;
//             catImage.style.left = newPosition + "px";
//             if(parseInt(catImage.style.left) === 0){
//                 clearInterval(stopTimerLeft);
//                 catImage.style.transform = "scaleX(+1)"
//             }
//         }
//         const stopTimerLeft = setInterval(catWalkLeft,50);
//     }
// }
// const stopTimerRight = setInterval(catWalkRight,50);


