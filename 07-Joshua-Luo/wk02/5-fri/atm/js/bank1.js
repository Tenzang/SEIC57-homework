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
    cBClass: 'balance',
    sBClass: 'balance',

    checkingDeposit: function (checkingAmount) {
        const newBalance = this.checkingBalance + checkingAmount;
        if (newBalance > 0) {
            this.checkingBalance = newBalance;
            this.cBClass = 'balance';
            return {
                class: this.cBClass,
                newBalance: this.checkingBalance,
            };
        }
    }, //checkingDeposit finish

    savingsDeposit: function (savingsAmount) {
        const newBalance = this.savingsBalance + savingsAmount;
        if (newBalance > 0) {
            this.savingsBalance = newBalance;
            this.sBClass = 'balance';
            return {
                class: this.sBClass,
                newBalance: this.savingsBalance,
            };
        }
    },  //savingsDeposit finish

    checkingWithdraw: function (checkingAmount) {
        const newCBalance = this.checkingBalance - checkingAmount;
        const newSBalance = this.checkingBalance + this.savingsBalance - checkingAmount;
        if (newCBalance >= 0) {
            this.checkingBalance = newCBalance;
            if (newCBalance === 0) {
                this.cBClass = 'balance zero';
            }
        } else if (newSBalance >= 0) {
            this.checkingBalance = 0;
            this.savingsBalance = newSBalance;
            this.cBClass = 'balance zero';
            if (newSBalance === 0) {
                this.sBClass = 'balance zero';
            }
        }

        return {
            newCBalance: this.checkingBalance,
            newCBClass: this.cBClass,
            newSBalance: this.savingsBalance,
            newSBClass: this.sBClass,
        };
    }, //checkingWithdraw finish

    savingsWithdraw: function (savingsAmount) {
        const newSBalance = this.savingsBalance - savingsAmount;
        const newCBalance = this.savingsBalance + this.checkingBalance - savingsAmount;
        if (newSBalance >= 0) {
            this.savingsBalance = newSBalance;
            if (newSBalance === 0) {
                this.sBClass = 'balance zero';
            }
        } else if (newCBalance >= 0) {
            this.savingsBalance = 0;
            this.checkingBalance = newCBalance;
            this.sBClass = 'balance zero';
            if (newCBalance === 0) {
                this.cBClass = 'balance zero';
            }
        }

        return {
            newSBalance: this.savingsBalance,
            newSBClass: this.sBClass,
            newCBalance: this.checkingBalance,
            newCBClass: this.cBClass,
        };
    }, //savingsWithdraw finish

};   // bank finish




