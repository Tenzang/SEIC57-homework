// Jiakai Ren
// SEI57 - Homework - Wk01 Tue

// The Calculator

// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
    // This function returns the squared value of the input number.

    const numberSquared = Math.pow(number, 2);
    console.log(`The result of squaring the number ${ number } is ${ numberSquared }`);

    return numberSquared;
};

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number) {
    // This function returns the halved value of the input number.

    const numberHalved = number / 2;
    console.log(`Half of ${ number } is ${ numberHalved }`);

    return numberHalved;
};

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
    // This function returns the percentage value of the first number divide by the second number (numerical only)

    const percentage = (num1 / num2 * 100).toFixed(2);
    console.log(`${ num1 } is ${ percentage }% of ${ num2 }`);

    return percentage;
};

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius) {
    // This function returns the area of the circle with the given radius.

    const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    console.log(`The area for a circle with radius ${ radius } is ${ area }`);

    return area;
};

// Bonus: Round the result so there are only two digits after the decimal.
// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const numberManipulator = function (number) {
    // This function halves the input number, then square it, then returns the percentage of the area for a circle with the squared number as the radius, of the squared number.

    const halfOfNumber = halfNumber(number);
    const squareOfNumber = squareNumber(halfOfNumber);
    const areaOfACircle = areaOfCircle(squareOfNumber);
    const percentageAreaOfSquared = percentOf(areaOfACircle, squareOfNumber);
    console.log(`Final result is: ${ percentageAreaOfSquared }`);

    return percentageAreaOfSquared;
};

numberManipulator(4);