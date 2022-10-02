/*
Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found 
a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.
*/

const wordToBeGuessed = ["F", "O", "X"];
// const guessedWord = ["_", "_", "_"];
const guessWord = [];
for (let i = 0; i < wordToBeGuessed.length; i ++) {
    guessWord.push("_");
}

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
let reward = 0;
let multiplier = 1;
do {
    const randomReward = Math.round(Math.random() * 100);
    const guess = prompt("Guess a letter:");
    if (guessedLetter(guess.toUpperCase())) {

        if (hasGuessed()) {
            reward += randomReward * multiplier;
            multiplier++;

            alert(`Congratulations, You guessed the word ${guessedWord}!\n
                You won ${reward} points for that!`);
            isGameOver = true;
            continue;
        }

        alert(`You found a letter!\n${guessedWord}`);
        reward += randomReward * multiplier;
        multiplier++;
    } else {
        alert(`There is no letter ${guess} on the word.`);
        reward -= randomReward;
        multiplier = 1;
    }
} while (!isGameOver) 