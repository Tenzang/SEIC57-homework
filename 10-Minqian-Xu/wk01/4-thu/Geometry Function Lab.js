Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

const rectangleA = {
    length: "4",
    width: "4",




    constant isSquare = function() {
        if (length === width){
            console.log('The rectangle is a square.');
        } else {
            console.log('The rectangle is not a square.');
        }
    }

    constant areaOfRectangle = function() {

      console.log('length * width');
    }

    constant perimeter = function() {
        let result = 2 * (length + width);
        console.log('${result}');
    } 
}



constant isSquare = function (
    if (length === width){
        console.log('The rectangle is a square.');
    } else {
        console.log('The rectangle is not a square.');
    }
)

Part 2, Triangle
Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
    area: 
  };


constant equilateral = function (
    if (sideA === sideB === sideC) {
        console.log('The trangle is equilateral.');
    } else {
        console.log('The triangle is not equilateral.');
    }
)


constant isosceles = function (
    if (sideA === sideB || sideB === sideC || sideA === sideC) {
        console.log('The triangle is isosceles.');
    } else {
        console.log('The triangle is not isosceles.');
    }

)

constant area = function (
    let s = (sideA + sideB + sideC)/2
    let a = 
)

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices 
// (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
// const cartForParty = {  
//   banana: "1.25", 
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty); // 60.55


const cashRegister = function {
    for (const i = 0; i < cartForParty.length; i++){
        console.log(cashRegister[i])
    }
}