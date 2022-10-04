// // console.log("Hello World");

//  Keshia learning Function annd Return Function in JavaScript


const addNumbers = function ( num1, num2 ) {  
    result = num1 + num2;  
    return result;
}

console.log(addNumbers (9, 9));

const sum = addNumbers(5, 2);
console.log(sum);
// // => 7

// //////////////////////////////////////////


const sayName = function (a) {
    
    if ( a === 1) {
        return "Hello Tim";
    }
    else if ( a === 2) {
        return "Hello Keshia";
    }
}
console.log(sayName(1));

// //////////////////////////////////////////

let myName;
let yourName;

const sayName = function (a) {
    
    if ( a === myName) {
        console.log("Hello Tom");
    }
    else if ( a === yourName) {
        console.log("Hello Keshia");
    }
}

sayName(myName);

// //////////////////////////////////////////

const sayName = function (myName, yourName) {
    return `Hello ${myName} ${yourName}`;
}
const coolName = sayName ("Tim", "Tam");
console.log(coolName);


// ///////////////////////////////////

const hello = function (a,b) {
    return `Welcome ${a} and ${b}`;
}

console.log(hello("Tim", "Kesh"));


// /////////////////////////////////

const sayName = function (a) {
    switch (a)
     {
        case 1:
            return "Hello Tim"
        case 2:
            return "Hello Kesh"
        case 3:
            return "Hello Tom"
     }
}

console.log(sayName(3));

// /////////////////////////////////

const hello = function () {
    console.log ("Hello World");
}

hello();

// /////////////////////////////////

const hello = function () {
    return "Hello World";
}

console.log(hello());

// ///////////////////////////////////


const addNumbers = function(num1, num2) {  
    return num1 + num2;
  }
console.log(addNumbers(5,7));