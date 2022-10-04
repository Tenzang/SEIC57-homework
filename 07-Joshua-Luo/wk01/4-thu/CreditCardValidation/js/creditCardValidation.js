// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate 
// credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Hint*: Remove the dashed from the input string before checking if the input credit card number 
// is valid.

const validateCreditCard = function (card) {
    let n = card.replace(/-/g, '');

    // - Number must be 16 digits, all of them must be numbers
    if (!isLen16(n)) {
       return result(false, card, 'wrong leng');
    } else if (!isNum(n)) {
        return result(false, card, 'not number');
    } else if (!isNotSame2(n)) {
        return result(false, card, 'same digits');
    } else if (!isLastEven(n)) {
        return result(false, card, 'not even');
    } else if (!isSum16(n)) {
        return result(false, card, 'less than 16');
    } else {
        return result(true, card);
    } 

};

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
const result = function () {
    let arg = arguments;
    if (arg.length === 2 ){
        
        return {
            valid: arg[0],
            number: arg[1],
        };
    } else {
        
        return {
            valid: arg[0],
            number: arg[1],
            error: arg[2]
        };
    }
}

// - all of them must be numbers
const isNum = function (str) {
    if (isNaN(str)) {
        return false;
    } else {
        return true;
    }
};
// - Number must be 16 digits
const isLen16 = function (str) {
    if(str.length !== 16){
        return false;
    } else {
        return true;
    }
};
// - You must have at least two different digits represented (all of the digits cannot be the same)
const isNotSame1 = function (str) {
    let answer = false;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++){
            if(i !== j && str[i] !== str[j]){
                answer = true;
                break;
            }
        }
    }
    return answer;
};

// - You must have at least two different digits represented (all of the digits cannot be the same)
const isNotSame2 = function (str) {
    let answer = false;
    for (let i = 0; i < str.length - 1; i++) {
        if(str.includes(str.slice(-1))){
            answer = true;
            break;
        } 
    }
    return answer;
};

// - The final digit must be even
const isLastEven = function (str) {
    if (str[str.length-1] % 2 === 0 ) {
        return true;
    } else {
        
        return false;
    }
};

// - The sum of all the digits must be greater than 16
const isSum16 = function (str) {
    let sumOfStr = 0;
    for (let i = 0; i < str.length; i++) {
        sumOfStr += Number(str[i]);
        if (sumOfStr > 16) {
            return true;
            break;
        }  
    }  
    return false; 
};



console.log(isSum16("111111111"));
console.log(isSum16("9999"));

console.log(isLastEven("8888"));
console.log(isLastEven("8887"));
console.log(isNotSame1("aabb"));// =>true
console.log(isNotSame1("aaaa"));// =>false
console.log(isNotSame2("aabb"));// =>true
console.log(isNotSame1("aaaa"));// =>false

console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('9999-9999-8888-00000'));
console.log(validateCreditCard('9999-9999-8888-00aa'));


// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are 
// some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for 
// inspiration.