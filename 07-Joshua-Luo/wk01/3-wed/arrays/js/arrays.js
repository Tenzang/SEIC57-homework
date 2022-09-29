// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
    if (a >= b) {
        return a;
    }else {
        return b;
    }
};
console.log(maxOfTwoNumbers(3,5));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }else if (b >= a && b >= c) {
        return b;
    }else {
        return c;
    }    
};
console.log(maxOfThree(34,68,99));
console.log(maxOfThree(68,99,34));
console.log(maxOfThree(99,34,68));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function (char) {
    let judgement = (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');
    if (judgement) {
        return true;
    } else {
        return false;
    }
};

console.log(isVowel('a'));
console.log(isVowel('b'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all
//  the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (arr) {
    let sums = 0;
    for (let i = 0; i < arr.length; i++) {
        sums = sums + arr[i];
    }
    return sums;
};

const multiplyArray = function (arr) {
    let multiplies = 1;
    for (let i = 0; i < arr.length; i++) {
        multiplies = multiplies * arr[i];
    }
    return multiplies;
};

arr1 = [2,5,10,9]
console.log(sumArray(arr1));
console.log(multiplyArray(arr1));

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") 
// should return the string "ratset gaj".

const reverseString = function (str) {
    let reverseStr = "";
    for (let i = 0; i < str.length; i++ ) {
        reverseStr = reverseStr + str[str.length - i -1];
    }
    return reverseStr;
};
console.log(reverseString('abcdefg'));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function (arr) {
    let longestLen= "";
    for (let i = 0; i < arr.length; i++ ) {
        if (i === 0) {
            longestLen = arr[0].length; 
        } else if(arr[i].length > longestLen) {
            longestLen = arr[i].length;
        }    
    }
    return longestLen;
};

console.log(findLongestWord(["1","22","333","4444"]));
console.log(findLongestWord(["22","333","4444","1"]));
console.log(findLongestWord(["333","4444","1","22"]));
console.log(findLongestWord(["4444","1","22","333"]));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array 
// of words that are longer than i.
const filterLongWords = function (arr, j) {
    let longerWord =[];
    for (let i = 1; i < arr.length; i++) {
        if  (arr[i].length > j){
            longerWord.push(arr[i]);
        }
    }
    return longerWord;
};

console.log(filterLongWords(["1","22","333","4444","5555"],3));


// Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word 
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

//     Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to 
//     hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//     Write a function called guessLetter that will:
//     Take one argument, the guessed letter.
//     Iterate through the word letters and see if the guessed letter is in there.
//     If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
//     When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user 
//     if they found a new letter.
//     It should also figure out if there are any more letters that need to be guessed, and if not, it 
//     should congratulate the user for winning the game.
//     Pretend you don't know the word, and call guessLetter multiple times with various letters to check 
//     that your program works.

// Bonus: Make it more like Wheel of Fortune:

//     Start with a reward amount of $0
//     Every time a letter is guessed, generate a random amount and reward the user if they found a letter 
//     (multiplying the reward if multiple letters found), otherwise subtonract from their reward.
//     When they guess the word, log their final reward amount.

// Bonus: Make it like Hangman:

//     Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. 
//     If they guess a letter twice, do nothing.
//     Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that 
//     number every time they make a wrong guess.
//     Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that 
//     they lost and show a hangman on the log.

let letterOfWord = ['F','O','O','X'];
let guessedWord = ['_','_','_','_'];
let totalReward =0;


const amountOfLetter = function (guessedLetter) {
    amountL = 0;
    for (let i = 0; i < letterOfWord.length; i++){
        if (letterOfWord.indexOf(letterOfWord[i]) !== -1) {
            amountL = amountL + 1;
    }
    return amountL;
    }
}
const guessLetter = function (guessedLetter) {
    
    if (letterOfWord.indexOf(guessedLetter) != -1) {
        for (let i = 0; i < letterOfWord.length; i++){
            if (letterOfWord[i] === guessedLetter) {
                guessedWord[i] =  guessedLetter;
            } 
        }
        console.log(`Now the word is ${guessedWord}`);
        const reward = ((Math.random() * 10).toFixed(2)) * amountOfLetter(guessedLetter);
        console.log(reward);
        totalReward = totalReward + Number(reward);
        console.log("Now your reward is: ", reward, "and your total reward is:", totalReward);

        if (!guessedWord.includes('_')){
            console.log('Congradulation!!! You win the game! Your total reward is:',totalReward);
        }
    } else {console.log('sorry, please try again.');} 
    
};


guessLetter('E');
guessLetter('F');
guessLetter('G');
guessLetter('X');
guessLetter('O');