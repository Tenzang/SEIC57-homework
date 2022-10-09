

    // Create a new Javascript file and link to it with a script tag at the bottom.

    // Create a variable to store a reference to the img.

    // Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

    // Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

    // Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

    const img = document.getElementsByTagName('img')[0];
    img.style.left = '0px';


    
    const catWalkForward = function () {
        img.style.left = parseInt(img.style.left) + 10 + 'px';
        if (parseInt(img.style.left) > window.innerWidth - 296) {
            img.style.transform = "scaleX(-1)";
            clearInterval(walkTimer2);
            const catWalkBack = function () {
                img.style.left = parseInt(img.style.left) - 10 + 'px';
                console.log(img.style.left);
                const walkTimer = setInterval(catWalkBack, 50)
                if (parseInt(img.style.left) < window.innerWidth + 296) {
                    clearInterval(walkTimer);
                }
            const walkTimer2 = setInterval(catWalkBack, 50);

        }
    }
    }
    const walkTimer = setInterval(catWalkForward, 50);
    walkTimer;