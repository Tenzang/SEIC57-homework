const INITIAL_AMOUNT = 0;

const Bank = {
    checkingAccountAmount: INITIAL_AMOUNT,
    savingsAccountAmount: INITIAL_AMOUNT,
    makeDeposit: function(button) {

        button.on("click", function() {
            const $currentButton = $(this);
            const $amountBox = $currentButton.siblings(".amount").first();
            const valueToBeDeposited = Number($amountBox.val());
            const $balanceDiv = $currentButton.siblings(".balance").first();

            if ($currentButton.parent("#checking").length === 1) {
                Bank.checkingAccountAmount += valueToBeDeposited;
                $balanceDiv.html(`$${Bank.checkingAccountAmount}`);
                insertBackgroundColor($balanceDiv, Bank.checkingAccountAmount);
            } else {
                Bank.savingsAccountAmount += valueToBeDeposited;
                $balanceDiv.html(`$${Bank.savingsAccountAmount}`);
                insertBackgroundColor($balanceDiv, Bank.savingsAccountAmount);
            }
        });
    },
    makeWithdraw: function(button) {

        button.on("click", function() {
            const $currentButton = $(this);
            const $amountBox = $currentButton.siblings(".amount").first();
            const valueToBeWithdraw = Number($amountBox.val());
            const $balanceDiv = $currentButton.siblings(".balance").first();

            if ($currentButton.parent("#checking").length === 1) {
                const amountAfterWithdraw = Bank.checkingAccountAmount - valueToBeWithdraw;
                if (isPositiveAmount(amountAfterWithdraw)) {
                    Bank.checkingAccountAmount -= valueToBeWithdraw;
                    $balanceDiv.html(`$${Bank.checkingAccountAmount}`);
                    insertBackgroundColor($balanceDiv, Bank.checkingAccountAmount);
                } else {
                    const bothAccountsAmount = Bank.checkingAccountAmount + Bank.savingsAccountAmount;
                    if (bothAccountsAmount >= valueToBeWithdraw) {
                        const remainingAmount = valueToBeWithdraw - Bank.checkingAccountAmount;
                        Bank.checkingAccountAmount = 0;
                        $balanceDiv.html(`$${Bank.checkingAccountAmount}`);
                        Bank.savingsAccountAmount -= remainingAmount;
                        $("#savings-balance").html(`$${Bank.savingsAccountAmount}`);
                        insertBackgroundColor($balanceDiv, Bank.checkingAccountAmount);
                        insertBackgroundColor($("#savings-balance"), Bank.savingsAccountAmount);
                    }
                }
            } else {
                const amountAfterWithdraw = Bank.savingsAccountAmount - valueToBeWithdraw;
                if (isPositiveAmount(amountAfterWithdraw)) {
                    Bank.savingsAccountAmount -= valueToBeWithdraw;
                    $balanceDiv.html(`$${Bank.savingsAccountAmount}`);
                    insertBackgroundColor($balanceDiv, Bank.savingsAccountAmount);
                }
            }
        });
    }
}

function isPositiveAmount(amount) {
    return amount >= 0;
}

function insertBackgroundColor(accountDiv, amount) {
    if (amount === 0) {
        accountDiv.addClass("zero");
    } else {
        accountDiv.removeClass("zero");
    }
}

$(document).ready(function() {   
    insertBackgroundColor($("#checking-balance"), INITIAL_AMOUNT);
    insertBackgroundColor($("#savings-balance"), INITIAL_AMOUNT);

    Bank.makeDeposit($(".deposit-button"));
    Bank.makeWithdraw($(".withdraw-button"));
});