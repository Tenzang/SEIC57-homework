// Jiakai Ren
// SEI57 - Homework - Wk01 Tue

// Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (amount) {
    // This function concatenate the string 'dollars' to the end of the input number and returns as a string. Only when the input number is 1000000, this function concatenate 'dollars (pinky)'.

    let numberWithDollar = amount + ' dollars'; // first concatenate 'dollars' to any number

    if (amount === 1000000) {
        numberWithDollar += ' (pinky)'; // only concatenate a further '(pinky)' when the amount is exactly 1000000
    }

    console.log(numberWithDollar);

    return numberWithDollar;
}

DrEvil(1000000);
DrEvil(20);

// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (string1, string2) {
    // This function takes the first two characters of each word and switch them. It returns a new string with switched characters.

    const string1FirstTwo = string1.substring(0, 2);
    const string2FirstTwo = string2.substring(0, 2);

    const newString1 = string2FirstTwo + string1.substring(2);
    const newString2 = string1FirstTwo + string2.substring(2);

    const outputString = newString1 + ' ' + newString2;

    console.log(outputString);

    return outputString;
}

mixUp('east', 'north');

// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

const fixStart = function (string) {
    // This function finds all subsequent characters that match the first character and replace them with '*', it returns a string after replacement.

    const firstLetter = string[0];
    const redactedString = string.replaceAll(firstLetter, '*'); // replaces all matching letters, including the first letter, with a '*'
    const newString = firstLetter + redactedString.substring(1); // the new string will be the stored first letter + all remaining letters from index 1

    console.log(newString);

    return newString;
}

fixStart('tatter');

// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function (string) {
    // This function adds 'ing' to a string that is at least 3 characters long and does not already end in 'ing'. If it does, then add 'ly' instead. It then returns that new string. If the input string is less than 3 characters long, it returns back the same string.

    let newString = string;

    if (string.length >= 3 && string.substring(string.length - 3) === 'ing') {
        newString += 'ly';
    } else if (string.length >= 3) {
        newString += 'ing';
    }

    console.log(newString);

    return newString;
}

verbing('swim');

// Not Bad

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function (string) {
    // This function replaces the first instance of 'not ... bad' with 'good' and returns a new string with replaced words.

    let splitString = string.split(' '); // split the sentence into an array of words
    const splitLastWord = splitString.slice(-1).join('').split(''); // split the last word into an array of characters
    const lastPunctuation = splitLastWord.slice(-1).join(''); // store the punctuation at the end of the last word

    splitLastWord.pop(); // remove the punctuation at the end of the last word in the splitLastWord array

    const lastWord = splitLastWord.join(''); // stitch back the characters of the last word together without the punctuation

    splitString[splitString.length - 1] = lastWord; // replace the last word in splitString with the new last word without punctuation
    
    const indexOfNot = splitString.indexOf('not'); // find the index of first instance of 'not'
    const indexOfBad = splitString.indexOf('bad', indexOfNot); // find the index of first instance of 'bad' only after the first 'bad'. The index returns -1 if none is found

    if (indexOfNot === -1 || indexOfBad === -1) {
        // if either a 'not' is not found OR a 'bad' is not found after a 'not' is true, return the original string

        console.log(string);
        return string;
    }

    const startOfSentence = splitString.slice(0, indexOfNot); // the start of the new sentence will be all words up until 'not'
    const outputSentence =  startOfSentence.join(' ') + ' good ' + splitString.slice(indexOfBad + 1, splitString.length).join(' ') + lastPunctuation; // now join the array of words in startOfSentence, concatenate is with ' good ' and the punctuation at the end of the original sentence

    console.log(outputSentence);
    return outputSentence;
}

  notBad('This dinner is not that bad!');
  notBad('This movie is not so bad!');
  notBad('This dinner is bad!');
  notBad('This dinner is not that bad and horrible.');