// Part 1 - The Calculator 

// dot-1

function squareNumber (num) {

    const squareNumber = num * num ;
    console.log(`The result of squaring the number ${num} is ${squareNumber}`)
    return squareNumber;

}
squareNumber(3);

// dot-2
function halfOf (num) {
const half = num / 2 ;
console.log(`The result of the half of ${num} is ${half}`)
return half;

}
halfOf(5);

// dot-3
function percentOf(num1 , num2) {
const percent = (num1/num2) * 100 ;
console.log(`${num1} is ${percent}% of ${num2}`)
return percent ;

}
percentOf(5 , 10);

// dot-4
function areaOfCircle(radius) {
    const area = Math.PI * radius**2 ;

    console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`)
    return area.toFixed(2);
  
}
areaOfCircle(2);

// bonus 
function bonus(num) {
    const half    = halfOf(num);
    const squared = squareNumber(half);
    const area    = areaOfCircle(squared);
    const result  = percentOf(squared, area);
  }
bonus(5);

//drEvil 
function drEvil(amount) {
    if (amount == 1000000) {
      return amount + " dollars (pinky)";
    } else {
      return amount + " dollars";
    }
  }

  // MixUp
   //Create a function called mixUp. 
  // It should take in two strings, and return the concatenation of the two strings
  //  (separated by a space) slicing out and swapping the first 2 characters of each.
  //   You can assume that the strings are at least 2 characters long

  function mixUp(a , b) {
    return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
  }
  console.log( mixUp('mix', 'pod'));

console.log( mixUp('dog', 'dinner'));



