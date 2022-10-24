$(document).ready(function() {   
    $(".account").each(function() {
        const accountName = $(this).attr("id");
        const account = Bank[accountName];
        account.$deposit = $(this).children(".deposit");
        account.$withdraw = $(this).children(".withdraw");
        account.$balance = $(this).children(".balance");
        account.$amount = $(this).children(".amount");
        account.$deposit.on("click", () => account.processDeposit());
        account.$withdraw.on("click", () => account.processWithdrawal());
        account.setBackgroundColor();
    });
});