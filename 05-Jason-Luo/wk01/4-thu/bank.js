// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.


const bankAccounts = {
    acc1: "156.25",
    acc2: ".99",
    acc3: "2523.01",
    acc4: "1430.60",
    acc5: "13340.34",
    acc6: "2562.36"
};

const accountDetails = [
    {
        name: 'Robert Smith',
        balance: '300'
    },
    {
        name: 'Sarah Blake',
        balance: '1235'
    },
    {
        name: 'Jacob Welsh',
        balance: '4673'
    },
    {
        name: 'Timothy Decor',
        balance: '38'
    },
    {
        name: 'Adam Fuse',
        balance: '5391'
    },
    {
        name: 'Rachael Timber',
        balance: '724'
    }

];

function selectAccount(accountName) {
    for (let i = 0; i < accountDetails.length; i++) {
        let currentAccount = accountDetails[i];
        if (currentAccount.name === accountName) {
            console.log(currentAccount);
            return currentAccount;
        }
    }
}


function addAccount(accountName, accountBalance) {
    accountDetails.push({
        name: accountName, //referencing as object
        balance: accountBalance
    })
    console.log(accountDetails);
};

function addDeposit(accountName, depositMoney) {
    let currentBalance = true; //validating the balance
    const mainAccount = selectAccount(accountName);
    mainAccount.balance = mainAccount.balance + depositMoney;

    if (this.valid(amount)) {
        console.log(`${this.name} new bank balance is ${this.balance}`);
        return true;
    } else {
        return false;
    }
}


function Account(name, balance) {
    this.name = name; //referencing as object
    this.balance = balance;
}

Account.prototype.deposit = function (money) {
    if (this.valid(amount)) {
        this.balance = this.balance + money;
        console.log(`${this.name} new bank balance is ${this.balance}`);
        return true;
    } else {
        return false;
    }
}

Account.prototype.withdraw = function (money) {
    if (this.valid(amount)) {
        this.balance = this.balance - money;
        console.log(`${this.name} new bank balance is ${this.balance}`);
        return true;
    } else {
        return false;
    }
}








// Output
console.log(bankSystem(bankAccounts)); // 60.55