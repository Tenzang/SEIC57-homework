// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
//  The sum of all the digits must be greater than 16

function formatNumbers(numbers){
 return numbers.replaceAll('-','');            // delete menus of the string
}


function hasDifferentDigits(digits){
  let aux = [];
  [...digits].forEach(digit => {
    if(aux.includes(digit)) return;
    aux.push(digit)
  });
  
  return aux.length> 1 ? true : false;
  
}

function theSum(digits){
  let spread = [...digits];
  return spread.map(e=> parseInt(e)).reduce((a,b)=>a+b,0);
}


function validateCreditCard(numbers){
 
  let formatedNumbers = formatNumbers(numbers);
  if(isNaN(formatedNumbers) ){
    return {
      valid: false,
      number: numbers,
      reason:" All of digits must be numbers"
    }
  }
  if(formatedNumbers.length !== 16){

    return {
      valid: false,
      number: numbers,
      reason: "Number must be 16 digits"
    }
  }

  if(formatNumbers.length-1%2 !==0){

    return {
      valid: false,
      number: numbers,
      reason: " The final digit must be even"
    }
  }
  if(!hasDifferentDigits(formatedNumbers)){

    return {
      valid: false,
      number: numbers,
      reason: "Validate credit card must have at least two different digits"
    }
  }
 
  if(theSum(formatedNumbers)< 16){
    return {
      valid: false,
      number: numbers,
      reason: "The sum of all the digits must be greater than 16"
    }
  }
  return true;

}

// console.log(validateCreditCard('6666-6666-6666-1666'),'Valid numbers');
// console.log(validateCreditCard('a923-3211-9c01-1112'), 'invalid characters');
// console.log(validateCreditCard('4444-4444-4444-4444'), 'only one type of number');
// console.log(validateCreditCard('1111-1111-1111-1110'), 'sum less than 16');
// console.log(validateCreditCard('6666-6666-6666-6661'), 'odd final number');