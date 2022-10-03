// Jiakai Ren
// SEI57 - Homework - Wk01 Thu

// # Credit Card Validation

function returnObject(cardNumber, expiry) {
  // this function returns an {object} containing card number, validity and error (if applicable)

  if (expiry === undefined) {
    console.log('Missing expiry');
    return;
  }

  const validationObject = {};                                          // object to be returned
  validationObject.valid = validateCreditCard(cardNumber, expiry)[0];   // more info in validateCreditCard();
  validationObject.number = cardNumber;

  const message = validateCreditCard(cardNumber, expiry)[1];            // more info in validateCreditCard();

  if (message !== '') {
    // attached additional error message in {validateObject} if some string exists

    validationObject.error = message;
  };

  return validationObject;
};

function validateCreditCard (cardNumber, expiry) {
  // this function returns [boolean, 'errorMessage'] if cardNumber is valid [true, ''] or invalid [false, 'errorMessage']

  const charArray = cardNumber.split('');           // splits 'cardNumber' into individual characters

  for (let i = 0; i < charArray.length; i++) {
    // removes '-' properly if '-' used correctly
    // may have loop holes, need to test further

    const hyphenIndex = charArray.indexOf('-');
    if (i === hyphenIndex) {
      charArray.splice(i, 1);
    };
  }

  // all following functions return an array [boolean, 'errorMessage']. these are all false cases which will include an 'errorMessage'

  if (wrongLength(charArray)[0]) { return [false, wrongLength(charArray)[1]]; };
  if (notNumber(charArray)[0]) { return [false, notNumber(charArray)[1]]; };
  if (!moreThanOneDigit(charArray)[0]) { return [false, moreThanOneDigit(charArray)[1]]; };
  if (lastDigitIsOdd(charArray)[0]) { return [false, lastDigitIsOdd(charArray)[1]]; };
  if (!sumGreaterThan16(charArray)[0]) { return [false, sumGreaterThan16(charArray)[1]]; };
  if (!luhn(charArray)[0]) { return [false, luhn(charArray)[1]]; };
  if (expired(expiry)[0]) { return [false, expired(expiry)[1]]; };

  return [true, ''];      // if all tests above have been passed, return true and no 'errorMessage'
};

function wrongLength (charArray) {
  if (charArray.length !== 16) {
    return [true, 'Wrong length'];
  };
  return [false, ''];
};

function notNumber (charArray) {
  for (let i = 0; i < charArray.length; i++) {
    if (isNaN(charArray[i])) {
      return [true, 'Must be all numbers'];
    };
  }
  return [false, ''];
};

function moreThanOneDigit (charArray) {
  for (let i = 0; i < charArray.length - 1; i++) {
    if (charArray[i] !== charArray[i + 1]) {
      return [true, ''];
    };
  }
  return [false, 'Must be at least 2 different digits'];
};

function lastDigitIsOdd (charArray) {
  if (charArray[charArray.length - 1] % 2 === 1) {
    return [true, 'The last digit must be even'];
  }
  return [false, ''];
};

function sumGreaterThan16 (charArray) {

  const digitsInt = [];

  for (let i = 0; i < charArray.length; i++) {
    digitsInt.push(parseInt(charArray[i]));
  }

  const sum = digitsInt.reduce((a, b) => a + b, 0);     // sums the entire array

  if (sum > 16) {
    return [true, ''];
  }

  return [false, 'Sum must be greater than 16'];
};

function luhn (charArray) {
  const doubleEverySecond = [];

  for (let i = 0; i < charArray.length; i += 2) {
    // only works if the input is of even digits long

    doubleEverySecond.push(parseInt(charArray[i]) * 2);   // every odd digits doubled
    doubleEverySecond.push(parseInt(charArray[i + 1]));   // every even digits carried through
  }

  for (let j = 0; j < charArray.length; j += 2) {
    //  if the doubled value from previous for loop is a double digit, add the individual digits together.
    //  5 -> 10 -> 1, 6 -> 12 -> 3, 7 -> 14 -> 5, 8 -> 16 -> 7, 9 -> 18 -> 9, works out to be double digit value -9 in every case

    if (doubleEverySecond[j] >= 10) {
      doubleEverySecond[j] -= 9;
    };
  }

  const sum = doubleEverySecond.reduce((a, b) => a + b, 0);

  if (sum % 10 === 0) {
    // if sum is divisible by 10, passes Luhn checksum

    return [true, ''];
  }
  return [false, 'Did not pass Luhn Algorithm'];
};

function expired (expiry) {
  // 

  // Bugs:
  // Still allows user to enter dates with decimals as long as the decimal part is zero. (8.0, etc)

  const currentYear = new Date().getFullYear();
  const currentYearShort = currentYear % 1000;      // gets shorter two digit year
  const currentMonth = new Date().getMonth() + 1;

  const expiryArray = expiry.split('/');
  const cardMonth = parseInt(expiryArray[0]);
  const cardYear = parseInt(expiryArray[1]);

  const cardMonthFloat = parseFloat(expiryArray[0]);
  const cardYearFloat = parseFloat(expiryArray[1]);

  if (cardMonth < 1 || cardMonth > 12 || cardYear < 0 || cardYear > 99 || !Number.isInteger(cardYearFloat % 1) || !Number.isInteger(cardMonthFloat % 1)) {
    return [true, 'Invalid expiry date'];
  }

  if ( (cardYear < currentYearShort) || ( (cardYear === currentYearShort) && (cardMonth < currentMonth) )){
    return [true, 'Card expired'];
  }
  
  return [false, ''];
};

// console.log(returnObject('a923-3211-9c01-a1s2', '12/22'));
// console.log(returnObject('7111-5566-7788-9944', '08/22'));
// console.log(returnObject('8888-8888-8888-8888', '12/22'));
// console.log(returnObject('1611-1111-1111-1112', '12/22'));
// console.log(returnObject('1634-5678-9012-3457', '12/22'));
// console.log(returnObject('1834-5678-9012-3456', '08/22'));