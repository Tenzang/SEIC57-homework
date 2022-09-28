// Write a function called squareNumber that will take one argument(a number), square that number, and return the result.It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function (num) {
    const sqNum = num / (1 / num);
    console.log(`The result of squaring the number ${num} is ${sqNum}.`);
}

squareNumber(3);
squareNumber(11);

// Write a function called halfNumber that will take one argument(a number), divide it by 2, and return the result.It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (digi) {
    const halfNum = digi * 0.5;
    console.log(`Half of ${digi} is ${halfNum}.`);
}

halfNumber(8);
halfNumber(240);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result.It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
    const percentage = (num1 / num2) * 100;
    console.log(`${num1} is ${percentage} of ${num2}.`);
}

percentOf(3, 6);
percentOf(12, 72);

// Write a function called areaOfCircle that will take one argument(the radius), calculate the area based on that, and return the result.It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
    const areaC = Math.PI * squareNumber(radius);
    console.log(`The area for a circle with radius ${radius} is ${areaOfCircle}.`);
}


areaOfCircle(5);
areaOfCircle(12);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const part2 = function (value) {
    const halfValue = halfNumber(value);
    const squareVal = squareNumber(halfValue);
    const area = areaOfCircle(squareVal);
    const finalResult = percentOf(squareVal, area);
}

part2(7);
