// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array){
    let maxNumber = array[0];
    let index = 0;
    const max = function(){
        if(index === array.length) return maxNumber
        if(array[index] > maxNumber){
            maxNumber = array[index]
        }
        index ++;
        return max()
        }
    return max()
}

    // This function returns the largest number in a given array.

function factorial(number){
    if(number === 1) return 1
    else{
        return number * factorial(number - 1)
    }
}

function fibonacci(number){
    if (number === 1) return 1
    else if(number === 2) return 1
    else{
        return fibonacci(number - 1) + fibonacci(number - 2)
    }
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(number){
    if(number === 0) return ['']
    else{
        return coinFlips(number-1).map(toss => [toss + 'H', toss + 'T']).flat() ;
    }
    
    
    
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}