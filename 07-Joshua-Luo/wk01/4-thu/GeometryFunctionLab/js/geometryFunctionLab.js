// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions 
// which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```

const rectangleA = {
    length: 4,
    width: 4
  };

const isSquare = function (rect) {
    if (rect.length === rect.width){
        return true;
    } else {
        return false;
    }
};
console.log(isSquare(rectangleA));

const area = function (rect) {
    return rect.length * rect.width;
}
console.log(area(rectangleA));

const perimeter = function (rect) {
    return (rect.length + rect.width) * 2;
};
console.log(perimeter(rectangleA));


// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions 
// which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };

const isEquilateral = function (tri) {
    if (tri.sideA === tri.sideB === tri.sideC) {
        return true;
    } else {
        return false;
    }
};
console.log(isEquilateral(triangleA));

const isIsosceles = function (tri) {
    if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideC === tri.sideB) {
        return true;
    } else {
        return false;
    }
};
console.log(isIsosceles(triangleA));

const areaTri = function (tri) {
    const s = (tri.sideA + tri.sideB + tri.sideC);
    const areaT = Math.sqrt(s * (s-tri.sideA) * (s-tri.sideB) * (s-tri.sideC));
    return areaT;
}
console.log(areaTri(triangleA));