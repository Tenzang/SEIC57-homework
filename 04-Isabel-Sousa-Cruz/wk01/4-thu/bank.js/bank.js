/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts.
It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. 
There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log()
values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: 
add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
*/

const NO_BALANCE = "Your account has no balance!"
const NEW_BALANCE = "Your new balance is:"
const NEGATIVE_BALANCE = "You can not withdraw this amount, otherwise your account balance will be negative!"
const CLIENT_NOT_FOUND = "We didn't find a client named"
const SUCCESSFULLY_CREATED = "Your acount was created! Now it's time for a deposit."
const NOT_CREATED = "Sorry, try again in a moment!"


const bank = {
    accounts: [],
    sumOfMoney: function () {
        return 0;
    },
    addAccount: function(name) {
        const account = {
            balance: amount = 0,
            ownersName: name
        }
        return account;
    },
    makeDeposit: function(name, amount) {
        for (let i = 0; i < bank.accounts.length; i++) {
            if (bank.accounts[i].ownersName === name) {
                return `${NEW_BALANCE} ${bank.accounts[i].balance += amount}`;
            }
        }
        return `${CLIENT_NOT_FOUND} ${name}, sorry!`
    },
    makeWithdraw: function(name, amount) {
        for (let i = 0; i < bank.accounts.length; i++) {
            if (bank.accounts[i].ownersName === name) {
                const balance = bank.accounts[i].balance
                if (balance === 0) {
                    return NO_BALANCE;
                }
                if (balance - amount < 0) {
                    return NEGATIVE_BALANCE;
                }
                return `${NEW_BALANCE} ${bank.accounts[i].balance -= amount}`;
            }
        }
        return `${CLIENT_NOT_FOUND} ${name}, sorry!`
    }
};

// story 1

const newAccount1 = bank.addAccount("Stella");
bank.accounts.push(newAccount1);
console.log(SUCCESSFULLY_CREATED);


console.log(bank.makeDeposit("Stella", 100)); // I could find a way to always return true and based on the value, deal with it, like above,
console.log(bank.makeDeposit("Stella", 200)); // but I'm really tired
console.log(bank.makeWithdraw("Stella", 100)); 

console.log(`\n`)
// story 2

const newAccount2 = bank.addAccount("Chloe");
bank.accounts.push(newAccount2);
console.log(SUCCESSFULLY_CREATED);

console.log(bank.makeDeposit("Chloe", 10));
console.log(bank.makeWithdraw("Chloe", 200));
console.log(bank.makeWithdraw("Chloe", 10)); 
console.log(bank.makeWithdraw("Chloe", 10)); 