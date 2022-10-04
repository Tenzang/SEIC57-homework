/*
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate 
the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not,
it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times
with various letters to check that your program works.
*/

const wordToBeGuessed = ["F", "O", "X"];
const guessedWord = ["_", "_", "_"];

const guessedLetter = function(guess) {
    for (let i = 0; i < wordToBeGuessed.length; i++) {
        if (guess === wordToBeGuessed[i]) {
            guessedWord[i] = wordToBeGuessed[i];
            return true
        }
    }
    return false;
}

const hasGuessed = function() {
    for (let i = 0; i < wordToBeGuessed.length; i++) {
        if (wordToBeGuessed[i] !== guessedWord[i]) {
            return false;
        }
    }
    return true
}

let isGameOver = false
do {
    const guess = prompt("Guess a letter:");
    if (guessedLetter(guess.toUpperCase())) {
        alert("You found a letter!");
        alert(guessedWord);
    } else {
        alert(`There is no letter ${guess} on the word.`);
    }

    if (hasGuessed()) {
        alert(`Congratulations, You guessed the word ${guessedWord}!`);
        isGameOver = true;
    }
} while (!isGameOver) 