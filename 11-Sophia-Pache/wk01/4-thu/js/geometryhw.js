// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not

const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (rec) {
    if (rec.length === rec.width) {
        return('true')
    } else {
        return('false')
    }
}

console.log(isSquare(rectangleA))

// * area - Returns the area of the rectangle
const rectangleB = {
    length: 4,
    width: 4
  };

const calcArea = function (rec) {
    let recA = rec.length * rec.width;
    return(recA);
};
console.log(calcArea(rectangleA))

// * perimeter - Returns the perimeter of the rectangle
const rectangleC = {
    length: 4,
    width: 4
  };

const calcPerimeter = function (rec) {
    let recL = rec.length + rec.length;
    let recW = rec.width + rec.width;
    let recP = recL + recW;
    return(recP);
};
console.log(calcPerimeter(rectangleA))

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not

const triangleA = {
    sideA: 8,
    sideB: 6,
    sideC: 10
  };
  
  const isEquilateral = function (tri) {
      if (tri.sideA === tri.sideB && tri.sideA === tri.sideC && tri.sideB === tri.sideC) {
          return('true')
      } else {
          return('false')
      }
  }
  
  console.log(isEquilateral(triangleA))
// * isIsosceles - Returns whether the triangle is isosceles or not
const triangleB = {
    sideA: 8,
    sideB: 8,
    sideC: 10,
    angleA: 45,
    angleB: 45,
    angleC: 90,
  };
// Triangle is isoceles if it has two sides of equal length and corresponding equal angles.
 const isIsoceles = function (tri) {
    if (tri.sideA === tri.sideB && tri.angleA === tri.angleB 
        || tri.sideA === tri.sideC && tri.angleA === tri.angleC 
        || tri.sideB === tri.sideC && tri.angleB === tri.angleC) {
        return ('true')
    } else {
        return ('false')
    }
}
console.log(isIsoceles(triangleB))
// * area - Returns the area of the Triangle
const triangleC = {
    base: 10,
    height: 20
}
const calcTArea = function (triangle) {
    let triA = 0.5*(triangle.base * triangle.height);
    return(triA);
};
console.log(calcTArea(triangleC)) 

// * isObtuse - Returns whether the triangle is obtuse or not
const triangleD = {
    sideA: 8,
    sideB: 8,
    sideC: 10,
    angleA: 30,
    angleB: 30,
    angleC: 120,
  };
// Triangle is obtuse if it has two sides of equal length and corresponding equal angles.
 const isObtuse = function (tri) {
    if (tri.angleA > 90 
        || tri.angleB > 90  
        || tri.angleC > 90 ) {
        return ('true')
    } else {
        return ('false')
    }
}
console.log(isObtuse(triangleD))



