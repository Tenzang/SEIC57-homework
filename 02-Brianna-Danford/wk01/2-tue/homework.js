console.log('hello world');

// The Calculator

// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function ( num ) {
    squaredNumber = num * num; 
    console.log(`The result of squaring the number ${ num } is ${ squared }.`); 
    return squared; 
}
squareNumber(5); 

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


const halfNumber = function ( num ) {
    halvedNumber = num / num
    console.log(`Half of ${ num } is ${ halvedNumber }.`);
    return halved;
}
halfNumber(6);

const percentOf = function (percent, num) {
    return (percent / 100) * num; 
}
console.log(`2 is 50% of 4.`); 

const areaOfCircle = function (radius) {

}