// i want to get the value from checking amount so it will appear on console
// then i want to display the value from console to #checking-balance
// then i need to make array and change the text to number
// next i want to create math algo to add all the value
// i need to display the total on the checking balance

const array = [];
let sumCheckingBalance;
let sumSavingsbalance;
let finalTotal;


// Checking Deposit code
$(document).ready(function(){
    $("#checking-deposit").click(function(){
        let checkingAmountInput= Number(($("#checking-amount").val()));  //(get content) get the value of checking amount and store it in variabel
        
        array.push(checkingAmountInput); //to create an array
        console.log(`This is a checking amount input = ${checkingAmountInput}`); //to display the checking amount on console/ dev tools
        console.log("This is a checking amount array: ", array); // to display the value of the array that the user puts in
        sumCheckingBalance = 0;
        for (let i = 0; i < array.length; i++) { //to sum all of the array
            sumCheckingBalance += array[i];
        }
        $("#checking-balance").text(`$${sumCheckingBalance}`); //to display the total on the checking balance
        console.log("This is sum Deposit:", sumCheckingBalance);

        if (sumCheckingBalance > 0) {
            $(document).ready(function(){
                $("#checking-balance").css("background-color", "white")
            })
        };
    });
});



// Checking Withdraw code
$(document).ready(function(){
    $("#checking-withdraw").click(function(){
        let checkingWithdrawInput= Number(($("#checking-amount").val()));  //(get content) get the value of checking amount and store it in variabel
        // $("#checking-balance").text(checkingWithdrawInput); //(set content) this line of code is to set or display the checking amount to checking balance
        array.pop(checkingWithdrawInput); //to remove the last value of array
        // console.log(`checkingWithdrawInput is = ${checkingWithdrawInput}`); 
        console.log("This is a checking amount array: ", array);
        

        if (sumCheckingBalance !== 0) {
            
            sumCheckingBalance = sumCheckingBalance - checkingWithdrawInput; //to substract the total of deposit minus user input
            console.log("This is sum Withdraw:", sumCheckingBalance); 
            
            $("#checking-balance").text(`$${sumCheckingBalance}`) //to display the total onthe checking balance

            if (sumCheckingBalance <= 0) {
                $(document).ready(function(){
                    $("#checking-balance").css("background-color", "red")
                })
            }
        };    
    });
});

// Saving Deposit code
$(document).ready(function(){
    $("#savings-deposit").click(function(){
        let savingAmountInput= Number(($("#savings-amount").val()));  //(get content) get the value of checking amount and store it in variabel
        
        array.push(savingAmountInput); //to create an array
        console.log(`This is a savings amount input = ${savingAmountInput}`); //to display the checking amount on console/ dev tools
        console.log("This is a savings amount array: ", array); // to display the value of the array that the user puts in
        sumSavingsBalance = 0;
        for (let i = 0; i < array.length; i++) { //to sum all of the array
            sumSavingsBalance += array[i];
        }
        $("#savings-balance").text(`$${sumSavingsBalance}`); //to display the total on the checking balance
        console.log("This is sum Deposit:", sumSavingsBalance);

        if (sumSavingsBalance > 0) {
            $(document).ready(function(){
                $("#savings-balance").css("background-color", "white")
            })
        };
    });
});

// Saving Withdraw code
$(document).ready(function(){
    $("#savings-withdraw").click(function(){
        let savingWithdrawInput= Number(($("#savings-amount").val()));  //(get content) get the value of checking amount and store it in variabel
        // $("#checking-balance").text(checkingWithdrawInput); //(set content) this line of code is to set or display the checking amount to checking balance
        array.pop(savingWithdrawInput); //to remove the last value of array
        // console.log(`checkingWithdrawInput is = ${checkingWithdrawInput}`); 
        console.log("This is a savings amount array: ", array);
        

        if (sumSavingsBalance !== 0) {
            
            sumSavingsBalance = sumSavingsBalance - savingWithdrawInput; //to substract the total of deposit minus user input
            console.log("This is sum Withdraw:", sumSavingsBalance); 
            
            $("#savings-balance").text(`$${sumSavingsBalance}`) //to display the total onthe checking balance

            if (sumSavingsBalance <= 0) {
                $(document).ready(function(){
                    $("#savings-balance").css("background-color", "red")
                })
            }
        };    
    });
});

