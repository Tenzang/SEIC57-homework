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
