const INITIAL_AMOUNT = 0;

function accountFactory() {
    return {
        amount: INITIAL_AMOUNT,
        fallbackAccount: undefined,
        $depositButton: undefined,
        $withdrawButton: undefined,
        $balanceDiv: undefined,
        $amountInputBox: undefined,
        setBackgroundColor() {
            if (this.amount === 0) {
                this.$balanceDiv.addClass("zero");
            } else {
                this.$balanceDiv.removeClass("zero");
            }
        },
        makeDeposit() {
            const valueToBeDeposited = Number(this.$amountInputBox.val());
            this.amount += valueToBeDeposited;
            this.$balanceDiv.html(`$${this.amount}`);
            this.setBackgroundColor();
        },
        withdraw(amount) {
            this.amount -= amount;
            this.$balanceDiv.html(`$${this.amount}`);
            this.setBackgroundColor();
        },
        processWithdrawal() {
            const valueToBeWithdrawn = Number(this.$amountInputBox.val());
            const amountAfterWithdraw = this.amount - valueToBeWithdrawn;

            if (amountAfterWithdraw >= 0) {
                this.withdraw(valueToBeWithdrawn);
                return;
            } 

            const bothAccountsAmount = this.amount + this.fallbackAccount.amount;
            if (bothAccountsAmount >= valueToBeWithdrawn) {
                const remainingAmount = valueToBeWithdrawn - this.amount;
                this.withdraw(this.amount);
                this.fallbackAccount.withdraw(remainingAmount);
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

function getJqueryChildElement(selector, $parent) {
    return $parent.children(selector).first();
}

$(document).ready(function() {   
    $(".account").each(function() {
        const accountName = $(this).attr("id");
        const account = Bank[accountName];
        account.$depositButton = getJqueryChildElement(".deposit-button", $(this));
        account.$withdrawButton = getJqueryChildElement(".withdraw-button", $(this));
        account.$balanceDiv = getJqueryChildElement(".balance", $(this));
        account.$amountInputBox = getJqueryChildElement(".amount", $(this));
        account.$depositButton.on("click", () => account.makeDeposit());
        account.$withdrawButton.on("click", () => account.processWithdrawal());
        account.setBackgroundColor();
    });
});