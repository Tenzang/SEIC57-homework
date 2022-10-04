// Array and Functions Bonus Material

//     Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a,b){
    if (a > b){
        return a;
    }else{
        return b;
    }
};

console.log(maxOfTwoNumbers(10, 20));
console.log(maxOfTwoNumbers(2, 15));



//     Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a,b,c){
    return maxOfTwoNumbers(maxOfTwoNumbers(a,b),c)
};

console.log(maxOfThree(10,15,20));
console.log(maxOfThree(20,15,5));


//     Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function (char){
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        return true;
    }else{
        return false;
    }
};

console.log(isVowel("a"));
console.log(isVowel("u"));
console.log(isVowel("p"));
console.log(isVowel("t"));


//     Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (numArray){
    let sum = 0;
    for (let i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }
    return sum;
};

console.log(sumArray([1,2,3,4]));


const multiplyArray = function (numArray){
    let multiply = 1;
    if(numArray.length === 0){
        return 0;
    }else{
        for (let i = 0; i < numArray.length; i++){
            multiply = multiply * numArray[i];
        }
        return multiply;
    }
};

console.log(multiplyArray([1,2,3,4]));


// Bonus

//     Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (string){
    let revString = "";
    for (let i = 0; i < string.length; i++){
        revString += string.substring(0,string.length-i).slice(-1);
    }
    return revString;
};

console.log(reverseString("jag testar"));

//     Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const filterLongWords = function (arrayWords,num){
    let longWords = [];
    for (let i = 0; i < arrayWords.length; i++){
        if (arrayWords[i].length > num){
            longWords.push(arrayWords[i]);
        }
    }
    return longWords;
};

console.log(filterLongWords(['football','basketball','tennis','golf','handball'],6));


//     Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function (arrayWords){
    longestWord = "";
    for (let i = 0; i < arrayWords.length; i++){
        if (arrayWords[i].length > longestWord.length){
            longestWord = arrayWords[i]
        }
    }
    return longestWord.length;
};

console.log(findLongestWord(['football','basketball','tennis','golf','handball']));