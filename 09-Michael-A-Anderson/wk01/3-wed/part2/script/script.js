

// !!Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// !!Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
const displayBlanked = function (blanked) {
    let showBlanked = ''
    for(let i =0 ; i<blanked.length;i++)[
        showBlanked= `${showBlanked}${blanked[i]}`
    ]
    return showBlanked
}

const testWin = function(blanked){
    if(blanked===phrase){
        console.log(`Congratulations you win`)
    }
}

const guessLetter = function (guess) {
    if(!(chosen.includes(guess))){
        chosen.push(guess)
        if(phrase.includes(guess)){
            let found = 0
            while (found >=0){
                let index = phrase.indexOf(guess,found);
                if(index > -1){
                    blanked[index]=guess;
                    if(guess!==' '){ 
                    console.log(`Congratulations, you guessed a correct letter`)
                    }               
                    found=index+1;
                }else{
                    found=index
                }
            }
            let blankedPhrase = displayBlanked(blanked);
            console.log(blankedPhrase)
            testWin(blankedPhrase)
        }else{
            console.log('Letter not found')
        }
    }else{
        console.log("already chosen")
    }
}

const phrase="DARTH VADER"
const letters = phrase.split('');
const chosen=[];
const blanked = [];
blanked.length=phrase.length;
for (let i = 0; i<blanked.length;i++){
    blanked[i]='-';
}
console.log("Name this pop culture figure")
guessLetter(' ');






