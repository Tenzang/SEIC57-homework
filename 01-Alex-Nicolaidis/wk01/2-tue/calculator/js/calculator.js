// PART 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number){
    console.log(`The result of squaring the number ${ number } is ${ number**2 }.`);
    return number ** 2;
};

squareNumber(2); // To test the function


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number){
    console.log(`Half of ${number} is ${number/2}.`);
    return number / 2;
};

halfNumber(10); // To test the function


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2){
    console.log(`${ num1 } is ${ num1/num2*100 }% of ${ num2 }.`);
    return num1 /num2 * 100; //value produced is a percentage but doesn't have the % sign
};

percentOf(5, 10); // To test the function


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function(radius){
    const area = radius ** 2 * Math.PI;
    console.log(`The are for a circle with radius ${ radius } is ${ area.toFixed(2) }`);
    return area.toFixed(2); // bonus below included
};
// Bonus: Round the result so there are only two digits after the decimal.

areaOfCircle(1); // To test the function


//PART 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

//     Take half of the number and store the result.
//     Square the result of #1 and store that result.
//     Calculate the area of a circle with the result of #2 as the radius.
//     Calculate what percentage that area is of the squared result (#3).


const utilityFuntion = function ( number ){
    const halfNum = halfNumber( number );  //half of the number passed to the function
    const sqNum = squareNumber(halfNum);   //square the halfNum variable
    const areaCirle = areaOfCircle(sqNum); //area with the radius as sqNum variable 
    const areaPercentOfSquare = percentOf (areaCirle, sqNum);

    return [ halfNum, sqNum, areaCirle, areaPercentOfSquare ];  //return results in list form ....
}

console.log(utilityFuntion(10)); //To test the function and log the list of values

//Not sure if I interpreted the exercise correctly



