
// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)


const drEvil = function (a) {
  if (a === 1000000){
    return `DrEvil (${a}): ${a} dollars (pinky)`;
  }
  else {
    return `DrEvil (${a}): ${a} dollars`;
  }
}
console.log(drEvil(19));

// //  OR

const drEvil = function (a) {
  if (a < 1000000){
    return `DrEvil (${a}): ${a} dollars`;
  }
  else {
    return `DrEvil (${a}): ${a} dollars (pinky)`;
  }
}
console.log(drEvil(10));

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (a,b) {
  return `mixUp (${a}, ${b}): ${b} ${a}`;
}
console.log(mixUp("berry", "sorry"));

  
 
  