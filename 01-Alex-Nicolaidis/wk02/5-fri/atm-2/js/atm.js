$(document).ready(function(){

    const deposit = function (){
        let account = $(this).parent().attr('id')
        let $balance = $(this).siblings('.balance');
        let $amount = $(this).siblings('.amount');
        let current = parseFloat($balance.html().substring(1));
        let inputValue = Number($amount.val());
        if(!isNaN(inputValue)){
            current += inputValue;
            $balance.html(`$${current}`);
            $amount.val('');
            $('.message').html(`$${inputValue} has been deposited into the ${account} account`);
            $balance.removeClass('zero');
        }else{
            $amount.val('');
            $('.message').html("Invalid Input Please Try Again")
        }
    }

    const withdraw = function (){
        let account = $(this).parent().attr('id')
        let otherAccount = 'savings';
        if (account !== 'checking'){
            otherAccount = 'checking';
        }
        let $balance = $(this).siblings('.balance');
        let $otherBalance = $(`#${otherAccount}-balance`);
        let $amount = $(this).siblings('.amount');
        let current = parseFloat($balance.html().substring(1));
        let otherCurrent = parseFloat($otherBalance.html().substring(1));
        let inputValue = Number($amount.val());

        if(isNaN(inputValue)){
            $('.message').html("Invalid Input Please Try Again.")
        }else if(current >= inputValue){
            current -= inputValue
            $balance.html(`$${current}`);
            $amount.val('');
            $('.message').html(`$${inputValue} has been withdrawn from the ${account} account.`);
        }else if(current + otherCurrent >= inputValue){ //enough money in both accounts
            $balance.html('$0')
            $otherBalance.html(`$${otherCurrent - (inputValue - current)}`)
            $amount.val('')
            $('.message').html(`$${inputValue} has been withdrawn, ${current} from the ${account} account and ${inputValue - current} from the ${otherAccount} account.`)
        }else{ // not enough money 
            $('.message').html(`$${inputValue} cannot be withdrawn from these accounts.`);
        }
        if($balance.html() === '$0'){
            $balance.addClass('zero');
        }
        if($otherBalance.html() === '$0'){
            $otherBalance.addClass('zero');
        }
    }

    $('#checking-deposit').on('click',deposit);
    $('#savings-deposit').on('click',deposit);
    $('#checking-withdraw').on('click',withdraw);
    $('#savings-withdraw').on('click',withdraw);
})

