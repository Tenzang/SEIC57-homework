// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

let wordLetters = ['D', 'R', 'A', 'G', 'O', 'N'];
let guessLetters = ['_', '_', '_', '_', '_', '_'];

const wordGuesser = function guesLet(text) {
    let correctGuess = false; //initial setup
    let moreGuess = false; //letters remaining to be guessed

    for (let i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] === text) {  //when correct letter is guessed
            guessLetters[i] = text;
            correctGuess = true;
        }
        if (guessLetters[i] === '_') {  //if there are remaining letters to be guessed
            moreGuess = true;
        }
    }
    if (correctGuess) {
        console.log(`You found a correct letter!`);
        console.log(guessLetters.join('')); //connecting the letters together without the commas in between
        if (!moreGuess) {
            console.log(`YOU GUESSED THE WORD!`);
        }
    } else {
        console.log(`PLEASE TRY ANOTHER LETTER!`);
    }
    return correctGuess;
}

console.log(wordGuesser('D'));
console.log(wordGuesser('A'));
console.log(wordGuesser('W'));
console.log(wordGuesser('T'));
console.log(wordGuesser('G'));
console.log(wordGuesser('R'));
console.log(wordGuesser('O'));
console.log(wordGuesser('M'));
console.log(wordGuesser('Y'));
console.log(wordGuesser('N'));