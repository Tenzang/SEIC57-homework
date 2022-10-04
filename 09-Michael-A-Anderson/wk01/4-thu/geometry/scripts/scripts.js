// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
    length: 4,
    width: 4
  };

const isSquare = function (rectangle){
    let l = rectangle.length;
    let w = rectangle.width;
    if (l===w){
        return true;
    }
    return false;
}

isSquare(rectangleA);

const area = function(rectangle){
    const rectArea= rectangle.length * rectangle.width;
    return rectArea
}
area(rectangleA);

const perimeter = function(rect){
    const rectPerimeter = rect.length * 2 + rect.width * 2;
    return rectPerimeter
}

perimeter(rectangleA);

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };

//   Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const isEquilateral = function(t){
    if(t.sideA === t.sideB && t.sideB === t.sideC){
        return true;
    }
    return false;
}

isEquilateral(triangleA);

const isIsosceles = function(t){
    if(t.sideA === t.sideB || t.sideB === t.sideC || t.sideA===t.sideC){
        return true;
    }
    return false;
}

isIsosceles(triangleA)

const tArea = function (t){
    const a = t.sideA;
    const b = t.sideB;
    const c = t.sideC;
    const triArea = 0.25 * (Math.sqrt((4*(a**2)*(b**2))-((a**2) + (b**2) - (c**2))**2));
    console.log(triArea)
    return triArea
}

tArea(triangleA);

const isObtuse = function(t){
// C = arccos ((a2 + b2 - c2) / 2ab)  
let a = t.sideA;
let b = t.sideB;
let c = t.sideC;
let d;
const conversion = 180/Math.PI;
    for (let i = 0; i<3;i++){
        let angle =Math.acos(((a**2)+(b**2)-(c**2))/(2*a*b))*conversion;
        if (angle>90){
            return true;
        }
        d=a;
        a=b;
        b=c;
        c=d;
    }
    return false;
}

isObtuse(triangleA);