
const checking = {
    account: 'checking',
    balance:100,
    deposit: function (){
        this.balance = deposit(this.balance,'#checking-amount');
        updateBalance();
    },
    withdraw: function (){
        this.balance = withdraw(this.balance,'#checking-amount',this.account);
        updateBalance();
    }
}
const savings = {
    account: 'savings',
    balance:150,
    deposit: function (){
        this.balance = deposit(this.balance,'#savings-amount');
        updateBalance();
    },
    withdraw: function (){
        this.balance = withdraw(this.balance,'#savings-amount',this.account);
        updateBalance();
    }
}

$(document).ready(function(){
    $("#checking-deposit").on('click',function (){
        if(validate($('#checking-amount').val())){
            checking.deposit();
        }
    });
    $("#checking-withdraw").on('click',function (){
        if(validate($('#checking-amount').val())){
            checking.withdraw();
        }
    });
    $("#savings-deposit").on('click',function (){
        if(validate($('#savings-amount').val())){
            savings.deposit();
        }
    });
    $("#savings-withdraw").on('click',function (){
        if(validate($('#savings-amount').val())){
            savings.withdraw();
        }
    });
    updateBalance();

});
function updateBalance(){
    const cBalance = checking.balance;
    const sBalance = savings.balance;
    $('#checking-balance').html(`$${cBalance}`);
    $('#savings-balance').html(`$${sBalance}`);
    $('.balance').each(function(){
        if(Number($(this).html().slice(1))===0){
            $(this).addClass('zero');
        };
    })
}
function validate(value){
    value=Number(value);
    if(value>0 && !isNaN(value)){
        return true;
    }
    error("must be a number above 0");
    return false;
}
function deposit(balance,account){
    return balance + (Number($(account).val()));
}
function withdraw(balance,value,account){
    withdrawAmount = Number($(value).val());
    const newBal = balance - withdrawAmount;
    if (newBal>=0){ 
        return newBal;
    }else{
        balance = overdraw(balance,withdrawAmount,account);
        return balance;
    }
}
function overdraw(notEnough,withdraw,account){
    let total = savings.balance+checking.balance;
    if (total>withdraw){
        const remainder = withdraw-notEnough;
        switch (account){
            case "savings": 
            checking.balance -=remainder;
            return 0;
            case "checking": 
            savings.balance -=remainder;
            return 0; 
        }
    }
    error("Not enough money in both accounts");
    return notEnough;
}


function error(message){
    const posX = (window.innerWidth/2)-200;
    const posY = (window.innerHeight/2)-100;
    $('.error').css({'display': 'absolute',"top":`${posY}px`,"left":`${posX}px`});
    $('#errorMessage').html(message);
    $('.error').removeClass('hidden');
    $('#content').addClass('blur')
    setTimeout(function(){
        $('.error').addClass('hidden');
        $('#content').removeClass('blur');
    },4000);
}



