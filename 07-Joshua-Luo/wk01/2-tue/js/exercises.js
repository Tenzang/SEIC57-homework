// The Calculator
// Part 1

//     Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
//     It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(number){
    const square = Math.pow(number,2);
    console.log(`The result of squaring the number ${number} is ${square}.`);
    return square;
}

squareNumber(3);
squareNumber(4);

//     Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. 
//     It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(number){
    const half = number/2;
    console.log(`Half of ${number} is ${half}.`);
    return half;
}
halfNumber(7);
halfNumber(2.5);

//     Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, 
//     and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(number1,number2){
    const percentage = number1/number2*100;
    console.log(`${number1} is ${percentage}% of ${number2}.`);
    return percentage;
}
percentOf(1,5);
percentOf(3,5);

//     Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. 
//     It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//     Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function(radius){
    const area = (Math.PI * Math.pow(radius,2)).toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${area}.`)
    return area;
}
areaOfCircle(2);
areaOfCircle(3);

// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

//     Take half of the number and store the result.
//     Square the result of #1 and store that result.
//     Calculate the area of a circle with the result of #2 as the radius.
//     Calculate what percentage that area is of the squared result (#3).

const calculate = function(number){
    const halfN = halfNumber(number);
    const squareN = squareNumber(halfN);
    const areaOfCircleN = areaOfCircle(squareN);
    const result3 = squareNumber(areaOfCircleN);
    const percentOfN = percentOf(areaOfCircleN,result3);
}
calculate(2);

// Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript 
// strings reference to find useful string methods to call.
// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if 
// the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

function DrEvil(amount){
    let end;
    if (amount === 1000000){
        end = ' (pinky)';
    }
    else{
        end = '';
    }
    // console.log(`DrEvil(${amount}): ${amount} dollars ${end}`);
    return (`${amount} dollars ${end}`);
}

console.log(DrEvil(1));
console.log(DrEvil(1000000));
// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing 
// out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

function mixUp(string1,string2){
    let len1=String(string1).length;
    let len2=String(string2).length;
    let newString1;
    let newString2;
    if(len1>=2 & len2>=2){
        newString1=String(string2).substring(0,2)+String(string1).substring(2);
        newString2=String(string1).substring(0,2)+String(string2).substring(2);
    }
    // console.log(`mixUp('${string1}', '${string2}'): '${newString1} ${newString2}'`);
    return `${newString1} ${newString2}`;
}

console.log(mixUp(123456,654321));


// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character 
// have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

function fixStart(string3){
    let str3=String(string3);
    let len3=str3.length;
    let arr = "";
    for(let i =0; i<len3; i++){
        // let countL= arr.split(str3[i])
        // console.log(countL);
        if (arr.indexOf(str3[i]) === -1){
            
            arr=arr+str3[i];
            // console.log(arr);
        }
        else{
            
            arr=arr+"*";
            // console.log(arr);
        }
    }
    // console.log(`fixStart('${string3}'): '${arr}'`)
    return  arr;
}
console.log(fixStart('aaaabbbb'));

// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless 
// it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

function verbing(string4){
    len4 = string4.length;
    let str4;
    if (len4<3){
        str4=string4;
    }
    else{
        if(string4.indexOf("ing") != -1){
            str4=string4+"ly";
        }
        else{
            str4=string4+"ing";
        }

    }
    // console.log(`verbing('${string4}'): '${str4}'`)
    return str4;   
}

console.log(verbing("swimming"));
console.log(verbing("no"));
console.log(verbing("walk"));

// Not Bad

// Create a function called notBad that takes a single argument, a string.

//     It should find the first appearance of the substring 'not' and 'bad'.
//     If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//     If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function (string) {
    let containNot = string.includes("not");
    let containBad = string.includes("bad");
    let indexNot = string.indexOf("not");
    let indexBad = string.indexOf("bad");

    if (containNot != true) {
        return string;
    }else if (containBad != true) {
        return string;
    }else if (indexNot > indexBad) {
        return string;
    }else {
        return string.substring(0,indexNot) + "good" + string.substring(indexBad+3);
    }
}
console.log(notBad('this homework is not the 123444 bad.'));
console.log(notBad('it is bad not.'));
console.log(notBad('this is bad.'));
console.log(notBad('this is not.'));