const INITIAL_AMOUNT = 0;

const Bank = {
    checking: INITIAL_AMOUNT,
    savings: INITIAL_AMOUNT
}

function makeDeposit() {
    const $currentButton = $(this);
    const $amountBox = $currentButton.siblings(".amount").first();
    const valueToBeDeposited = Number($amountBox.val());
    const $balanceDiv = $currentButton.siblings(".balance").first();
    const accountName = $currentButton.parent().attr("id");

    Bank[accountName] += valueToBeDeposited;
    $balanceDiv.html(`$${Bank[accountName]}`);
    insertBackgroundColor($balanceDiv, Bank[accountName]);
}

function makeWithdraw() {
    const $currentButton = $(this);
    const $amountBox = $currentButton.siblings(".amount").first();
    const valueToBeWithdraw = Number($amountBox.val());
    const $balanceDiv = $currentButton.siblings(".balance").first();
    const accountName = $currentButton.parent().attr("id");

    if (accountName === "checking") {
        const amountAfterWithdraw = Bank.checking - valueToBeWithdraw;
        if (isPositiveAmount(amountAfterWithdraw)) {
            Bank.checking -= valueToBeWithdraw;
            $balanceDiv.html(`$${Bank.checking}`);
            insertBackgroundColor($balanceDiv, Bank.checking);
        } else {
            const bothAccountsAmount = Bank.checking + Bank.savings;
            if (bothAccountsAmount >= valueToBeWithdraw) {
                const remainingAmount = valueToBeWithdraw - Bank.checking;
                Bank.checking = 0;
                $balanceDiv.html(`$${Bank.checking}`);
                Bank.savings -= remainingAmount;
                $("#savings-balance").html(`$${Bank.savings}`);
                insertBackgroundColor($balanceDiv, Bank.checking);
                insertBackgroundColor($("#savings-balance"), Bank.savings);
            }
        }
    } else {
        const amountAfterWithdraw = Bank.savings - valueToBeWithdraw;
        if (isPositiveAmount(amountAfterWithdraw)) {
            Bank.savings -= valueToBeWithdraw;
            $balanceDiv.html(`$${Bank.savings}`);
            insertBackgroundColor($balanceDiv, Bank.savings);
        }
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

    $(".deposit-button").on("click", makeDeposit);
    $(".withdraw-button").on("click", makeWithdraw);
});