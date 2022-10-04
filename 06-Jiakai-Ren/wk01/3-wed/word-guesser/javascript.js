// Jiakai Ren
// SEI 57 - Wk01 Wed Homework

// # Homework: The Word Guesser

// -- CHANGE WORD BELOW ----------------------------

const word = 'apple';

// -------------------------------------------------

const wordSplit = word.split('');   // split the word into an array of words
const currentGuessedLetters = [];   // where correctly guessed letters live
const previousGuessedLetters = [];  // will lag behind the currentGuessedLetters array by 1 iteration for comparison
const wrongLetters = [];            // stores of wrongly guessed letters

let reward = 0;                     // set initial reward to 0
let lives = 6;                      // set initial lives to 6
let thisPrize;                      // tracks how much the reward is for one round including multiple letters
let thisPrizeSingle;                // tracks how much the reward is for one round for a single letter
let prizeCountGlobal;               // tracks how many correct letters are guessed in one round
let additionalMessage;              // stores the message when multiple letters are guessed in one round
let gotNothingWrongMessage = '';    // stores the message when the player wins without any wrong letters

for (let h = 0; h < wordSplit.length; h++) {
    // populate both arrays with underscores to the length of the word

    currentGuessedLetters.push('_');
    previousGuessedLetters.push('_');
}

welcomeMessage();

function guessLetter (guessedLetter) {
    // This function plays a hangman game with a wheel of furtune.

    if (lives <= 0) {
        console.log('No more lives!');
        return;
    } else if (currentGuessedLetters.indexOf('_') === -1) {
        // indexOf returns -1 when '_' is not found

        console.log('You have already won!');
        return;
    }

    if (currentGuessedLetters.indexOf(guessedLetter) !== -1 || wrongLetters.indexOf(guessedLetter) !== -1) {
        // indexOf does not return -1 when guessedLetter already exist in either arrays
        
        reusingLetter(guessedLetter);
        
    } else if (wordSplit.indexOf(guessedLetter) !== -1) {
        // if guessedLetter exist in the word array, that means correct letter guessed

        for (let i = 0; i < wordSplit.length; i++) {
            // replace all correct letters in word array with guesseLetter

            const indexMatchingWord = wordSplit.indexOf(guessedLetter, i);
            currentGuessedLetters[indexMatchingWord] = guessedLetter;
        }

        // After replacing the letters

        if (currentGuessedLetters.indexOf('_') === -1) {
            // if there are no more '_' to be guessed -> won

            giveMoney();
            youWon();
        } else {
            // correct letter guessed, but not won yet

            giveMoney();
            correctLetter(guessedLetter);
        }
        
    } else {
        // if guessedLetter does NOT exist in word array, wrong letter guessed

            wrongLetters.push(guessedLetter);       // add guessedLetter to wrongLetters array
            putMicrosoftToSleep(guessedLetter);

            // after subtracting lives

            if (lives === 0 ) {
                // if lives is now 0, exit function

                return;
            }

            wrongLetter(guessedLetter);     // run this function if lives is not 0
    }
};

function reusingLetter (guessedLetter) {
    // this function console logs a message when repeated letters are used

    console.log(`Stop taking the piss! You have used (${ guessedLetter }) before! The word is currently: \n\n${ currentGuessedLetters.join(' ') }\n `);
};

function youWon() {
    // this function gives streak bonus and console logs winning message

    if (wrongLetters.length === 0) {
        //  after youWon() is called and there are nothing in wrongLetters array -> streak

        const bonus = 100;
        thisPrize += bonus;
        reward += bonus;
        gotNothingWrongMessage = '(Including streak bonus: $100)';  // this is added in console log
    }

    console.log(`Congratulations! The word is \n\n${ currentGuessedLetters.join(' ') }\n\nYou earned $${ thisPrize.toFixed(2) } for ${ prizeCountGlobal } correct letter(s)${ additionalMessage }\n${ gotNothingWrongMessage }\nTotal money earned: $${ reward.toFixed(2) }`);
};

function correctLetter(guessedLetter) {
    // this function console logs message when a correct letter is guessed
    // includes additionalMessage for multiple letters guessed correctly

    console.log(`(${ guessedLetter }) is correct! The word looks like this now: \n\n${ currentGuessedLetters.join(' ') } \n\nYou earned $${ thisPrize.toFixed(2) } for ${ prizeCountGlobal } correct letter(s)${ additionalMessage }\nTotal prize: $${ reward.toFixed(2) }`);
};

function wrongLetter(guessedLetter) {
    // this function console logs message when a wrong letter is guessed

    console.log(`(${ guessedLetter }) is wrong!! The word still looks like this: \n\n${ currentGuessedLetters.join(' ') }\n\nYou have ${ lives } chance(s) left!`);
};

function welcomeMessage() {
    // this function console logs a welcome message

    console.log (`Welcome! The word is ${ wordSplit.length } letters long.\nYou will be rewarded a random amount of between $0 to $10 for each correct letter.\nYou have ${ lives } lives.`);
}

function giveMoney () {
    // this function gives a random amount of money when called

    let prizeCount = 0;     // for multiple letters guessed correctly

    for (let i = 0; i < wordSplit.length; i++) {
        if (previousGuessedLetters[i] !== currentGuessedLetters[i]) {
            // compares two arrays to figure out the difference -> numbers of letters changed

            prizeCount++;       // add 1 for every correct letter
        }
    }

    for (let j = 0; j < currentGuessedLetters.length; j++) {
        // updates the previousGuessedLetters for it to be used in the next iteration

        previousGuessedLetters[j] = currentGuessedLetters[j];
    }

    prizeCountGlobal = prizeCount;              // for message purposes
    thisPrizeSingle = Math.random() * 10;       // gives a number between 0 to 10
    thisPrize = thisPrizeSingle * prizeCount;   // prize for this round = prize per letter * #letters
    reward += thisPrize;                        // updates total amount earned

    if (prizeCount > 1) {
        // additionalMessage only activated when prizeCount > 1

        additionalMessage = `\n(@ $${ thisPrizeSingle.toFixed(2) } a letter)`;
    } else {
        additionalMessage = ``;
    }

    return;
};

function putMicrosoftToSleep (letter) {
    // this function subtracts lives by 1

    lives--;

    // After subtracting lives

    if (lives === 0) {
        // if lives is zero -> dead

        console.log(`Unfortunately, (${ letter }) is also wrong. The word is:\n\n${ word }\n\nAnd now Microsoft is dead. Your $${ reward.toFixed(2) } has been used to purchase the rope.\n\n==+==+==============\n  | /       |\n  |/        |\n  |         |\n  |      ---+---\n  |      |  |  |\n  |      |--+--|\n  |      |  |  |\n  |      ---+---\n  |\n  |\n  |\n==+==`)
    }
};

// guessLetter('e');
// guessLetter('t');
// guessLetter('a');
// guessLetter('a');
// guessLetter('a');
// guessLetter('k');
// guessLetter('r');
// guessLetter('r');
// guessLetter('m');
// guessLetter('n');
// guessLetter('o');
// guessLetter('l');
// guessLetter('q');
// guessLetter('q');