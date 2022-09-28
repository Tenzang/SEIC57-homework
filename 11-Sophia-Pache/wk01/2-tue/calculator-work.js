
    // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

    const squareNumber = function (num1) {
        const result = Math.pow(num1, 2);
        return result;
        console.log(`The result of squaring the number ${num1} is ${result}`);
    };

    // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
    const halfNumber = function (num1) {
        const result = num1 / 2;
        return result;
        console.log(`Half of ${num1} is ${result}`);
    };

    // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
    const percentOf = function (num1, num2) {
        const division = num2 / num1;
        const result = division * 100;
        return result;
        console.log(`${num1} is ${result}% of ${num2}.`);
    };

    // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
    // Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function (radius) {
    const result = Math.PI * Math.pow(radius, 2);
    return result.toFixed(2);
    console.log(`The area is for a circle with radius ${radius} is ${areaOfCircle.toFixed(2)}.`);
};

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

//     Take half of the number and store the result.
//     Square the result of #1 and store that result.
//     Calculate the area of a circle with the result of #2 as the radius.
//     Calculate what percentage that area is of the squared result (#3).

const calculator = function (number) {
    const halfNum = halfNumber(number);
    return result;
    const squaredNum = squareNumber(halfNum);
    return result;
    const areaNum = areaOfCircle(squaredNum);
    return result;
    const percentNum = percentOf(squaredNum,areaNum);
    return result;
};

// Repetitive, try not to repeat