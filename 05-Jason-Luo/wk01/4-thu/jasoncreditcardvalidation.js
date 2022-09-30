// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

function validateCreditCard(CCnumber) {
    if (CCnumber.length !== 16) {
        return false;
    }

    for (let i = 0; i < CCnumber.length; i++) {
        let numCheck = CCnumber[i];

        numCheck = parseInt(numCheck); //convert string to integer

        if (!Number.isInteger(numCheck)) {
            return false;
        }

    }

    let object = {}; //setting empty object slot
    for (let i = 0; i < CCnumber.length; i++) {
        object[CCnumber[i]] = true;
    }
    if (Object.keys(object).length < 2) {
        return false; //at least two different digits
    }

    //final digit of card is even
    if (CCnumber[CCnumber.length - 1] % 2 !== 0) {
        return false;
    }

    //sum of digits greater than 16
    let total = 0;
    for (let i = 0; i < CCnumber.length; i++) {
        total = total + CCnumber[i];
    }
    if (total <= 16) {
        return false;
    } else {
        return true;
    };

}

console.log(validateCreditCard('9999777788880000')); //true
console.log(validateCreditCard('6666666666661666')); //true
console.log(validateCreditCard('a92332119c011112')); //false
console.log(validateCreditCard('4444444444444444')); //false
console.log(validateCreditCard('1211111111111112')); //true

