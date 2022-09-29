/*
Write a function findLongestWord that takes an array of words and returns 
the length of the longest one.
*/

const findLongestWord = function(words) {
    let longest = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }
    return longest;
}

const words1 = ["dog", "house", "computer"];
const words2 = ["ambient", "house", "log"];

console.log(findLongestWord(words1));
console.log(findLongestWord(words2));