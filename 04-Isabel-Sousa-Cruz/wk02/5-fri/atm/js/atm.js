const INITIAL_AMOUNT = 0;

function accountFactory() {
    return {
        amount: INITIAL_AMOUNT,
        $depositButton: undefined,
        $withdrawButton: undefined,
        $balanceDiv: undefined,
        $amountInputBox: undefined,
        setBackgroundColor: function() {
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

            if (this === Bank.checking) {
                const savings = Bank.savings;
                const bothAccountsAmount = this.amount + savings.amount;
                if (bothAccountsAmount >= valueToBeWithdrawn) {
                    const remainingAmount = valueToBeWithdrawn - this.amount;
                    this.withdraw(this.amount);
                    savings.withdraw(remainingAmount);
                }
            }
        }
    }
};

const Bank = {
    checking: accountFactory(),
    savings: accountFactory()
};

function getJqueryChildElement(selector, $parent) {
    return $parent.children(selector).first();
}

$(document).ready(function() {   
    $(".account").each( function() {
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