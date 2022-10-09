let video = document.getElementById("myVideo");
let img = document.getElementsByTagName('img')[0];
img.style.left = 0;
img.style.right = 0;
let rightDance = 0
let maxWidth = window.innerWidth - 296;
let leftDance = maxWidth;
let animateright;
let animateLeft;

// function myFunction() {
//     if (video.paused) {
//         video.play();
//     }
// }

let catDance = function () {
    rightDance = rightDance + 10; //move at speed of 10
    img.style.left = rightDance + 'px';

    let halfPoint = Math.ceil(((window.innerWidth / 2) - (img.width / 2)) / 10) * 10;
    if (parseInt(img.style.left) === halfPoint) {
        window.clearInterval(timer);
    }


    if (parseInt(img.style.left) >= maxWidth) {
        img.style.msTransform = "scaleX(-1)";
        img.style.transform = "scaleX(-1)";
        animateright = setInterval(walkLeft, 100);
        clearInterval(animate);
    }

};


let walkLeft = function () {
    console.log('walking back')
    rightDance = rightDance - 10;
    img.style.left = rightDance + 'px';
    if (parseInt(img.style.left) === 0) {
        img.style.msTransform = "scaleX(1)";
        img.style.transform = "scaleX(1)";
        animateright = setInterval(catDance, 100);
        clearInterval(animateright);
    }
    // else {
    //     if (parseInt(img.style.left) <= maxWidth) {
    //         img.style.msTransform = "scaleX(1)";
    //         img.style.transform = "scaleX(1)";
    //         animateright = setInterval(walkLeft, 100);
    //         clearInterval(animate);
    //     }
    // }
}
let animate = setInterval(catDance, 100);

