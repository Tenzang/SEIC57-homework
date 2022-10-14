$(document).ready(function () { // this function will allow the user to DEPOSIT money in checking based on their input, adding the original value and the input value 
    $('#checking-deposit').on('click', function () {
        const depositVal = $('#checking-amount').val();
        const balance = $('#checking-balance').text();
        const number = (balance).slice(1);
        const depositTotal = Number(number) + Number(depositVal);
        $('#checking-balance').html(`$ ${depositTotal}`);
    })
})

$(document).ready(function () { // this function will allow the user to WITHDRAW money from checking based on their input, subtracting the input value from the original value 
    $('#checking-withdraw').on('click', function () {
        const withdrawVal = $('#checking-amount').val();
        let balance = $('#checking-balance').text();
        balance = (balance).slice(1);
        const newBalance = Number(balance) - Number(withdrawVal);
        let savingsBalance = $('#savings-balance').text();
        savingsBalance = (savingsBalance).slice(1);
        if (newBalance >= 0) { // this conditonal makes sure you don't withdraw over your balance value
            $('#checking-balance').html(`$ ${newBalance}`);
            if (newBalance === 0) {
                $('#checking .balance').addClass('zero'); // this changes the background to red if your balance is equal to 0
            }
        } else if (savingsBalance >  0) {
            $('#savings-balance').html(`$ ${newBalance}`);
            overdraftSavings(newBalance);
            // the new savings balance that's negative
            // add the negative value back to other account
            // set account to zero
        }
    })
})


$(document).ready(function () { // this function will allow the user to DEPOSIT money in savings based on their input, adding the original value and the input value 
    $('#savings-deposit').on('click', function () {
        const depositVal = $('#savings-amount').val();
        const balance = $('#savings-balance').text();
        const number = (balance).slice(1);
        const depositTotal = Number(number) + Number(depositVal);
        $('#savings-balance').html(`$ ${depositTotal}`);
    })
})

$(document).ready(function () { // this function will allow the user to WITHDRAW money from savings based on their input, subtracting the input value from the original value 
    $('#savings-withdraw').on('click', function () {
        const withdrawVal = $('#savings-amount').val();
        let balance = $('#savings-balance').text();
        balance = (balance).slice(1);
        const newBalance = Number(balance) - Number(withdrawVal);
        let checkingBalance = $('#checking-balance').text();
        checkingBalance = (checkingBalance).slice(1);
        if (newBalance >= 0) { // this conditonal makes sure you don't withdraw over your balance value
            $('#savings-balance').html(`$ ${newBalance}`);
            if (newBalance === 0) {
                $('#savings .balance').addClass('zero'); // this changes the background to red if your balance is equal to 0
            }
        } else if (checkingBalance >  0) {
            $('#savings-balance').html(`$ ${newBalance}`);
            overdraftChecking(newBalance);
            // the new savings balance that's negative
            // add the negative value back to other account
            // set account to zero
        }
    })
})



// write function that given overdraw amount, withdraw from checking / savings if theres enough money
const overdraftChecking = function (newBalance) {
    let checkingBalance = $('#checking-balance').text();
    checkingBalance = (checkingBalance).slice(1);
    const newCheckingBalance = Number(checkingBalance) + Number(newBalance);
    if (newCheckingBalance <= 0) {
        $('#checking-balance').html(`$ ${newCheckingBalance}`);
        $('#savings-balance').html(`$0`);
    }
}

const overdraftSavings= function (newBalance) {
    let savingsBalance = $('#savings-balance').text();
    savingsBalance = (savingsBalance).slice(1);
    const newSavingsBalance = Number(savingsBalance) + Number(newBalance);
    if (newSavingsBalance <= 0) {
        $('#savings-balance').html(`$ ${newSavingsBalance}`);
        $('#checking-balance').html(`$0`);
    }
}





