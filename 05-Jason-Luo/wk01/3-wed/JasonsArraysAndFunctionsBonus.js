// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const largestNumbers = function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}.`);
    } else
        if (num1 > num2) {
            console.log(`${num1} is larger than ${num2}.`);

        }
    return maxOfTwoNumbers;
}

console.log(largestNumbers(23, 456));
console.log(largestNumbers(48, 22));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const threeNumbers = function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is larger than ${num2} and ${num3}.`);
    } else
        if (num2 > num1 && num2 > num3) {
            console.log(`${num2} is larger than ${num1} and ${num3}.`);

        } else
            if (num3 > num1 && num3 > num1) {
                console.log(`${num3} is larger than ${num1} and ${num2}.`);

            }
    return maxOfThree;
}

console.log(threeNumbers(346, 572, 458));
console.log(threeNumbers(51, 77, 83));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function words(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    console.log(vowels.includes(string));

    // if (string == vowels) {
    //     console.log(`${string} is a vowel.`);
    // } else {

    //     console.log(`${string} is NOT a vowel.`);
    // }
    return words;
}

words('a');
words('k');

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

//Addition
function sumArray(numberSet) {
    let total = 0;
    for (let i = 0; i < numberSet.length; i++) {
        total += numberSet[i]; //allows addition of ascending numbers
    }
    return total;
}
console.log(' Total Sum of Array: ' + sumArray([1, 2, 3, 4]));


function multiplyArray(numberSet) {
    let total = 1;
    for (let i = 0; i < numberSet.length; i++) {
        total *= numberSet[i]; //allows multiplication of ascending numbers
    }
    return total;
}
console.log('Total Multiplication of Array: ' + multiplyArray([1, 2, 3, 4]));

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

let newString = " ";

const mirror = function reverseString(text) {
    for (let i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }
    return newString;
}

console.log(mirror('jag testar'));
let string = 'ratset gaj';
console.log(newString === text);

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(string) {
    let longWord = 0;
    let array = string.split(' ');
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longWord) {
            longWord = array[i].length;
        }
    }
    return longWord;
}

findLongestWord("The small white rabbit jumped over slow green turtle.");

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

function filterLongWords(array, number) {
    let newArray = []; //set empty array form

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > number) {
            newArray = push(array[i]); //pushes the words longer than i into new array.
        }
    }
    return newArray;
}

filterLongWords(['Cat', 'Dragon', 'Snake', 'Crocodile', 'Shark']);
