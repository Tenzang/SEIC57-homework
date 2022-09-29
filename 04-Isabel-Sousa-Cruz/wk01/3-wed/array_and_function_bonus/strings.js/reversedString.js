/*
Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = function (str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        const currentChar = str[i];
        reversed += currentChar;
    }
    return reversed;
}

console.log(reverseString("jag testar"));