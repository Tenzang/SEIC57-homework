// ###Specification:

// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.

// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.

// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?

const bank = {
    checkingBalance: 60,
    savingsBalance: 50,
    checkingDeposit: function (checkingAmount) {
        const newBalance = this.checkingBalance + checkingAmount;
        if (newBalance > 0) {
            this.checkingBalance = newBalance;
            return {
                class: 'balance',
                newBalance: newBalance,
            };
        }
    }, //checkingDeposit finish

    savingsDeposit: function (savingsAmount) {
        const newBalance = this.savingsBalance + savingsAmount;
        if (newBalance > 0) {
            this.savingsBalance = newBalance;
            return {
                class: 'balance',
                newBalance: newBalance
            };
        }
    },  //savingsDeposit finish

    checkingWithdraw: function (checkingAmount) {
        const newCBalance = this.checkingBalance - checkingAmount;
        const newSBalance = this.checkingBalance + this.savingsBalance - checkingAmount;
        if (newCBalance > 0) {
            this.checkingBalance = newCBalance;
            return {
                newCBalance: newCBalance,
                //newCBClass: 'balance',
                newSBalance: this.savingsBalance,
                //newSBClass: 'balance',
            };
        } else if (newCBalance === 0) {
            this.checkingBalance = newCBalance;
            return {
                newCBalance: newCBalance,
                newCBClass: 'balance zero',
                newSBalance: this.savingsBalance,
                //newSBClass: 'balance',
            };
        } else if (newSBalance > 0) {
            this.checkingBalance = 0;
            this.savingsBalance = newSBalance;
            return {
                newCBalance: this.checkingBalance,
                newCBClass: 'balance zero',
                newSBalance: newSBalance,
                //newSBClass: 'balance',
            };
        } else if (newSBalance === 0) {
            this.checkingBalance = 0;
            this.savingsBalance = 0;
            return {
                newCBalance: this.checkingBalance,
                newCBClass: 'balance zero',
                newSBalance: this.savingsBalance,
                newSBClass: 'balance zero',
            };
        } else { //In this case, there are no suffient funds in both accounts
            return {
                newCBalance: this.checkingBalance,
                //newCBClass: 'balance',
                newSBalance: this.savingsBalance,
                //newSBClass: 'balance',
            };
        }
    }, //checkingWithdraw finish

    savingsWithdraw: function (savingsAmount) {
        const newSBalance = this.savingsBalance - savingsAmount;
        const newCBalance = this.savingsBalance + this.checkingBalance - savingsAmount;
        if (newSBalance > 0) {
            this.savingsBalance = newSBalance;
            return {
                newSBalance: newSBalance,
                //newSBClass: 'balance',
                newCBalance: this.checkingBalance,
                //newCBClass: 'balance',
            };
        } else if (newSBalance === 0) {
            this.savingsBalance = newSBalance;
            return {
                newSBalance: newSBalance,
                newSBClass: 'balance zero',
                newCBalance: this.checkingBalance,
                //newCBClass: 'balance',
            };
        } else if (newCBalance > 0) {
            this.savingsBalance = 0;
            this.checkingBalance = newCBalance;
            return {
                newSBalance: this.savingsBalance,
                newSBClass: 'balance zero',
                newCBalance: newCBalance,
                //newCBClass: 'balance',
            };
        } else if (newCBalance === 0) {
            this.savingsBalance = 0;
            this.checkingBalance = 0;
            return {
                newSBalance: this.savingsBalance,
                newSBClass: 'balance zero',
                newCBalance: this.checkingBalance,
                newCBClass: 'balance zero',
            };
        } else { //In this case, there are no suffient funds in both accounts
            return {
                newSBalance: this.savingsBalance,
                //newSBClass: 'balance',
                newCBalance: this.checkingBalance,
                //newCBClass: 'balance',
            };
        }
    }, //savingsWithdraw finish

};   // bank finish




