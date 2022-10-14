$(document).ready(function(){
    let $checking = $('#checking-balance');
    let $savings = $('#savings-balance');
    let $message = $('.message');

    const isNumber = function(string){
        //for a given input test if it is valid
        if(isNaN(parseFloat(string))){
            $message.html('Invalid Input please try again');
            return false;
        }else{
            return true;
        }
    }

    const depositMoneyChecking = function (){
        if(isNumber($('#checking-amount').val())){
            $message.empty();
            let current = parseFloat($checking.html().substring(1));

            current += parseFloat($('#checking-amount').val());
            $checking.html(`$${current}`)
            if($checking.html() !== '$0'){
            $checking.removeClass('zero');
            }
        }
    }   

    const withdrawMoneyChecking = function(){
        if(isNumber($('#checking-amount').val())){
            $message.empty();
            let current = parseFloat($checking.html().substring(1));
            const withdrawAmount = parseFloat($('#checking-amount').val());
            if(current >= withdrawAmount){
                current-= withdrawAmount;
                $checking.html(`$${current}`);
                
            }else if(current + parseFloat($savings.html().substring(1))>= withdrawAmount){
                const remainder = withdrawAmount - current
                $savings.html(`$${$savings.html().substring(1) - remainder}`);
                $checking.html(`$${0}`);
                
            }else{
                $message.html("You don't have enough money to withdraw");
            }
            if($savings.html() === '$0' && $checking.html() === '$0'){
                $savings.addClass('zero');
                $checking.addClass('zero');
            }else if($savings.html() === '$0'){
                $savings.addClass('zero');
            }else if($checking.html() === '$0'){
                $checking.addClass('zero');
            }
        }
        }

    const depositMoneySavings = function (){
        if(isNumber($('#savings-amount').val())){
            $message.empty();
            let current = parseFloat($savings.html().substring(1));

            current += parseFloat($('#savings-amount').val());
            $savings.html(`$${current}`)
            if($savings.html() !== '$0'){
            $savings.removeClass('zero');
            }
        }
    }   

    const withdrawMoneySavings = function(){
        if(isNumber($('#savings-amount').val())){
            $message.empty();
            let current = parseFloat($savings.html().substring(1));
            const withdrawAmount = parseFloat($('#savings-amount').val());
            if(current >= withdrawAmount){
                current-= withdrawAmount;
                $savings.html(`$${current}`);
            }else if(current + parseFloat($checking.html().substring(1))>= withdrawAmount) {
                const remainder = withdrawAmount - current
                $checking.html(`$${$checking.html().substring(1) - remainder}`);
                $savings.html(`$${0}`);
            }else{
                $message.html("You don't have enough money to withdraw");
            }
            if($savings.html() === '$0' && $checking.html() === '$0'){
                $savings.addClass('zero');
                $checking.addClass('zero');
            }else if($savings.html() === '$0'){
                $savings.addClass('zero');
            }else if($checking.html() === '$0'){
                $checking.addClass('zero');
            }
    }
    }



    //create a function on the click of the deposit button
        //check if the input is valid i.e. is it a number

    //target the checking buttons


    $('#checking-deposit').on('click',depositMoneyChecking);
    $('#checking-withdraw').on('click',withdrawMoneyChecking);
    $('#savings-deposit').on('click',depositMoneySavings);
    $('#savings-withdraw').on('click',withdrawMoneySavings);





    // create a function on the click of the withdraw button


    //





})

