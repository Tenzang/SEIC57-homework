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

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
Additional
Begin exploring the JavaScript Koans. Fork, clone and start trying them.
*/

const NO_BALANCE = "Your account has no balance!"
const NEW_BALANCE = "new balance is:"
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
        this.accounts.push(account);
        return SUCCESSFULLY_CREATED;
    },
    checkAccountBalance: function(balance) {
        return balance - amount < 0;
    },
     makeDeposit: function(name, amount) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].ownersName === name) {
                return `${name}'s ${NEW_BALANCE} $${this.accounts[i].balance += amount}`;
            }
        }
        return `${CLIENT_NOT_FOUND} ${name}, sorry!`
    },
    makeWithdraw: function(name, amount) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].ownersName === name) {
                const balance = this.accounts[i].balance

                const isBalanceNegative = this.checkAccountBalance(balance) 
                if (!isBalanceNegative) return NEGATIVE_BALANCE;

                return `${name}'s ${NEW_BALANCE} $${this.accounts[i].balance -= amount}`;
            }
        }
        return `${CLIENT_NOT_FOUND} ${name}, sorry!`
    },
    makeTransaction: function(fromName, toName, amount) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].ownersName === fromName) {
                for (let j = 0; j < this.accounts.length; j++) {
                    if (this.accounts[i].ownersName === toName) {
                        const isBalanceNegative = this.checkAccountBalance(balance) 
                        if (!isBalanceNegative) return NEGATIVE_BALANCE;   
                        const fromNameNewBalance = this.accounts[i].balance -= amount;
                        const toNameNewBalance = this.accounts[j].balance += amount;
                        const messageToBeReturned = `Transaction made from ${fromName} to ${toName}.\n${fromName}'s ${NEW_BALANCE} is $${fromNameNewBalance}.\n${toName}'s ${NEW_BALANCE} is $${toNameNewBalance}`;
                        return messageToBeReturned;
                    }
                }
                return `${CLIENT_NOT_FOUND} ${toName}, sorry!`
            }
        }
        return `${CLIENT_NOT_FOUND} ${fromName}, sorry!`
    }
};

// story 1

console.log(bank.addAccount("Stella"));
console.log(bank.makeDeposit("Stella", 100)); // I could find a way to always return true and based on the value, deal with it, like above,
console.log(bank.makeDeposit("Stella", 200)); // but I'm really tired
console.log(bank.makeWithdraw("Stella", 100)); 
console.log(`\n`)
// story 2

console.log(bank.addAccount("Chloe"));
console.log(bank.makeDeposit("Chloe", 10));
console.log(bank.makeWithdraw("Chloe", 200));
console.log(bank.makeWithdraw("Chloe", 10)); 
console.log(bank.makeWithdraw("Chloe", 10)); 

console.log("-------------------------------------------")

// story 3

console.log(bank.addAccount("Jhon"));
console.log(bank.makeDeposit("Jhon", 10));
console.log(bank.makeTransaction("Jhon", "Chloe", 200));
console.log(bank.makeDeposit("Jhon", 200)); 
console.log(bank.makeWithdraw("Jhon", 10)); 