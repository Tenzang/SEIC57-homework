console.log(Hi); 

// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwo(x, y) {
    if (x >= y) {
        return x; 
    } else if (y >= x) {
        return y;
    }
}
console.log(maxOfTwo(10,15)); 

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}
console.log(maxOfThree(343,35124,42)); 

// Write a function that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise.

function vowelChecker (char) {
 
    if (char === 'a'||'e'||'i'||'o'||'u') {
        return "The character is a Vowel";
    }
    else {
    return "The character is a Consonant";
    } 
}
console.log (vowelChecker ("e"));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
