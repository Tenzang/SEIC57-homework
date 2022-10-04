// # Geometry Function Lab
// ### Part 1, Rectangle
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
const isSquare = function (object){
    let bool;
    if (object.length === object.width){
        bool = true;
    }else{
        bool = false;
    }
    return bool;
};

// * area - Returns the area of the rectangle
const rectangleArea = function (object){
    const area = object.length * object.width;
    return area;
}

// * perimeter - Returns the perimeter of the rectangle

const rectanglePeri = function (object){
    const peri = 2*(object.length + object.width);
    return peri;
}

// ```javascript
const rectangleA = {
  length: 2,
  width: 4
};
// ```


console.log(isSquare(rectangleA));
console.log(rectangleArea(rectangleA));
console.log(rectanglePeri(rectangleA));



// ### Part 2, Triangle
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function (object){
    let bool;
    if (object.sideA === object.sideB && object.sideA === object.sideC){
        bool = true;
    }else{
        bool = false;
    }
    return bool;
};

// * isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function (object){
    let bool;
    if (object.sideA === object.sideB || object.sideA === object.sideC || object.sideB === object.sideC){
        bool = true;
    }else{
        bool = false;
    }
    return bool;
}

// * area - Returns the area of the Triangle

const areaOfTriangle = function (object){
    const a = object.sideA;
    const b = object.sideB;
    const c = object.sideC;
    const semiPeri = (a + b + b)/2 // half perimeter
    const area = Math.sqrt(semiPeri * (semiPeri-a) * (semiPeri-b) * (semiPeri - c)); //refer herons formula
    return area;
}


// * isObtuse - Returns whether the triangle is obtuse or not

const isObtuse = function (object){
    let bool;
    const a = object.sideA;
    const b = object.sideB;
    const c = object.sideC;
    const angleA = Math.acos((b**2 + c**2 - a**2)/(2 * b * c)) * 180 / Math.PI; //cosine rule
    const angleB = Math.acos((a**2 + c**2 - b**2)/(2 * a * c)) * 180 / Math.PI;
    const angleC = Math.acos((b**2 + a**2 - c**2)/(2 * b * a)) * 180 / Math.PI;

    if (angleA > 90 || angleB > 90 || angleC > 90){  //check if any angles is greater than 90 degrees
        bool = true;
    }else{
        bool = false;
    }
    return bool;
}


// ```javascript
const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 7
};
// ```

console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log(areaOfTriangle(triangleA));
console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB)); 

