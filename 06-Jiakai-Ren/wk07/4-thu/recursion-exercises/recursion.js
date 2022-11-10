// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index=0, maxNum=-Infinity){
    // This function returns the largest number in a given array.
    if (index === arr.length) return maxNum;
    if (arr[index] > maxNum) {
        maxNum = arr[index];
    }
    return findMax(arr, index + 1, maxNum);
}

function factorial(number){
    // This function returns the factorial of a given number.
    if (number === 1) return 1;
    return number * factorial(number - 1);
}

function fibonacci(number){
    // This function returns the Nth number in the fibonacci sequence.
    if (number === 2 || number === 1) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    if (n === 0) return [''];
    return coinFlips(n - 1).map(c => [c + 'H', c + 'T']).flat();
}

function letterCombinations(letters){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    if (letters.length === 0) return [''];

    return letterCombinations(letters.slice(1)).map(c => c)
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}