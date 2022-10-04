// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
// Don't overthink this. Shorter code is probably the answer.

// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.


const bankAcc = [
    {
        name: 'Michael Anderson' ,
        accBal: 100
    },
    {
        name: 'Alex Nicoladis' ,
        accBal: 100
    },
    {
        name: 'Brianna Danford',
        accBal: 100
    },
    {
        name: 'Gissell Bustos',
        accBal: 100
    },
    {
        name: 'Isabel Sousa Cruz',
        accBal: 100
    },
    {
        name: 'Jason Luo',
        accBal: 100
    },
    {
        name: 'Jiakal Ren',
        accBal: 100
    },
    {
        name: 'Joshua Luo',
        accBal: 100 
    },
    {
        name: 'Keshia Wijaya',
        accBal: 100
    },
    {
        name: 'Minquin Xu',
        accBal: 100
    },
    {
        name: 'Sophia Pache',
        accBal: 100
    },
    {
        name: 'Talal Hamzeh',
        accBal: 100
    },
]
const functions = ["deposit(name, deposit Amount)","withdraw(name,withdrawAmount)","getAccBal(Name)","transfer(from, to, amount)",'**STAFF ONLY** addAccount(name, balance)',"**STAFF ONLY** totalBankBalance()","optus(name)"]
menu();
function menu(){
    console.clear();
    console.log("Input Options");
    console.log(functions.join("\n"));
}

function addAccount(name, bal){
    bankAcc.push({
        name: name,
        accBal: bal
    })
    console.table(bankAcc);
}


function searchName(name){  //allows a name input instead of knowing indexes
    let findAcc = bankAcc.find(o => o.name === name); // arrow functions?!?!?!
    return findAcc;
}

function deposit(name,depositAm,bal=true){ //bal is used for transfer display
    const account = searchName(name);
    // console.log(account.accBal);
    account.accBal = account.accBal + depositAm;
    if (bal){
        menu();
    console.log(`New balance is $${account.accBal}`)
    };
}


function withdraw(name,withdrawAm,bal = true){//bal is used for transfer display
    const account = searchName(name);
    // console.log(account.accBal);
    let newBal = account.accBal - withdrawAm;
    if(newBal>=0){
        account.accBal = newBal;
        if (bal){
            menu();
            console.log(`New balance is $${account.accBal}`)
        };
        return true
    } else{
        menu();
        console.log("You are too broke");
        console.log(`You only have $${account.accBal}`);
        return false
    }
}


function getAccBal(Name){
    const account = searchName(Name);
    console.log(`Your balance is $${account.accBal}`);
    
}


function totalBankBalance(){
    let total = 0;
    let account
    for (let i = 0;i<bankAcc.length;i++){
        account = bankAcc[i].accBal;
        total = account + total;
    }
    menu()
    console.log(`Bank balance is $${total}`)
    return total
}


function transfer(from, to, amount){
    if(withdraw(from, amount, false)){
        deposit(to, amount, false);
        let toAcc = getAccBal(to);
        let fromAcc = getAccBal(from);
        console.log(`${toAcc.name} Your bank balance is $${toAcc.accBal}`)
        console.log(`${fromAcc.name} Your bank balance is $${fromAcc.accBal}`)
    }
}


function optus(name){
    account = searchName(name);
    account.accBal = 0;
    menu();
    console.log(`Bank balance is $${account.accBal}`)
    console.log("Your identity has been stolen, please file a fraudulent activity report")
}


