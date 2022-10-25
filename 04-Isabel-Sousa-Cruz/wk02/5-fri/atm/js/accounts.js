function accountFactory(initialBalance = 0) {
    return {
        balance: initialBalance,
        fallbackAccount: undefined,
        $deposit: undefined,
        $withdraw: undefined,
        $balance: undefined,
        $amount: undefined,
        setBackgroundColor() {
            if (this.balance === 0) {
                this.$balance.addClass("zero");
            } else {
                this.$balance.removeClass("zero");
            }
        },
        changeBalance(amount) {
            this.balance += amount;
            this.$balance.html(`$${this.balance}`);
            this.setBackgroundColor();
        },
        processDeposit() {
            const amount = Number(this.$amount.val());
            if (amount) {
                this.changeBalance(amount);
            }
        },
        processWithdrawal() {
            const amount = Number(this.$amount.val());
            if (amount) {
                const balanceAfterWithdraw = this.balance - amount;

                if (balanceAfterWithdraw >= 0) {
                    this.changeBalance(-amount);
                    return;
                } 

                const bothAccountsBalance = this.balance + this.fallbackAccount.balance;
                if (bothAccountsBalance >= amount) {
                    const remainingAmount = amount - this.balance;
                    this.changeBalance(-this.balance);
                    this.fallbackAccount.changeBalance(-remainingAmount);
                }
            }
        }
    }
};

const Bank = {
    checking: accountFactory(),
    savings: accountFactory()
};
Bank.checking.fallbackAccount = Bank.savings;
Bank.savings.fallbackAccount = Bank.checking;