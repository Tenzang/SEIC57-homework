const cat = document.getElementById('black-cat');
const plunger = document.getElementById('plunger');
cat.style.left = '0px';
cat.style.top = (innerHeight - cat.height) / 2 + 'px';
plunger.style.left = (innerWidth) / 2 + 'px';
plunger.style.top = -plunger.height + 'px';

let walkRightTimer;
let walkLeftTimer;
let goNutsTimer;
let yeetUpTimer;
let catReturnsTimer;
let plungerEntersTimer;
let walkDiagonallyTimer;

let dx = 10;
let dy = 10;
let angle = 0;
let rotation = 0;
let dyplunger = 5;
let dyDiagonal = 2;

let topAfterWentNuts = 0;


function walkRight () {
    const oldLeft = parseInt(cat.style.left);
    const newLeft = oldLeft + 4;

    cat.style.left = newLeft + 'px';
    cat.style.transform = 'scaleX(1)';
    // console.log('  -->');

    if ((newLeft > (innerWidth - cat.width) / 2) && newLeft < parseInt(innerWidth) * 0.6) {
        // console.log('plunger is here');
        clearInterval(walkRightTimer);
        plungerEntersTimer = setInterval(plungerEnters, 20);
        const allstarSome = new Audio('audio/some.mp3');
        allstarSome.play();
        return;
    }

    if (newLeft > innerWidth - cat.width) {
        clearInterval(walkRightTimer);
        walkLeftTimer = setInterval(walkLeft, 20);
    }
};

function walkLeft () {
    const oldLeft = parseInt(cat.style.left);
    const newLeft = oldLeft - 4;

    cat.style.left = newLeft + 'px';
    cat.style.transform = 'scaleX(-1)';
    // console.log('<--');

    if ((newLeft < (innerWidth / 2 + 10) && newLeft > innerWidth / 2)) {
        // console.log('run');
        clearInterval(walkLeftTimer);
        walkDiagonallyTimer = setInterval(walkDiagonally, 10);
        return;
    }

    if (newLeft < 0) {
        clearInterval(walkLeftTimer);
        walkRightTimer = setInterval(walkRight, 20);
    }
};

function plungerEnters () {
    const oldTop = parseInt(plunger.style.top);
    const newTop = oldTop + dyplunger;

    plunger.style.top = newTop + 'px';
    
    if (newTop > innerHeight / 2 - 1.2 * plunger.height) {
        dyplunger = -dyplunger;
        // console.log('going nuts')
        goNutsTimer = setInterval(goNuts, 20);
        const allstarBody = new Audio('audio/body.mp3');
        allstarBody.play();
    }

    if (newTop < -plunger.height) {
        clearInterval(plungerEntersTimer);
        plunger.style.top = -plunger.height + 'px';
        plunger.style.left = (innerWidth) / 2 + 'px';
        dyplunger = -dyplunger;
    }
};

walkRightTimer = setInterval(walkRight, 20);

function goNuts () {
    const oldLeft = parseInt(cat.style.left);
    const oldTop = parseInt(cat.style.top);

    const newLeft = oldLeft + dx;
    const newTop = oldTop + dy;
    angle += 12;

    cat.style.left = newLeft + 'px';
    cat.style.top = newTop + 'px';

    cat.style.transform = `rotate(${ angle }deg)`;

    if (newTop > innerHeight - cat.height) {
        // console.log('flip y-');
        dy = -dy;
    } else if (newTop < 0) {
        // console.log('flip y+');
        dy = -dy;
    }

    if (newLeft > innerWidth - cat.width) {
        // console.log('flip x-');
        dx = -dx;
    } else if (newLeft < 0) {
        // console.log('flip x+');
        dx = -dx;
    }

    if (angle % 360 === 0) {
        rotation += 1;
        // console.log(`rotation: ${ rotation }`);
    }

    if (rotation > 8) {
        clearInterval(goNutsTimer);
        topAfterWentNuts = parseInt(cat.style.top);
        yeetUpTimer = setInterval(yeetUp, 10);
    }
}

function yeetUp () {
    topAfterWentNuts -= 10;
    cat.style.top = topAfterWentNuts + 'px';
    if (topAfterWentNuts < -cat.width) {
        clearInterval(yeetUpTimer);
        cat.style.left = parseInt((0.6 * innerWidth)) + 'px';
        catReturnsTimer = setInterval(catReturns, 20);
        rotation = 0;
    }
};

function catReturns () {
    topAfterWentNuts += 4;
    cat.style.top = topAfterWentNuts + 'px';

    if (topAfterWentNuts > (innerHeight - cat.height) / 2) {
        clearInterval(catReturnsTimer);
        walkRightTimer = setInterval(walkRight, 20);
    }
}

function walkDiagonally () {
    const oldLeft = parseInt(cat.style.left);
    const oldTop = parseInt(cat.style.top);
    const newLeft = oldLeft - 2;
    const newTop = oldTop + dyDiagonal;

    cat.style.left = newLeft + 'px';
    cat.style.top = newTop + 'px'
    // cat.style.transform = 'scaleX(-1)';

    if (newLeft === (innerWidth - cat.width) / 2) {
        dyDiagonal = -dyDiagonal;
    }

    if (newTop < (innerHeight - cat.height) / 2) {
        clearInterval(walkDiagonallyTimer);
        plunger.style.top = -plunger.height + 'px';
        // console.log('avoided');
        dyDiagonal = -dyDiagonal;

        confetti({              // using external confetti js
          particleCount: 80,
          startVelocity: 20,
          spread: 360,
        });

        walkLeftTimer = setInterval(walkLeft, 20);

        const partyHorn = new Audio('audio/party-horn.mp3');
        partyHorn.play();
    }
}