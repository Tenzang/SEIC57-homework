// Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function ( money ){
    if (money === 1000000){
        return `${money} dollars (pinky)`;
    }
    else{
        return `${money} dollars`;
    }

};

console.log(DrEvil(10));
console.log(DrEvil(1000000)); // testing both options


// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function ( str1, str2 ){  //function to take in 2 strings
    
    const mix1 = str2.substring(0,2)+str1.substring(2); //first 2 lets of the second string + first string excluding char 1 and 2
    const mix2 = str1.substring(0,2)+str2.substring(2);
    const mixString = `${mix1} ${mix2}`;
    return mixString;
};

console.log( mixUp('dog', 'dinner'));
console.log( mixUp('mix', 'pod')); // testing the 2 provided examples
console.log( mixUp('hi', 'by')); // testing for the min 2 char in strings


// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'


const fixStart = function (string){
    const firstChar = string.charAt(0);
    let newString = firstChar;
    for (let i = 1; i < string.length; i++){  // let i = 1 not 0 to skip the first char already obtained
        if (string[i] === firstChar){
            newString += "*";                 // replace with star is same as first char
        }else{
            newString += string[i];           // if not same add original char back in
        }
    }
    return newString;
};

console.log(fixStart('babble')); // test of example 
console.log(fixStart('envelope')); // another test


// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(string){
    if (string.length < 3 ){
        return string;
    }else if (string.slice(-3) === "ing"){
        return string + "ly";
    }else{
        return string + "ing";
    }
};

console.log(verbing('swim'));     // note the expected return also adds an "m" for swimming this is edge case....
console.log(verbing('swimming'));
console.log(verbing('go'));        // test of the 3 cases 


// Not Bad

// Create a function called notBad that takes a single argument, a string.

//     It should find the first appearance of the substring 'not' and 'bad'.
//     If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//     If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


const containsNot = function (string){           // function that returns true if the word "not" is in the string and the location of the word using index notation.
    const bolVal = string.includes("not");
    const index = string.indexOf('not');
    return [bolVal, index];
};

const containsBad = function (string){           // function that returns true if the word "bad" is in the string and the location of the word using index notation.
    const bolVal = string.includes("bad");
    const index = string.indexOf('bad');
    return [bolVal, index];
};

console.log(!containsNot("This dinner is not that bad!")[0]);


const notBad = function (string){
    if (!containsNot(string)[0]){   // checks if not is in the string
        return string;                                                                
    }else if (!containsBad(string)[0]){  // checks if bad is in the string
        return string;
    }else if (containsBad(string)[1] < containsNot(string)[1]){ // checks if not comes before bad
        return string;
    }else{
        const indexBad = containsBad(string)[1];
        const indexNot = containsNot(string)[1];
        return string.substring(0,indexNot) + "good" + string.substring(indexBad + 3); // use the index of not and bad to remove section of string and replace with good.
    }
};


console.log(notBad('This dinner is not that bad!'))
console.log(notBad('This movie is not so bad!'))
console.log(notBad('This dinner is bad!'))  // test of the 3 examples