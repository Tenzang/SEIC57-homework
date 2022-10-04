/*
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following 
functions which accept a rectangle object as an argument:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
*/

const getRandomNumber = function() {
    return Math.round(Math.random() * 50);
}

const rectangle1 = {
    length: getRandomNumber(),
    width: getRandomNumber()
}

const rectangle2 = {
    length: getRandomNumber(),
    width: getRandomNumber()
}

const isSquare = function(rec) {
    return rec.length === rec.width;
}

const getArea = function(rec) {
    return rec.length * rec.width;
} 

const getPerimeter = function(rec) {
    return (rec.length * 2) + (rec.width * 2);
} 

const printRectangleInfo = function(rec) {
    console.log(`The rectangle is a square: ${isSquare(rec)}`);
    console.log(`The rectangle area is: ${getArea(rec)}`);
    console.log(`The rectangle perimeter is: ${getPerimeter(rec)}`);
}

printRectangleInfo({length: getRandomNumber(), width: getRandomNumber()});
printRectangleInfo({length: getRandomNumber(), width: getRandomNumber()});
printRectangleInfo({length: getRandomNumber(), width: getRandomNumber()});