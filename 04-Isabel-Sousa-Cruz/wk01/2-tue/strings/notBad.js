/*
Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
*/

const notBad = function(str) {
    for (let i = 3; i < str.length; i++) {
        const current3LetterWord = str.substring(i - 3, i);

        if (current3LetterWord === "not") {
            for (let j = i; j < str.length; j++) {
                const current3LetterWord = str.substring(j - 3, j);
                if (current3LetterWord === "bad") {
                    return str.substring(0, i - 3) + "good" + str.substring(j);
                }
            }
        }
    }
    return str;
}

console.log(notBad("This dinner is not that bad! and blabla"));
console.log(notBad("This movie is not so bad!"));
console.log(notBad("This dinner is bad!"));