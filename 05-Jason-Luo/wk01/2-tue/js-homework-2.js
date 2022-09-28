// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.
const drEvFunds = function drEvil(amount) {
    if (amount == 10000000) {
        return amount + 'dollars (pinky)';
    }
    else {
        return amount + 'dollars';

    }
}

drEvFunds(14500);
drEvFunds(145000000);

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.
const mashString = function mixUp(str1, str2) {
    return str2.slice(0, 2) + str1.slice(2) + " " + str1.slice(0, 2) + str2.slice(2);
}

mashString(happy, dancing);
mashString(awesome, boat);

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long.

const repeatSta = function fixStart(phrase) {
    var pattern = phrase.charAt(0); //identify and select first character
    return pattern + phrase.slice(1).replace(new RegExp(pattern, "g"), "*");
} //isolating the first character, then slicing the rest of the word, matching the isolated letter with the g tag (global search tag), and replacing it with the * symbol.

repeatSta(goggle);
repeatSta(bubbles);

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 

const gramm = function verbing(words) {
    if (words.length < 3) {
        return words
    };

    if (words.slice(-3) == 'ing') {
        return words + 'ly';
    }
    else {
        return words + 'ing'; //similar to first problem
    }

}

gramm('maddening');
gramm('run');
gramm('as');

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const editSen = function notBad(argument) {
    const notLocator = argument.indexOf('not');
    const badLocator = argument.indexOf('bad'); //find the first appearance of the substring

    if (notLocator == -1 || badLocator == -1 || notLocator > badLocator) {
        return argument; //-1 implies not present
    }
    return argument.slice(0, notLocator) + 'good' + argument.slice(badLocator + 3);// making sure that bad is deleted in final edited sentence.
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));