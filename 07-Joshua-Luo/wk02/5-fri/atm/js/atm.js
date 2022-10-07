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


$(document).ready(function(){

    $('#checking-deposit').on('click',function(){
        const checkingAmount = parseInt($('#checking-amount').val());
        const balance = parseInt($('#checking-balance').text().substring(1));
        const newBalance = balance + checkingAmount;
        if (newBalance > 0) {
            $('#checking-balance').attr('class', 'balance');
        }
        $('#checking-balance').html(`$${newBalance}`);
    })

    $('#checking-withdraw').on('click',function(){
        const checkingAmount = parseInt($('#checking-amount').val());
        const balance = parseInt($('#checking-balance').text().substring(1));
        const savingsBalance = parseInt($('#savings-balance').text().substring(1));
        const newBalance = balance - checkingAmount;
        const newSavingsBlance =balance + savingsBalance - checkingAmount;
        if (newBalance > 0 ) {
            $('#checking-balance').html(`$${newBalance}`);
            $('#checking-balance').attr('class', 'balance');
        } else if (newBalance === 0) {
            $('#checking-balance').html(`$${newBalance}`);
            $('#checking-balance').attr('class', 'balance zero');
        } else if (newBalance < 0 && newSavingsBlance > 0) {
            $('#checking-balance').html(`$0`);
            $('#checking-balance').attr('class', 'balance zero');
            $('#savings-balance').html(`$${newSavingsBlance}`);
            $('#savings-balance').attr('class', 'balance');
        } else if (newBalance < 0 && newSavingsBlance === 0) {
            $('#checking-balance').html(`$0`);
            $('#checking-balance').attr('class', 'balance zero');
            $('#savings-balance').html(`$0`);
            $('#savings-balance').attr('class', 'balance zero');
        } 
    })
    // $('#checking-deposit').on('click',function(){
    //     const checkingAmount = parseInt($('#checking-amount').val());
    //     const balance = parseInt($('#checking-balance').text().substring(1));
    //     const newBalance = balance + checkingAmount;
    //     if (newBalance > 0) {
    //         $('#checking-balance').attr('class', 'balance');
    //     }
    //     $('#checking-balance').html(`$${newBalance}`);
    // })

    // $('#checking-withdraw').on('click',function(){
    //     const checkingAmount = parseInt($('#checking-amount').val());
    //     const balance = parseInt($('#checking-balance').text().substring(1));
    //     const newBalance = balance - checkingAmount;
    //     if (newBalance > 0) {
    //         $('#checking-balance').html(`$${newBalance}`);
    //         $('#checking-balance').attr('class', 'balance');
    //     } else if (newBalance === 0) {
    //         $('#checking-balance').html(`$${newBalance}`);
    //         $('#checking-balance').attr('class', 'balance zero');
    //     }
    // })

    // $('#savings-deposit').on('click',function(){
    //     const savingsAmount = parseInt($('#savings-amount').val());
    //     const balance = parseInt($('#savings-balance').text().substring(1));
    //     const newBalance = balance + savingsAmount;
    //     if (newBalance > 0) {
    //         $('#savings-balance').attr('class', 'balance');
    //     }
    //     $('#savings-balance').html(`$${newBalance}`);
    // })

    // $('#savings-withdraw').on('click',function(){
    //     const savingsAmount = parseInt($('#savings-amount').val());
    //     const balance = parseInt($('#savings-balance').text().substring(1));
    //     const newBalance = balance - savingsAmount;
    //     if (newBalance > 0) {
    //         $('#savings-balance').html(`$${newBalance}`);
    //         $('#savings-balance').attr('class', 'balance');
    //     } else if (newBalance === 0) {
    //         $('#savings-balance').html(`$${newBalance}`);
    //         $('#savings-balance').attr('class', 'balance zero');
    //     }
    // })

    $('#savings-deposit').on('click',function(){
        const savingsAmount = parseInt($('#savings-amount').val());
        const balance = parseInt($('#savings-balance').text().substring(1));
        const newBalance = balance + savingsAmount;
        if (newBalance > 0) {
            $('#savings-balance').attr('class', 'balance');
        }
        $('#savings-balance').html(`$${newBalance}`);
    })

    $('#savings-withdraw').on('click',function(){
        const savingsAmount = parseInt($('#savings-amount').val());
        const balance = parseInt($('#savings-balance').text().substring(1));
        const checkingBalance = parseInt($('#checking-balance').text().substring(1));
        const newBalance = balance - savingsAmount;
        const newCheckingBlance =balance + checkingBalance - savingsAmount;
        if (newBalance > 0 ) {
            $('#savings-balance').html(`$${newBalance}`);
            $('#savings-balance').attr('class', 'balance');
        } else if (newBalance === 0) {
            $('#savings-balance').html(`$${newBalance}`);
            $('#savings-balance').attr('class', 'balance zero');
        } else if (newBalance < 0 && newCheckingBlance > 0) {
            $('#savings-balance').html(`$0`);
            $('#savings-balance').attr('class', 'balance zero');
            $('#checking-balance').html(`$${newCheckingBlance}`);
            $('#checking-balance').attr('class', 'balance');
        } else if (newBalance < 0 && newCheckingBlance === 0) {
            $('#savings-balance').html(`$0`);
            $('#savings-balance').attr('class', 'balance zero');
            $('#checking-balance').html(`$0`);
            $('#checking-balance').attr('class', 'balance zero');
        } 

    })



})




