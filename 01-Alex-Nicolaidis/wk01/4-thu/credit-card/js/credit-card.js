// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16


const sumDigits = function (stringNumbers){
    let sum = 0;
    for (i = 0; i < stringNumbers.length; i++){
        sum += parseInt(stringNumbers[i]);
    }
    return sum;
}

const differentNumbers = function (string){
    const checkChar = string[0];
    let bool = false;
    for (let i = 1; i < string.length; i++){
        if (string[i] != checkChar){
            bool = true;
            break;
        };
    };
    return bool;
};

const isEven = function (number){
    if (number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

const charInNumber = function (cardNum){
    if (isNaN(Number(cardNum))){
        return true;
    }else{
        return false;
    }
}


const validateCreditCard = function (cardNum) {
    const cleanNumbers = cardNum.replaceAll('-','');
    const cardSum = sumDigits(cleanNumbers);
    const lastDigit = parseInt(cleanNumbers.slice(-1));

    let errorList = [];

    if(cleanNumbers.length != 16){
        errorList.push("Incorrect Length")
    }
    if(cardSum < 16){
        errorList.push("Sum of Numbers is too low")
    }
    if(!isEven(lastDigit)){
        errorList.push("Last digit is odd")
    }
    if(!differentNumbers(cleanNumbers)){
        errorList.push("All the same numbers")
    }
    if(charInNumber(cleanNumbers)){
        errorList.push("Can't have letters in a card number")
    }

    if (errorList.length === 0){
        return {valid: true, number: cleanNumbers}
    }else{
        return {valid: false, number: cleanNumbers, error: errorList.join(", ")};
    }
};

console.log(validateCreditCard(`9999-9999-8888-0000`))
console.log(validateCreditCard(`6666-6666-6666-1666`))
console.log(validateCreditCard(`a923-3211-9c01-1112`))
console.log(validateCreditCard(`6666-6666-6666-6661`))
console.log(validateCreditCard(`1111-1111-1111-1110`))





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

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.