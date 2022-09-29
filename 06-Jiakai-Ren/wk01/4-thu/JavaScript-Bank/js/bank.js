// Jiakai Ren
// SEI57 - Homework - Wk01 Thu

// # JavaScript Bank

const bank = {
  name: 'National Bank of Jackville',
  accounts: [],
};

console.log(`Thank you for visiting "${ bank.name }"\n\n-------------------------------------\n You can use the following commands:\n-------------------------------------\n\n To open an account:\n   addAccount('accountName', 'cardNumber', 'expiry');\n'cardNumber' must be 'NNNN-NNNN-NNNN-NNNN'\n'expiry' must be 'MM/YY'\n\n To deposit:\n   deposit('name', amount);\n\n To withdraw:\n   withdraw('name', amount);\n\n To transfer:\n   transfer('fromName', 'toName', amount);\n\n-------------------------------------\n Or if you are Jack:\n\n  bankBalance();\n  console.table(bank.accounts);\n-------------------------------------`);

// Tests:

// addAccount('lachlan', '2027-3598-8009-9054', '12/22'); // fails Luhn
// addAccount('lachlan', '2027-3598-8009-9044', '12/22'); // pass
console.log(addAccount ('jack', '7011-5566-7788-9944', '08/23')); // pass
console.log(addAccount ('matt', '1611-1111-1111-1112', '12/22')); // pass
console.log(addAccount ('nathan', '3616-1616-1616-1816', '12/22')); // pass

// Functions:

function addAccount (accountName, cardNumber, expiry) {
  // this function adds {accountToAdd} to {bank}.accounts

  if(checkName(accountName)) {
    console.log(`Account "${ accountName }" already exists`);
    return;
  };
  
  if (returnObject(cardNumber, expiry).valid) {
    // only proceed if ['cardNumber', 'expiry'] passes Credit Card Validation

    const accountToAdd = {};

    accountToAdd.name = accountName;
    accountToAdd.cardNumber = cardNumber;
    accountToAdd.expiry = expiry;
    accountToAdd.balance = 0;
  
    bank.accounts.push(accountToAdd);
    console.log(`Open account "${ accountName }" success`);
  } else {
    console.log(`Open account "${ accountName }" failed`);
  }

  console.log(returnObject(cardNumber, expiry));
};

function bankBalance () {
  // this function calculates the sum of the balance of all {bank}.accounts

  let sum = 0;

  for (i = 0; i < bank.accounts.length; i++) {
    sum += bank.accounts[i].balance;
  }

  console.log(`"National Bank of Jackville" has $${ sum.toFixed(2) }`);
  return sum;
};

function deposit (name, amount, isTransfer = false) {
  // this function adds amount to {bank}.accounts[indexOf('name')]

  if(!checkName(name)) {
    console.log(`Deposit account "${ name }" does not exist`);
    return;
  };

  let accountIndex;

  if (!(amount > 0)) {
    console.log('You must deposit a positve amount');
  } else {
    for (i = 0; i < bank.accounts.length; i++) {
      if (name === bank.accounts[i].name) {
        bank.accounts[i].balance += amount;
        accountIndex = i;
      }
    }
    if (isTransfer === false) {
      // this message only shows when the deposit did not occure during a transfer process

      console.log(`You deposited $${ amount }, balance: $${ bank.accounts[accountIndex].balance }`);
    }
  }
};

function withdraw (name, amount, isTransfer = false, toName = '') {
  // this function subtracts amount from {bank}.accounts[indexOf('name')]
  // returns true if withdraw is successful, for transfer purpose

  if(!checkName(name)) {
    console.log(`Withdrawal account "${ name }" does not exist`);
    return;
  };

  let accountIndex;       // variable used to console.log account balance

  let typeOfWithdrawal;   // string to console.log transfer or withdraw
  let addTransferMsg;     // string to console.log recipient name

  if (isTransfer === true) {
    // only execute if isTransfer is explicitly passed in true

    if(!checkName(toName)) {
      console.log(`Recipient account "${ toName }" does not exist`);
      return;
    };

    typeOfWithdrawal = 'transfer';
    addTransferMsg = ` to ${ toName }`
  } else {
    // isTransfer not passed in, default to false

    typeOfWithdrawal = 'withdraw';
    addTransferMsg = '';
  };

  if (!(amount > 0)) {
    console.log(`You must ${ typeOfWithdrawal } a positve amount`);
  } else {
    for (i = 0; i < bank.accounts.length; i++) {
      if (name === bank.accounts[i].name) {
        // search for 'name' in {bank}.accounts

        accountIndex = i;

        if (amount > bank.accounts[i].balance) {
          // insufficient {bank}.accounts[i].balance

          console.log(`Unsuccessful to ${ typeOfWithdrawal }${ addTransferMsg }. You tried to ${ typeOfWithdrawal } $${ amount }, but you only have $${ bank.accounts[i].balance }`);

        } else {
          // sufficient {bank}.accounts[i].balance, proceed

          bank.accounts[i].balance -= amount;
          console.log(`Successful to ${ typeOfWithdrawal } $${ amount }${ addTransferMsg }, balance: $${ bank.accounts[accountIndex].balance }`);
          return true;
        }
      }
    }
  }
};

function transfer (fromName, toName, amount) {
  // this function transfers amount from 'fromName' to 'toName'

  if (fromName === toName) {
    console.log('You cannot transfer to yourself');
  } else if (withdraw(fromName, amount, true, toName)) {
    // only proceed to deposit when withdraw is successful

    deposit(toName, amount, true);
  };
}

function checkName (name) {
  // this function returns true if 'name' exists in {bank}.accounts[i]
  
  const allNames = [];

  for (let i = 0; i < bank.accounts.length; i++) {
    allNames.push(bank.accounts[i].name);
  }

  if (allNames.includes(name)) {
    return true;
  } else {
    return false;
  }
};


/*   ___________________________________________________________
    /                                                           \
   |      Credit Card Validation functions from part 3 below     |
    \___________________________________________________________/
*/


function returnObject(cardNumber, expiry) {
  // this function returns an object containing card number, validity and error (if applicable)

  if (expiry === undefined) {
    console.log('Missing expiry');
    return;
  }

  const validationObject = {};
  validationObject.valid = validateCreditCard(cardNumber, expiry)[0];
  validationObject.number = cardNumber;

  const message = validateCreditCard(cardNumber, expiry)[1];

  if (message !== '') {
    validationObject.error = message;
  };

  return validationObject;
};

function validateCreditCard (cardNumber, expiry) {
  // this function returns true if cardNumber is valid

  const charArray = cardNumber.split('');

  for (let i = 0; i < charArray.length; i++) {
    //  removes '-' properly if '-' used correctly

    const hyphenIndex = charArray.indexOf('-');
    if (i === hyphenIndex) {
      charArray.splice(i, 1);
    };
  }

  if (wrongLength(charArray)[0]) { return [false, wrongLength(charArray)[1]]; };
  if (notNumber(charArray)[0]) { return [false, notNumber(charArray)[1]]; };
  if (!moreThanOneDigit(charArray)[0]) { return [false, moreThanOneDigit(charArray)[1]]; };
  if (lastDigitIsOdd(charArray)[0]) { return [false, lastDigitIsOdd(charArray)[1]]; };
  if (!sumGreaterThan16(charArray)[0]) { return [false, sumGreaterThan16(charArray)[1]]; };
  if (!luhn(charArray)[0]) { return [false, luhn(charArray)[1]]; };
  if (expired(expiry)[0]) { return [false, expired(expiry)[1]]; };

  return [true, ''];
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

  const sum = digitsInt.reduce((a, b) => a + b, 0);

  if (sum > 16) {
    return [true, ''];
  }

  return [false, 'Sum must be greater than 16'];
};

function luhn (charArray) {
  const doubleEverySecond = [];

  for (let i = 0; i < charArray.length; i += 2) {
    doubleEverySecond.push(parseInt(charArray[i]) * 2);
    doubleEverySecond.push(parseInt(charArray[i + 1]));
  }

  for (let j = 0; j < charArray.length; j += 2) {
    if (doubleEverySecond[j] >= 10) {
      doubleEverySecond[j] -= 9;
    };
  }

  const sum = doubleEverySecond.reduce((a, b) => a + b, 0);

  if (sum % 10 === 0) {
    return [true, ''];
  }
  return [false, 'Did not pass Luhn Algorithm'];
};

function expired (expiry) {
  // 
  // Bugs:
  // Still allows user to enter dates with decimals as long as the decimal part is zero. (8.0, etc)

  const currentYear = new Date().getFullYear();
  const currentYearShort = currentYear % 1000;
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