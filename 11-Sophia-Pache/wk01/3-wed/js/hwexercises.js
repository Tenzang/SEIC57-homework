// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(maxOfTwoNumbers(1,2))
console.log(maxOfTwoNumbers(5,200))
console.log(maxOfTwoNumbers(90,14))

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (n1, n2, n3) {
    if ((n1 >= n2) && (n1 >= n3)) { 
        return n1;
    } else if ((n2 >= n1) && (n2 >= n3)) {
        return n2;
    } else {
        return n3;
    }
}

console.log(maxOfThree(1,2,3))
console.log(maxOfThree(5,200,43))
console.log(maxOfThree(90,14,2))

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowels = ['a','e','i','o','u']
const vowelCheck = function (word) {
		for (i=0; i < vowels.length; i++){
        if(word === vowels[i]) {
            return true;
        } else {
        		return false;
        }
}
}
console.log(vowelCheck('a'))
console.log(vowelCheck('b'))
console.log(vowelCheck('c'))


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

*******
const array1 = [3,10,5,2,6];

const sumArray = function (array) {
	const value = 0;
    for (let i=0; i<array.length; i+=1) {
        let value += array[i];
        return value;
    }
}
const array = [2,3,6]
function multiplyArray(array) {
	const value = 1;
	for (var i = 0; i < array.length; i++) {
		value = (value * array[i]);
	}
	return value;
}

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString= function(string) {
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
};

console.log(reverseString('jag testar'))

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
******
const start = 0;
const findLongestWord= function(array) {
for (i = 0; i < array.length; i++) {
    if ( array[i].length > start.length ) {
        start = array[i];
    }
}
}
console.log(findLongestWord('an','ban','elephant'))

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
*****
const array1 = ['coffee','tea','water']
const filterLongWords= function(array1,i) {
    const output =  [];
    if (array1[i].length > i) {
        return output.append(array1[i]);
    }
}

console.log(filterLongWords('array1', 4))