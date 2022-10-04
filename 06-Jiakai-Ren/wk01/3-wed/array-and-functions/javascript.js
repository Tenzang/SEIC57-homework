// Jiakai Ren
// SEI 57 - Wk01 Wed Homework

// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwoNumbers (a, b) {
    // This functions compares a and b and returns the larger number.

    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log( `You passed in 5 and 7, and the largest number is ${ maxOfTwoNumbers(5, 7) }`);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

function maxOfThree (a, b, c) {
    // This function compares a, b and c and returns the largest number.

    return Math.max(a, b, c);
};

console.log(`Max number is ${ maxOfThree(12, 24, 10) }`);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel (letter) {
    // This function checks if letter is a vowel (a, e, i, o, u) and returns true or false.

    if (['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1) {     // if indexOf(x) returns -1 if x does not exist in the array
        return true;
    } else {
        return false;
    }
};

console.log(`Is 'e' a vowel? ${ isVowel('e')}`);
console.log(`Is 'f' a vowel? ${ isVowel('f')}`);

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

function sumArray (numArray) {
    // This function returns the sum of all numbers in numArray.

    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }

    return sum;
};

function multiplyArray (numArray) {
    // This function returns the product of all numbers in numArray.

    let product = 1;

    for (let i = 0; i < numArray.length; i++) {
        product *= numArray[i];
    }

    return product;
};

console.log(`The sum is ${ sumArray([1, 2, 3, 4]) }`);
console.log(`The product is ${ multiplyArray([1, 2, 3, 4, 5]) }`);

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString (string) {
    // This function returns string in reversed order.

    let reversedString = '';

    for (let i = 0; i < string.length; i++) {
        reversedString += string[string.length - i - 1];
    }

    return reversedString;
};

console.log(`The reversed string is ${ reverseString('apple pie') }`);
console.log(`The reversed string is ${ reverseString('banana is anana') }`);

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

function findLongestWord (wordArray) {
    // This function returns the longest word in wordArray.

    let currentLongestLength = 0;

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > currentLongestLength) {
            currentLongestLength = wordArray[i].length;
        }
    }

    return currentLongestLength;
};

console.log(`The longest word is ${ findLongestWord(['apple', 'be', 'maccas', 'exit']) } letters long`);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

function filterLongWords (i, array) {
    // This function returns a new array which only includes the elements that are longer than i in array.

    let arrayToReturn = [];

    for (let j = 0; j < array.length; j++) {
        if (array[j].length > i) {
            arrayToReturn.push(array[j]);
        }
    }

    return arrayToReturn;
};

console.log(`Filtered words are ${ filterLongWords(5, ['be', 'apple', 'maccas', 'hungry-jacks', 'kfc', 'pizza-hut']) }`);