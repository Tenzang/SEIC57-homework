
const accounts = {
    balance: {
    "checking"  :  0,
    "savings"  : 0,
    }
}
// deposit 
 const deposit =  function (account, amount) {
      return accounts.balance[account] += amount;
 } // test --  console.log(deposit( "checking" , 120));


// //savings 
// const saving = function ( account , amount){
//     return accounts.balance[account] +=amount;

// } // test  -- console.log( saving ( "savings" , 100 )); 

// // withdrawl
const withdrawal = function (account, amount) {
    if (amount <= accounts.balance[account]) {
     return accounts.balance[account] -= amount;
    }
  
    
}  // test -- console.log(withdrawal( "checking" , 10 ));



// transfer between account for withdrawl 
const transfer =  function ( account , amount ){
    if ( (account === "checking") && (amount > accounts.balance["checking"]) && (accounts.balance["savings"] > 0)){
        return (sum(accounts.balance["checking"]+ accounts.balance["savings"]) -= amount) ;

    }

}

$(document).ready(function(){
    // checking account 
    displayBalance(); // that gives the total balance first 



    $('#checking-deposit').on('click' , function(){
        const checkingAmount =$('#checking-amount').val();
        const depositCheckingBalance =  deposit("checking" , Number(checkingAmount) );
       //$('#checking-balance').text(newBalance + '$');

        displayBalance();

        
    })
    // savings account 
    $('#savings-deposit').on('click' , function(){
        const savingsAmount =$('#savings-amount').val();
        const depositSavingsBalance= deposit("savings" , Number(savingsAmount) );
        //$('#savings-balance').text(savingsAmount + '$');

        displayBalance();

    })
    $('#checking-withdraw').on('click' , function(){
        const withdrawAmount =$('#checking-amount').val();
        const withdrawCheckingBalance =  withdrawal( "checking" , Number(withdrawAmount)) ;
        /*
        const otherBalance = accounts.balance['savings'];
        const totalBalance = withdrawCheckingBalance + otherBalance;
        const newBalance = withdrawCheckingBalance - withdrawAmount;
        if (newBalance >= 0) { // ignore withdrawals that exceed your balance
            $('#checking-balance').text('$' + newBalance);
        } else if (withdrawAmount <= totalBalance) {
            $('#checking-balance').text('$0');
            $('#savings-balance').text('$' + (otherBalance + newBalance)); 
        }*/
        // if ( withdrawAmount > accounts.balance['checking']) {
        //   return transfer("checking" ,  "withdrawAmount");
       //  }
      
        //$('#checking-balance').text(withdrawAmount + '$');*/

        displayBalance();

    })
    $('#savings-withdraw').on('click' , function(){
        const withdrawAmount =$('#savings-amount').val();
        const withdrawSavingsBalance =  withdrawal( "savings" , Number(withdrawAmount));
        
        //$('#savings-balance').text(withdrawAmount + '$') 

        displayBalance();

    })
});

const displayBalance = function() {
    $('#checking-balance').text('$'+accounts.balance['checking']);
    backgroundChecking();
    $('#savings-balance').text('$'+accounts.balance['savings']);
    backgroundSavings();
  };
  
const backgroundChecking = function () {
    if (accounts.balance['checking'] === 0) {
      $('#checking-balance').css('background-color', 'red');
    } else {
      $('#checking-balance').css('background-color', '#E3E3E3');
    }
  };

 const backgroundSavings = function () {
    if (accounts.balance['savings'] === 0) {
      $('#savings-balance').css('background-color', 'red');
    } else {
      $('#savings-balance').css('background-color', '#E3E3E3');
    }
  };

