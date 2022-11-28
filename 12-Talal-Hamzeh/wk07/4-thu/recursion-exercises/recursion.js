// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(testArray){
    // This function returns the largest number in a given array.
    let max = -Infinity;
    // This function returns the largest number in a given array.
  for (let i = 0 ; i< testArray.length; i++){
    let x= testArray[i]

        if (Array.isArray(x)){
            x = findmax(x);
        }
        if (x> max){
            max = x;
        
        }
    
  }
    return max; 
}

function factorial(x){
    // This function returns the factorial of a given number.

    if (x === 0)
    {
       return 1;
    }
     return x * factorial(x-1);
}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1

    if (n <= 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}



function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    if (n <= 0)
    return ['']
    return coinFlips (n - 1) .flatMap (r => [r + 'H', r + 'T'])
}

function letterCombinations(arr){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    if (arr.length === 0) return [];
    const combinations = [...arr];
    arr.forEach((letter) => {
      if (letter !== arr.last) {
        for (let subResult of letterCombinations(arr.filter((l) => l != letter))) {
          combinations.push(`${letter}${subResult}`);
        }
      }
    });
  
    return combinations;
  }


module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}