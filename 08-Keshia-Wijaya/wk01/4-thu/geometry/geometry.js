// Given the following a rectangle object like the one below, write the following functions which 
// accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
    length: 4,
    width: 6
};



// const {length} = rectangleA   
// const {width} = rectangleA   
// console.log ("length is: ",length);
// console.log ("width is: ",width);


// ANSWER 1
const isSquare = function (input) {
    const {length} = input
    const {width} = input  
    if (length === width) {
        return "It is a square"
    }

    return "It is not a square"
}


console.log (isSquare(rectangleA));

// OR ANSWER 1

const rectangleA = {
    length: 4,
    width: 6
};


// Keshia style
const isSquare = function (a, b) {
    
    if (a === b) {
        return "It is a square"
    }

    return "It is not a square"
}

console.log (isSquare(rectangleA.width, rectangleA.length));
console.log (isSquare(6, 10));



// ANSWER 2

const area = (input) => {
    const {length} = input
    const {width} = input  
    return length * width
}
// console.log (area(rectangleA));



//ANSWER 3
const perimeter = (a) => {
    const {length} = a
    const {width} = a  
    return (`length is: ${length} and width is: ${width}`)
}

console.log (perimeter(rectangleA));