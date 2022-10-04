// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle



const areaSquare = function (length, width) {
    const area = length * width;
    console.log(`Area = ${area}`);
}

const perimeterSquare = function (length, width) {
    const perimeter = 2 * (length + width);
    console.log(`Perimeter = ${perimeter}`);
}

const isSquare = function (length, width) {
    if (length = width) {
        console.log(`The assigned parameters of the length ${length} is the same as the width ${width}, therefore the rectangle is a square.`);
    } else {
        console.log(`The assigned parameters of the length ${length} is NOT the same as the width ${width}, therefore the rectangle is  NOT a square.`);
    }
}

areaSquare(4, 4);
perimeterSquare(4, 4);
isSquare(4, 4);




// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const areaTriangle = function (side1, side2, side3) {
    let total = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(total * (total - side1) * (total - side2) * (total - side3));
    console.log(`Area = ${area}`);
}

const isEquilateral = function (side1, side2, side3) {
    if (side1 = side2 = side3) {
        console.log(`The assigned parameters of side 1 (${side1}) is the same as side 2 (${side2}) and side 3 (${side3}), therefore the triangle is an equilateral.`);
    } else {
        console.log(`This triangle is not an equilateral triangle.`);
    }
}

const isIsosceles = function (side1, side2, side3) {
    if ((side1 = side2) != side3 || (side1 = side3) != side2 || (side2 = side3) != side1) {
        console.log(`Two sides of the triangle are the same length from each other, therefore the triangle is an isosceles.`);
    } else {
        console.log(`This triangle is not an isosceles triangle.`);
    }
}

const isObtuse = function (side1, side2, side3) {
    if (side1 != side2 && side1 != side3 && side2 != side3) {
        console.log(`The assigned parameters of side 1 (${side1}), side 2 (${side2}) and side 3 (${side3}) is different from each other, therefore the triangle is an obtuse.`);
    } else {
        console.log(`This triangle is not an obtuse triangle.`);
    }
}

areaTriangle(4, 4, 4);
isEquilateral(5, 5, 5);
isIsosceles(5, 5, 3);
isObtuse(5, 4, 7);