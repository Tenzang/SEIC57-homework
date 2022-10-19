/*
Define a function sumArray and a function multiplyArray that sums and multiplies 
(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

const sumArray = function (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

const multiplyArray = function (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([]));
console.log(sumArray([1, 2, 3]));