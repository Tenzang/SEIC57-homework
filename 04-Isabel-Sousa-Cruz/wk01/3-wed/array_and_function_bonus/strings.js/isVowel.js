/*
Write a function that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise.
*/

const isVowel = function (char) {
    if (char.length > 1) {
        console.log("Can accept only one letter!");
        return false;
    }
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}