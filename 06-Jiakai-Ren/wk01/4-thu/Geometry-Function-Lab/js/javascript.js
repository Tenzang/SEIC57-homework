// Jiakai Ren
// SEI57 - Homework - Wk01 Thu

// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 3,
  width: 4
};

function isSquare (rectangle) {
    // This function returns true if {rectangle} is rectangle

    return (rectangle.length === rectangle.width);
};

function areaRectangle (rectangle) {
    // This function returns the area of {rectangle}

    return (rectangle.length * rectangle.width);
};

function perimeterRectangle (rectangle) {
    // This function returns the perimeter of {rectangle}

    return ((rectangle.length + rectangle.width) * 2);
}

console.log( isSquare(rectangleA) );            // false
console.log( areaRectangle(rectangleA) );       // 12
console.log( perimeterRectangle(rectangleA) );  // 14

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 5,
  sideB: 3,
  sideC: 7
};

function isEquilateral (triangle) {
    // This function returns true if {triangle} is equilateral

    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;

    return (a === b && a === c);    // true if all three sides equal
};

function isIsosceles (triangle) {
    // This function returns true if {triangle} is isosceles

    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;

    if (a === b || a === c || b === c) {
        //  true if at least two sides equal

        return true;
    }
    
    return false;
};

function areaTriangle (triangle) {
    // This function returns the area of {triangle}

    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;

    const s = (a + b + c) / 2;

    const area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));

    return area;
};

function isObtuse (triangle) {
    // This function returns true if {triangle} is obtuse

    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    const sides = [a, b, c];

    const longestSideIndex = sides.indexOf(Math.max(...sides));     // finds the index of the longest length
    const longestSide = sides[longestSideIndex];                    // finds the longest length
    sides.splice(longestSideIndex, 1);                              // remove the longest length from [sides]

    return (sides[0] ** 2 + sides[1] ** 2) < (longestSide ** 2);    // true if the sum of the square of two shortest sides is less than longest side squared
};

console.log('Area: ', areaTriangle(triangleA).toFixed(2));
console.log('Obtuse? ', isObtuse(triangleA));                   
console.log('Equilateral? ', isEquilateral(triangleA));
console.log('Isosceles? ', isIsosceles(triangleA));