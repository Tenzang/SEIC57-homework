// // # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two 
// numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript. 
// You'll have to remember your pre-work, 
// or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes 
// three numbers as arguments and returns the largest of them.



//1.
const maxOfTwoNumbers = function (num1 , num2){
    if ( num1 > num2 ){
   console.log( num1 + " is larger than " + num2 );
} else {
    console.log ( num2 + " is larger than " + num1 );

}

}
maxOfTwoNumbers(150,175);
// 2.

const maxOfThree = function (a, b, c) {
        if ((a > b) && (a > c)) { 
          return a;
        } else if ((b > a) && (b > c)) {
            return b;
        } else {
            return c;
        }
    }
    console.log (maxOfThree(122, 189, 1789));

//3. Write a function that takes a character 
// (i.e. a string of length 1) and returns true if it is a vowel, 
// false otherwise.

const findVowel = function(letter) {

    const vowels = ["a", "e", "i", "o", "u"];

    for(let i = 0; i < vowels.length ; i++){ 
        if(letter === vowels[i]){
            return `${letter } is a vowel`
         }else {
           return `${letter } is not a vowel`
         }
    }

}
console.log(findVowel('b'));

//4.Define a function `sumArray` and a function 
// `multiplyArray` that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, 
// `sumArray([1,2,3,4])` should return 10, 
// and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function(numbers) {
let total = 0;
    for (let i = 0 ; i < numbers.length; i++) {
      total += numbers[i];
    }

        return total;

    }
console.log(sumArray([1,2,3,4]));
//



const multiplyArray =  function (numbers) {
	let total = 1;
	for (let i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
console.log(multiplyArray([1,2,3,4]));


// 5.Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") 
// should return the string "ratset gaj".
//  6.Write a function findLongestWord that takes an array of words and returns the length of the longest one.

//5.

const reverseString = function ( reverse) {
    let text = '';

    for ( let i = reverse.length-1; i >=0 ; i--){
        text +=reverse[i];
        continue 
    }
    return text;

}
console.log(reverseString("Talal"));

// //6.other method 
// const findLongestWord = function (longestword){
//     let word ='';
//     for ( let i = 0 ; i <= longestword.length ; i++){
//         if (word.length < longestword[i].length){
//             word = longestword[i];

//         }
//         return word ; 

//     }
// }
// function longestStringReduce(longestword) {
//     return longestword.reduce((a, b) => a.length < b.length ? b : a, "");
//   }
// console.log(longestStringReduce(['apple', 'banana', 'pineapple']));

const findLongestWord =  function (longestword) {
    let longest = '';
    for (let i = 0; i < longestword.length; i++) {
    if (longestword[i].length > longest.length)
    longest = longestword[i];
    }
    return longest;
    }
    console.log(findLongestWord(['apple', 'banana', 'pineapple']));


    // 7.Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
const filterLongWords = function (words){
    let i = 5; 

        if ( words.length > i ){
            return `${words} is longer than i .`
        } else {
return ' you have no word longer than i ' ; 


}
}

console.log(filterLongWords('apples')); 