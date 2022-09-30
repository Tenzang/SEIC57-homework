// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
// #### Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality. 
// #### Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance. 
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working. 
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance. 
// ### Tips
// Don't overthink this. Shorter code is probably the answer.
// ## Bonus
// - Ensure that the accounts cannot have negative values. 
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. 
// ## Additional
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.



// FUNCTIONS FOR THE BANK 

let totalBankMoney = function (bank){
    let totalMoney = 0;
    for (let i = 0; i < bank.length; i++){
        let account = bank[i];
        totalMoney += account.currentBalance;
    }
    return totalMoney;
};

//add an account as an object and push into the banks list of accounts
const addAccount = function (customerName, initalBalance, bank){
    const customerAccount = {
        name: customerName,
        currentBalance: initalBalance
    };
    bank.push(customerAccount);
};

const withdraw = function (amount, customerName, bank){
    let withdrawn = amount;
    for (let i = 0; i < bank.length; i++){
        const account = bank[i]
        if ( account.name === customerName ){
            if( account.currentBalance < amount ){
                withdrawn = account.currentBalance;
                console.log(`${account.name} you only have ${withdrawn} left. Here is your $${account.currentBalance} your account is now empty.`);
                account.currentBalance = 0;
            }else{
                account.currentBalance -= amount;
                console.log(`${account.name} your remaining Balance is $${account.currentBalance}. Here is your $${amount}.`)
            };
        };
    };
    return withdrawn; //by returning withdrawn it allows input into transfer
};

const deposit = function (amount, customerName, bank){
    for (let i = 0; i < bank.length; i++){
        const account = bank[i]
        if ( account.name === customerName ){
            account.currentBalance += amount;
            console.log(`${account.name} your $${amount} has been deposited. Your current balance is now $${account.currentBalance}`);
        };
    };
};

const transfer = function (fromName, toName, amount, bank){
    deposit(withdraw(amount,fromName,bank),toName,bank);
    console.log(`The above deposit and withdrawal shows an internal bank transfer from ${fromName} to ${toName} with a value of $${amount}`);
};


// THE STORY OF THE BANK //

//A new bank was opened

const bank = [];

//the bank got 5 new customers

addAccount('Alex', 100, bank);
addAccount('Tom', 300, bank);
addAccount('Zoe', 400, bank);
addAccount('Peter', 1000, bank);
addAccount('John', 250, bank);

//Display of the bank below refer console
console.table(bank);

//The bank had a total of ....... // expect 2050 at this point

console.log(totalBankMoney(bank));

//A couple of deposits and withdrawals

withdraw(50,"Alex",bank);
withdraw(400,"Tom",bank); // note here Tom doesn't have 400.
withdraw(100,"Zoe",bank);

deposit(500, "Peter",bank);
deposit(325, "Peter",bank);

//The bank had a total of ....... // expect 2425 at this point

console.log(totalBankMoney(bank));

// A couple more customers join.

addAccount('Lucy', 90, bank);
addAccount('Jess', 580, bank);
addAccount('Luke', 340, bank);

//Display of the bank below refer console

console.table(bank);

//New bank total ....... // expect 3435 at this point

console.log(totalBankMoney(bank));


// a couple of internal transfers - note at the end shouldn't change the bank total money

transfer("Peter", "Tom", 700, bank);
transfer("Alex", "Lucy", 100, bank);
transfer("Jess", "Lucy", 80, bank);

console.table(bank);

console.log(totalBankMoney(bank));
