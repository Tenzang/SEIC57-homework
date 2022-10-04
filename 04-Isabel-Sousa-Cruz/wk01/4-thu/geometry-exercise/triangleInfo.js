/*
Part 2, Triangle
Given the following a triangle object like the one below,
write the following functions which accept a triangle object as an argument:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

const getRandomNumber = function() {
    return Math.round(Math.random() * 10);
}

const triangle1 = {
    sideA: getRandomNumber(),
    sideB: getRandomNumber(),
    sideC: getRandomNumber(),
    angleA: getRandomNumber() * 10,
    angleB: getRandomNumber() * 10,
}
triangle1["angleC"] = 180 - (triangle1.angleA + triangle1.angleB)

const isEquilateral = function(triangle) {
    return triangle.sideA === triangle.sideB === triangle.sideC;
}

const isIsosceles = function(triangle) {
    return ((triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) ||
    (triangle.sideB === triangle.sideA && triangle.sideB === triangle.sideC) || 
    (triangle.sideC === triangle.sideA && triangle.sideC === triangle.sideB))
}

const isObtuse = function(triangle) {
    return (triangle.angleA > 90 || triangle.angleB > 90 || triangle.angleC > 90);
}

const getArea = function(triangle) { // Heron's Formula, based on the triangles's side
    const perimeter = triangle.sideA + triangle.sideB + triangle.sideC;
    const halfPerim = perimeter / 2;
    const multiplication = halfPerim * (halfPerim - triangle.sideA) * (halfPerim - triangle.sideB) * (halfPerim - triangle.sideC);
    const squareRoot = Math.sqrt(multiplication);
    return squareRoot;
} 


const printRectangleInfo = function(triangle) {
    console.log(`sideA: ${triangle.sideA}, sideB: ${triangle.sideB}, sideC: ${triangle.sideC} angleA: ${triangle.angleA}, angleB: ${triangle.angleB}, angleC: ${triangle.angleC}`);
    console.log(`The triangle is equilateral: ${isEquilateral(triangle)}`);
    console.log(`The triangle is isosceles: ${isIsosceles(triangle)}`);
    console.log(`The triangle is obtuse: ${isObtuse(triangle)}`);
    console.log(`The triangle area is: ${getArea(triangle)}`);
}

printRectangleInfo(triangle1);