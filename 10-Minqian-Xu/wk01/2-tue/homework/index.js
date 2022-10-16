// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = Function (number){
    let squareNumber = number * number;
}
console.log ('The result of squaring the number ${number} is ${squareNumber}')

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = Function (number) {
    let halfNumber = number/2;
}

console.log ('Half of ${number} is ${halfNumber}.')

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = Function (a,b) {
    let percentOf = a/b;
}

console.log ('${a } is ${ percentOf } of ${ b.})');


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = Function (r) {
    areaOfCircle = Math.PI*Math.pow(r,2);

}

console.log('The area for a circle with radius ${ r } is ${ areaOfCircle }.')

// Bonus: Round the result so there are only two digits after the decimal.

const num = areaOfCircle.toFixed(2);

console.log(num)


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const allResult = function(num){
    const half = halfNumber(num);
    const squared = squareNumber(half);
    const area = areaOfCircle(squared);
    percentOf(area, squared);
}

allResult(5)


// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (number){
    console.log('${number } dollars')
}




// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (a,b) {
    console.log('${a }${b}')

}
// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'
// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function (verb) {
    let output = '';
    let verb.length = n;
    if (n >= 3 && verb[n-2] != i && verb[n-1] != n && verb[n] != g){

        output = verb + "ing";

    }
    if (verb.length < 3 && verb[n-2] != i && verb[n-1] != n && verb[n] != g){
        output = verb;
    }
    if (verb[n-2] = i && verb[n-1] = n && verb[n] = g) {
        output = verb + "ly";
    }

 return output

}



// Not Bad
// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
