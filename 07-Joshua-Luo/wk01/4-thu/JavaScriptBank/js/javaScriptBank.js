// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and 
// the following capabilities that you need to write. 

// #### Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will 
// return the total sum of money in the accounts. It also needs an `addAccount` method that will 
// enroll a new account at the bank and add it to the array of accounts. There is no need to create 
// additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. 

const account = function (n,b) {
    return {
        name: n,
        balance: b
    };
};

const accounts = [

    account('Alex', 200),
    account('Brianna', 300)

];

const addAccount = function (a) {
    accounts.push(a);
}

// const account = function (n, b) {
   
//     this.name = n;
//     this.balance = b;


// };

// const accounts = [
//     account('Alex', 0),
//     account('Brianna', 0)
// ]

// const addAccount = function (n, b) {
//     const newAccount = new account;
//     newAccount.name = n;
//     newAccount.balance = b;
//     accounts.push(newAccount);
// };

addAccount(account('Joshua', 100));
console.log(accounts);


const findAccount = function (n) {
    let accountsName = [];
    for (let i = 0 ; i < accounts.length; i++) {
        accountsName.push(accounts[i].name);
        }
    // console.log(accountsName);    
    if (accountsName.includes(n)){
        return accountsName.indexOf(n);
    } else {
        console.log('This account is not exit.');
    }

};
console.log(findAccount('Joshua'));

const totalMoney = function (n) {
    let i = findAccount(n);
    return accounts[i].balance;
};
console.log(totalMoney('Joshua'));

const checkBalance = function (n,m) {
    if (totalMoney(n) < m){
        console.log('There is no insufficient fund in your account.');
        return false;
    } else {
        return true;
    }
};

const depositMoney = function (n, m) {
    let i = findAccount(n);
    accounts[i].balance += m ;
};
depositMoney('Joshua', 20);
console.log(totalMoney('Joshua'));


const withdrawMoney = function (n, m) {
    let i = findAccount(n);
    if (checkBalance(n,m)) {
        accounts[i].balance -= m;
    }
};
withdrawMoney('Joshua', 20);
console.log(totalMoney('Joshua'));

const transfer = function (a,b,m){
    
    if (checkBalance(a,m)) {
        withdrawMoney(a,m);
        depositMoney(b,m);
        
    }
    
};


withdrawMoney('Joshua', 30);
withdrawMoney('Joshua', 100);
console.log(totalMoney('Joshua'));
transfer('Joshua','Alex',50);
console.log(totalMoney('Joshua'));
console.log(totalMoney('Alex'));
// #### Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an 
// account to change the balance. 

// There is no need to write a user interface. Make sure functions return values -- you may also have 
// your functions `console.log()` values to help you see your code working. 

// You should write a basic story through a series of JavaScript commands that shows that the methods 
// do indeed work as expected: add some accounts, show the total balance, make some deposits and 
// withdrawals, show the new total balance. 

// ### Tips

// Don't overthink this. Shorter code is probably the answer. 

// ## Bonus

// - Ensure that the accounts cannot have negative values. 
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. 

// ## Additional

// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, 
// clone and start trying them. 
