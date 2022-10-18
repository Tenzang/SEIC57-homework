// # Leap Year
// Create a function in JS that will take any given year and return whether it is a leap year or not.

// Remember that a leap year is:
// - Every year that is evenly divisible by 4...
// - Except if it evenly divisibly by 100...
// - Unless it is also divisible by 400

const leapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0
        || year % 400 === 0) {
        return 'true';
    } else {
        return 'false';
    }
    }

// OR
const leapYear2 = function(year) {
    return year % 4 === 0 && year % 100 !== 0
        || year % 400 === 0;
}

console.log(leapYear(1997));
console.log(leapYear(1996));
console.log(leapYear(1900));
console.log(leapYear(2000));


// ### Examples:
// ``` JS
// isLeapYear(1997); // => false
// isLeapYear(1996); // => true
// isLeapYear(1900); // => false
// isLeapYear(2000); // => true
// ```

// ### Bonus
// Ask the user what number they want to test.

// Watch a whole heap of information about leap years...

// http://www.youtube.com/watch?v=xX96xng7sAE