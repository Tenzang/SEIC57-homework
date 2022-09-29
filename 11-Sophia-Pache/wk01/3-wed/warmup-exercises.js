// Write a method in Javascript called raindrops that takes a number and returns a string based on whether or not the number has a factor of 3, 5 or 7 (or some combination of the three).

//     If the number is divisible by 3, the method returns "Pling".
//     If the number is divisible by 5, the method returns "Plang".
//     If the number is divisible by 7, the method returns "Plong".
//     If the number is divisible by more than one of the above, the method returns their sounds combined.
//     If the number is not divisible by 3, 5 or 7, the method just returns the number.

// NOT CORRECT
// const raindrops = function (number){
//     for(let i / 3; i <= num; i++) {
//     console.log("Pling");
//     }
//     for(let i / 5; i <= num; i++) {
//         console.log("Plang");
//         }
//     for(let i / 7; i <= num; i++) {
//             console.log("Plong");
//         }
//     }

const raindrops = function (number) {
    let output = '';
    if (number % 3 === 0) {
        output = output + 'Pling';
    } 
    if (number % 5 === 0) {
        output = output + 'Plang';
    } 
    if (number % 7 === 0) {
        output = output + 'Plong';
    }
    if (output == '') {
        output = number.toString();
    }
    return output;
    }

console.log(raindrops(3));

// converting number data type to string data type
// number.toString()