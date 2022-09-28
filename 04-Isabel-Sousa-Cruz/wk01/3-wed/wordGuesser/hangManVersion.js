/*
Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once.
If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0),
and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman),
inform the user that they lost and show a hangman on the log.
*/
const asciiHangman = [ ` 
____
|/   |
|   
|    
| 
|   
|_____
`,
`
 ____
|/   |
|   (_)
|    
|    
|    
|
|_____
`,
`
 ____
|/   |
|   (_)
|    |
|    |    
|    
|_____
`,
`
 ____
|/   |
|   (_)
|   /|\\
|    |
|    
|_____
`,
`
 ____
|/   |
|   (_)
|   \\|/
|    |
|    
|_____
`,
`
 ____
|/   |
|   (_)
|   \\|/
|    |
|   / 
|_____
`,
`
 ____
|/   |
|   (_)
|   \\|/
|    |
|   / \\
|_____
`,
`
 ____
|/   |
|   (_)
|   /|\\
|    |
|   | |
|_____
`
];

const wordToBeGuessed = ["F", "O", "X"];
const guessedWord = ["_", "_", "_"];

const guessedLetter = function(guess) {
    let contains = false;
    for (let i = 0; i < wordToBeGuessed.length; i++) {
        if (guess === wordToBeGuessed[i]) {
            guessedWord[i] = wordToBeGuessed[i];
            contains = true
        }
    }
    return contains;
}

const hasGuessed = function() {
    for (let i = 0; i < wordToBeGuessed.length; i++) {
        if (wordToBeGuessed[i] !== guessedWord[i]) {
            return false;
        }
    }
    return true
}

const hasTriedAlready = function(guess) {
    for (let i = 0; i < triedLetters.length; i++) {
        if (guess === triedLetters[i]) {
            return true;
        }
    }
    return false;
}

const triedLetters = [];
let hangmanStatus = 0;
let isGameOver = false
do {
    const guess = prompt(`Guess a letter:\n${asciiHangman[hangmanStatus]}`);
    const guessUpperCase = guess.toUpperCase();
    
    if (hasTriedAlready(guessUpperCase)) {
        continue;
    }

    triedLetters.push(guessUpperCase);
    
    if (guessedLetter(guessUpperCase)) {
        if (hasGuessed()) {
            alert(`Congratulations, You guessed the word ${guessedWord}!`);
            isGameOver = true;
            continue;
        }
        alert(`You found a letter!\n${guessedWord}`);
    } else {
        alert(`There is no letter ${guessUpperCase} on the word.`);
        hangmanStatus++;
    }
    
    if (hangmanStatus === 6) {
        alert(`You lost!\n${asciiHangman[hangmanStatus]}`);
        isGameOver = true;
    }
} while (!isGameOver) 