// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. 
const drEvil = function(amount) {
    if (amount == 1000000) {
        console.log(`${amount} dollars (pinky)`);
    } else {
        console.log(`${amount} dollars`);
    }
})

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

const mixUp = function(string1, string2) {
    return b.slice(0,2) + a.slice(2) + " " + a.slice(0,2) + b.slice(2);
}

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long.
const fixStart = function(string1) {
    return charAt(0) + p.replace('', '*')); 
    // Not sure how to use the p replace function
}

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
const verbing = function(string1) {
    if (string1.length < 3)
    return string1;
    if (string1.slice(-3) == 'ing'){
    return string1 + 'ly';
}
    else {
        return string1 + 'ing';
    }
}

// Create a function called notBad that takes a single argument, a string.

//     It should find the first appearance of the substring 'not' and 'bad'.
//     If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//     If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
const notBad = function(string1) {
    if (!string1.includes('not') && string1.includes('bad')){
    return Text.indexOf("not") + Text.indexOf("bad");
    } else if {
        (Text.indexOf("not") < Text.indexOf("bad")){
            return text.replace("not",good") + text.replace("bad","good")
        }
    } else {
    return string1
    }
    
}

// This is a sad attempt, it's unfinished 
