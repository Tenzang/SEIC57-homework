let buttonsColors = ['yellow', 'blue', 'red', 'green'];

let gamePateern =[];
let userClickedPateern =[];

let started = 'true';
let level = 0;

 //find the id of the botton clicked;
 $('.btn').click(function(){
    let userChosenColor= $(this).attr('id');
    userClickedPateern.push(userChosenColor);
    playSound(userChosenColor);
});


function nextSequence(){

    let userClickedPateern =[];

    $('#level-title').text('Level ' + level);
    level ++;
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonsColors[randomNumber];
    gamePateern.push(randomChosenColor);

    // animate a flash to the button selected
    $('#'+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}


 // play the sound for the button colour selected
 function playSound(name){
    let audio = new Audio('sounds/'+ name + '.mp3');
    audio.play();
}

function animatePress(currentColor){
 $('#' + currentColor).addClass('.pressed');
 setTimeout(function(){
    $('#' + currentColor).removeClass('.pressed')
 }, 100);
}
console.log(nextSequence());









// function randomPrize(pricePool, removePrice){
//     let random = Math.floor(Math.random()*3);
//     // let newPoolPrize = prizePool.slice(randon, 1);
//     let prizeWind =pricePool[random];
//     return `You win a ${prizeWind}! `
// }




// console.log(randomPrize( ['new card', 'holiday',' drum machine' ], 'new card'));


