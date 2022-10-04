// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


//creates an empty array with the length of the word to guess
const emptyArray = function (array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push("_");
    }
    return newArray;
};

//function to check if all the letters have been guessed and word is completed
const checkCompleteWord = function (array){
    let flag = true;
    for (let i = 0; i < array.length; i++){
        if (array[i] === "_"){
        flag = false;
        }
    }
    return flag;
};



// input the word to guess in the below array
const wordToGuess = ["F","O","O","L"];
let emptyWordToGuess = emptyArray(wordToGuess);


//function that gives feeback on a correct or incorrect guess

const guessLetter = function (char){
    //determine if the char is in the wordToGuess array
    let findletter = false;
    for (let i = 0; i < wordToGuess.length; i++){
        if (char.toUpperCase() === wordToGuess[i]){
            emptyWordToGuess[i] = char.toUpperCase();
            findletter = true;
        }
    }
    if (findletter){
        console.log(`Congrates there was an "${char}" in the word`);
        console.log(emptyWordToGuess);
    }else{
        console.log(`Sorry no "${char}" in the word`);
        console.log(emptyWordToGuess);
    }

    // check if the word has been completed
    
    if (checkCompleteWord(emptyWordToGuess)){
        console.log('Woohoo! you found the word.');
    }else{
        console.log('Keep going still more letters to guess');
    }
    
};


// while loop to prompt the user for letter guesses
// allows a maxium of 10 guesses
// prompts the user if have made an incorrect input type ie number or more than 1 letter or nothing.

let counter = 10;
while (!checkCompleteWord(emptyWordToGuess) && counter > 0){
    let askQuestion = prompt(`Guess a letter to solve the word only ${counter} guesses remaining`)
    if (typeof askQuestion === "number" || askQuestion.length > 1 || askQuestion.length === 0){
        console.log("Incorrect input - chose 1 letter");
    }else{
        guessLetter(askQuestion);
        if (counter === 1){
            console.log('Sorry that was your last guess better luck next time');
            counter = counter - 1;
        }
    counter = counter - 1;

    }
};


// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.