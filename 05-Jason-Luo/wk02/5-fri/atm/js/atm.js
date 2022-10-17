//main objectives
//deposit money
//withdraw money
//cant withdraw if not enough money for account balance
//overdraft protection

//deposit 
//connect buttons to functions
function checkForZero() {
    $('.zero').removeClass('zero');
    let checkingMoney = ($("#checking-balance").text());
    console.log(checkingMoney);
    let initMoney = parseInt(checkingMoney.substring(1, checkingMoney.length));
    if (initMoney <= 0) {
        $('#checking-balance').addClass('zero');
    }

    let savingsMoney = ($("#savings-balance").text());
    console.log(savingsMoney);
    let overallSavings = parseInt(savingsMoney.substring(1, savingsMoney.length));
    if (overallSavings <= 0) {
        $('#savings-balance').addClass('zero');
    }

}


$(document).ready(function () {
    checkForZero();
    let checkingAccount = { balance: 2320 };
    let savingAccount = { balance: 23255 };

    function update() {
        let checkBal = $("#checking-balance").html("$" + checkingAccount.balance);
        console.log(checkBal);

        let savBal = $("#savings-balance").html("$" + savingAccount.balance);
        console.log(savBal);
    }

    update();

    function depositMoney() {
        $("#checking-deposit").on('click', function () {
            let initCheck = ($("#checking-balance").text());
            console.log(initCheck);
            let initMoney = parseInt(initCheck.substring(1, initCheck.length));
            console.log(initMoney);
            let deposit = parseInt($("#checking-amount").val());
            console.log(deposit);
            let total = deposit + initMoney;
            console.log(total);
            $('#checking-balance').text('$' + total);
            checkForZero();
        });
    };

    depositMoney();

    function withdrawMoney() {
        $("#checking-withdraw").on('click', function () {
            let initCheck = ($("#checking-balance").text());
            console.log(initCheck);
            let initMoney = parseInt(initCheck.substring(1, initCheck.length));
            console.log(initMoney);
            let withdraw = parseInt($("#checking-amount").val());
            console.log(withdraw);
            let total = initMoney - withdraw;
            console.log(total);
            if (total >= 0) {
                $('#checking-balance').text('$' + total);
            } else
                if (withdraw <= total) {
                    $('#checking-balance').text('$0');
                }
            checkForZero();
        });
    };

    withdrawMoney();


    //Savings Account

    function savingDeposit() {
        $("#savings-deposit").on('click', function () {
            let initCheck = ($("#savings-balance").text());
            console.log(initCheck);
            let initMoney = parseInt(initCheck.substring(1, initCheck.length));
            console.log(initMoney);
            let deposit = parseInt($("#savings-amount").val());
            console.log(deposit);
            let total = deposit + initMoney;
            console.log(total);
            $('#savings-balance').text('$' + total);
            checkForZero();
        });
    };

    savingDeposit();

    function savingsWithdraw() {
        $("#savings-withdraw").on('click', function () {
            let initCheck = ($("#savings-balance").text());
            console.log(initCheck);
            let initMoney = parseInt(initCheck.substring(1, initCheck.length));
            console.log(initMoney);
            let withdraw = parseInt($("#savings-amount").val());
            console.log(withdraw);
            let total = initMoney - withdraw;
            console.log(total);
            if (total >= 0) {
                $('#savings-balance').text('$' + total);
            } else
                if (withdraw <= total) {
                    $('#savings-balance').text('$0');
                }
            checkForZero();
        });
    };

    savingsWithdraw();



    // $('#checking-deposit').click(function () {
    //     // console.log('#checking-amount');


    //     let currentAmount = checkingAccount.balance;
    //     console.log(currentAmount);
    //     let $preBalance = $("#checking-amount").val()

    //     let result = $preBalance.each();
    //     console.log(result);

    //     let displayBalance = parseFloat($preBalance);
    //     console.log(displayBalance);

    //     const checkingBalance = currentAmount + displayBalance;
    //     console.log(checkingBalance);


    // function newMoney() {
    //     if (newMoney > 0) {
    //         let depositMoney = depositMoney + newMoney;
    //         alert(`You have deposited $ ${newMoney}.`);

    //     } else {
    //         alert(`You can deposit a negative balance`);
    //     }

    // }

    // let input = div.checking - deposit;
    // let $currentBalance = $(input).siblings("div.balance");
    // console.log($currentBalance);
    // let balanceResult = parseFloat($currentBalance.html().replace("$", " "));
    // console.log(balanceResult);
    // let newMoney = parseFloat($(balanceResult).siblings("input.checking-amount").val());
    // console.log(newMoney);

    // $($currentBalance).html(function () {
    //     const checkingBalance = checkingBalance + newMoney;
    //     return "$" + checkingBalance;
    // });


    // $(input).siblings("input.checking-amount").val("");
    // $(input).siblings("div.balance").css("background-color", "#E3E3E3");

    // if (moneyTotal > 0) {
    //     alert(`You have successfully deposited $` + moneyTotal);
    // } else {
    //     alert(`Please enter a valid number to deposit.`);
    // }

});




// $('#savings-deposit').on('click', function (moneyTotal) {
//     if (moneyTotal > 0) {
//         alert(`You have successfully deposited $` + moneyTotal);
//     } else {
//         alert(`Please enter a valid number to deposit.`);
//     }
//     const savingsBalance = savingsBalance + moneyTotal;
// });


// $('#moneyCheckingMinus').on('click', function (moneySubtract) {

// });
// $('#moneySavingsMinus').on('click', function (moneySubtract) {

// });

