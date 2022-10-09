// Jiakai Ren - SEI57 Wk02 Fri Homework
// ATM

$(document).ready(function () {
    const $checkingBalance = $('#checking-balance span');
    const $savingsBalance = $('#savings-balance span');
    const $overdraftBox = $('#allow-overdraft');
    const $totalBalance = $('#total-balance span');
    const bank = {
        checkingBalance: Number($checkingBalance.html().slice(1)),
        savingsBalance: Number($savingsBalance.html().slice(1)),
    };

    $('[type = button]').on('click', function (event) { 
        const transInfo = (this.id).split('-');     // ['string', 'string']
        const accType = transInfo[0];
        const transType = transInfo[1];
        const amount = getAmount(accType);
        const decimalCount = countDecimal(amount);

        if (!isNaN(amount) && amount > 0 && decimalCount <= 2) {
            // only positive numbers with max decimal places of 2 is allowed

            if (transType === 'deposit') {
                deposit(accType, amount);       // updateScreen() for deposit is done in deposit()
            } else {
                withdraw(accType, amount);
                updateScreen(accType);
            }

            if ($('#clear-input').is(':checked')) {     // clears input field
                clearAmount(accType);
            }
            
        } else {                                        // invalid input
            $(`#${ accType }-amount`).effect('shake', {distance: 10, times: 4});    // shake input field
        }

        const totalBal = bank.checkingBalance + bank.savingsBalance;
        $totalBalance.html(`$${ totalBal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }`);
    });

    function getAmount (accType) { return Number($(`#${ accType }-amount`).val()); };

    function countDecimal (amount) {
        const amountStr = amount.toString();
        if (amountStr.includes('.')) {
            return amountStr.split('.')[1].length;
        };
        return 0;
    };

    function deposit (accType, amount) {
        bank[`${ accType }Balance`] += amount;
        eval(`$${ accType }Balance`).slideUp(200, function () {
            updateScreen(accType);
        }).slideDown(200);
    };

    function withdraw (accType, amount) {
        const accTypeBalance = bank[`${ accType }Balance`].toFixed(2);
        let otherAcc;
        if (accType === 'savings') {
            otherAcc = 'checking';                  // used in overdraft
        } else { otherAcc = 'savings'; }            // used in overdraft
        const allowOverdraft = $overdraftBox.is(':checked');
        const totalBalance = bank.checkingBalance + bank.savingsBalance;
        
        if (amount > accTypeBalance && amount <= totalBalance && allowOverdraft) {  // overdraft
            bank[`${ otherAcc }Balance`] -= (amount - bank[`${ accType }Balance`]);
            bank[`${ accType }Balance`] = 0;
            updateScreen(otherAcc);
            eval(`$${ otherAcc }Balance`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        } else if (amount > accTypeBalance) {                                       // insuffient funds
            eval(`$${ accType }Balance`).effect('shake', {distance: 10, times: 4}); // shake account balance...
            if (allowOverdraft) {               // ...and shake both if overdraft allowed
                eval(`$${ otherAcc }Balance`).effect('shake', {distance: 10, times: 4});
            }
            return;                             // exit function here - do not dispense cash
        } else {                                // successful withdrawal
            bank[`${ accType }Balance`] -= amount;
        }

        if ($('#dispense-cash').is(':checked')) { 
            giveMoney(amount); 
        }
    }; 

    function updateScreen (accType) {
        if (Math.abs(bank[`${ accType }Balance`]).toFixed(2) === '0.00') {      // takes care of floating point precision error
            eval(`$${ accType }Balance`).parent().addClass('zero').removeClass('non-zero');
            bank[`${ accType }Balance`] = 0;
        } else {
            eval(`$${ accType }Balance`).parent().removeClass('zero').addClass('non-zero');
        }
        const $balance = eval(`$${ accType }Balance`);
        const accString = accType + 'Balance';
        $balance.html(`$${ bank[accString].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }`);
    };

    function clearAmount (accType) { $(`#${ accType }-amount`).val(''); };

    // how to avoid eval?
    // function evaluate (fn) {
    //     return new Function('return ' + fn)();
    // };
    // console.log(evil(`$${ 'checking' }Balance`));
    // console.log($(`$${ 'checking'}Balance`));

    function giveMoney (amount) {
        const availableNotes = [100, 50, 20, 10, 5];
        const availableCoins = [2, 1, 0.5, 0.2, 0.1, 0.05];
        let cashAmount = amount;

        if (amount > 2000) {
            const [$cheque, chequeAmount] = makeCheque(amount - 2000);
            cashAmount = 2000;
            showMoney(undefined, [1], 'cheque', chequeAmount, $cheque);
        }

        const [notesQty, remainingAmount] = calculateQty(availableNotes, cashAmount, 'notes');
        const [coinsQty, zero] = calculateQty(availableCoins, remainingAmount, 'coins');

        showMoney(availableNotes, notesQty, 'notes');
        showMoney(availableCoins, coinsQty, 'coins');
    };

    function showMoney (availableValue, qty, type, chequeAmount, $cheque) {
        // this function only displays cash/cheque divs on html
        // [availableValue] should only be defined for cash
        // qty should be [1] for cheque
        // 'type' will be added as class
        // chequeAmount and {$cheque} should only be defined for cheque

        for (let i = 0; i < qty.length; i++) {
            let value;                  // value number only
            let valueOnFace;            // value with '$' or 'c' symbols for cash
            const valueQty = qty[i];

            if (type === 'cheque') {
                value = chequeAmount;
            } else {
                value = availableValue[i];
            }

            for (let j = 0; j < valueQty; j++) {
                if (value < 1) {
                    valueOnFace = value * 100;
                    valueOnFace += 'c';
                } else {
                    valueOnFace = '$' + value;
                }

                let $newChequeOrCash;
                if (type === 'cheque') {
                    $newChequeOrCash = $cheque;
                } else {
                    $newChequeOrCash = $(`<div><p>${ valueOnFace }</p></div>`);
                }
                
                $newChequeOrCash
                .addClass(`cash ${ type }`)     // .cash also added to cheque for deletion purpose
                .hide()
                .appendTo($('body'))
                .css({
                    top: '0px',
                    left: innerWidth * 0.1 + (Math.random() * innerWidth * 0.7),
                })
                .delay(Math.random() * 2000)
                .fadeIn(400)
                .animate({
                    top: `+=${ innerHeight * 0.65 + innerHeight * 0.2 * Math.random() }`,
                }, (5000 + 5000 * Math.random()));
            }
        }
    };

    function makeCheque (amount) {
        return [$(`<div>
        <div id="cheque-title">Bank of Jackville</div>
        <div id="cheque-name">Cheque</div>
        <div id="cheque-amount">$${ amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</div>
        </div>`), amount];
    };

    function calculateQty (availableValue, amount, type) {
        // this function returns [[array], number]

        let remainingAmount = amount;
        const dispenseQuantity = new Array(availableValue.length).fill(0);
        for (let i = 0; i < availableValue.length; i++) {
            const valueToCheck = availableValue[i];
            dispenseQuantity[i] = Math.floor(remainingAmount / valueToCheck)
            remainingAmount = remainingAmount % valueToCheck;
        }

        if (remainingAmount < 0.5 && type === 'coins') {    // rounding
            remainingAmount = Number(remainingAmount.toFixed(2));
            if (remainingAmount >= 0.03) {                  // round up
                dispenseQuantity[dispenseQuantity.length - 1] += 1;
            }
        }
        return [dispenseQuantity, remainingAmount];
    };

    $('.checkboxes').on('click', function (event) {     // click on div
        if (event.target.id === '') {   // need this otherwise checkboxes ineffective (undo themselves)
            const $checkbox = $(this).children('input[type = checkbox]')[0];
            $checkbox.checked = !$checkbox.checked;
        }
    });

    $(document).on('click', '.cash', function (event) {
        $(this).stop().fadeOut(200, function () { $(this).remove(); });
    });

    $('#collect-all').on('click', function () {
        $('.cash').stop().fadeOut(200, function () { $(this).remove(); });
    });
});