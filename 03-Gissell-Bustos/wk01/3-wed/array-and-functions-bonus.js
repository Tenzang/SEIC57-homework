//** Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out. */ 
function maxOfTwoNumbers(number1, number2){
  let array = [number1, number2];
  let max = number1;
  for(let i =0; i< array.length; i++){
    if(array[i] > max){
      max = array[i]
    }
  }
  return max;
}
//console.log(maxOfTwoNumbers(-234, -2));

//** Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(...args){
  return Math.max(...args);
}
// console.log(maxOfThree(-2345655, -15, -1));
console.log(`testing max of three, result ${maxOfThree(-2345655, -15, -1) === -1}`);

//**  Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(character){
  let lowerCase = character.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
    if(vowels.indexOf(character) === -1){
      return false;
    }  
    return true; 
}
 //console.log(isVowel(1));

//** Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24. 
function sumArray(array){
   let sum = 0;
  for(let i=0; i < array.length; i++){
     sum += array[i];
  }
 return sum;
}
//console.log(sumArray([1,2,3,4])); 

function sumArray(array){
  return array.reduce((a,b)=> a + b, 0);
}
//console.log(sumArray([1,2,3,4]));


function multiplyArray(array){
  let multiply = 1;
  for(let i=0 ; i< array.length; i++){
    multiply = multiply * array[i];
  }
  return multiply;
}
//console.log(multiplyArray([1,2,3,4]));

function multiplyArray(array){
  return array.reduce((a,b)=> a*b, 1)
}
//console.log(multiplyArray([1,2,3,4]));

//**  Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString (string){
  var newString = '';
  for(let i= string.length -1; i>=0; i--){
    newString += string[i];
  }
  return newString;
}
//console.log(reverseString('jag testar'));

//** Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord (string){
  let stringSplit = string.split(' ');
  console.log(stringSplit);
  let theLongestWord = 0;
  for(let i = 0; i < stringSplit.length; i++){
    if(stringSplit[i].length > theLongestWord){
      theLongestWord = stringSplit[i].length;
    }
  }
  return theLongestWord;
}
//console.log(findLongestWord('jag  dog Otorhinolaryngology testar'));

//**  Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

function filterLongWords(string){
  let longestword = '';
  for(let i =0; i<string.length; i++){
    if(string[i].length > longestword.length){
        longestword = string[i]
    }
  }
  return longestword
}
//console.log(filterLongWords(['jag', 'dog', 'Otorhinolaryngology', 'testar']))
