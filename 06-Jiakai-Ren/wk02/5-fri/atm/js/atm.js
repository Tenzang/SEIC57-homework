// Jiakai Ren
// SEI57 Wk02 Fri Homework
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
            if (transType === 'deposit') {
                deposit(accType, amount);
            } else {
                withdraw(accType, amount);
                updateScreen(accType);
            }

            if ($('#clear-input').is(':checked')) {
                clearAmount(accType);
            }
            
        } else {                                    // invalid input
            $(`#${ accType }-amount`).effect('shake', {distance: 10, times: 4});
        }

        const totalBal = bank.checkingBalance + bank.savingsBalance;
        $totalBalance.html(`$${ totalBal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }`);
    });

    function getAmount (accType) { 
        return Number($(`#${ accType }-amount`).val());
    };

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
            eval(`$${ accType }Balance`).effect('shake', {distance: 10, times: 4});
            if (allowOverdraft) {               // and shake both if overdraft allowed
                eval(`$${ otherAcc }Balance`).effect('shake', {distance: 10, times: 4});
            }
            return;                             // exit function here - do not dispense cash
        } else {
            bank[`${ accType }Balance`] -= amount;
        }

        if ($('#dispense-cash').is(':checked')) {
            giveMoney(amount);
        }
    }; 

    function updateScreen (accType) {
        if (Math.abs(bank[`${ accType }Balance`]).toFixed(2) === '0.00') {
            eval(`$${ accType }Balance`).parent().addClass('zero').removeClass('non-zero');
            bank[`${ accType }Balance`] = 0;
        } else {
            eval(`$${ accType }Balance`).parent().removeClass('zero').addClass('non-zero');
        }
        const $balance = eval(`$${ accType }Balance`);
        const accString = accType + 'Balance';
        $balance.html(`$${ bank[accString].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }`);
    };

    function clearAmount (accType) {
        $(`#${ accType }-amount`).val('');
    };

    // how to avoid eval?
    // fix eval
    // function evil (fn) {
    //     return new Function('return ' + fn)();
    // };

    // console.log(evil(`$${ 'checking' }Balance`));
    // console.log($(`$${ 'checking'}Balance`));

    function giveMoney (amount) {
        const availableNotes = [5000000, 2000000, 1000000, 500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5];
        const availableCoins = [2, 1, 0.5, 0.2, 0.1, 0.05];

        const [notesQty, remainingAmount] = calculateQty(availableNotes, amount, 'notes');
        const [coinsQty, zero] = calculateQty(availableCoins, remainingAmount, 'coins');

        showMoney(availableNotes, notesQty, 'notes');
        showMoney(availableCoins, coinsQty, 'coins');
    };

    function showMoney (availableValue, qty, type) {
        for (let i = 0; i < qty.length; i++) {
            const value = availableValue[i];
            let valueOnFace;
            const valueQty = qty[i];
            for (let j = 0; j < valueQty; j++) {
                if (value < 1) {
                    valueOnFace = value * 100;
                    valueOnFace += 'c';
                } else {
                    valueOnFace = '$' + value;
                }

                $(`<div><p>${ valueOnFace }</p></div>`)
                .addClass(`cash ${ type }`)
                .hide()
                .appendTo($('body'))
                .css({
                    top: '0px',
                    left: Math.random() * innerWidth * 0.8,
                })
                .delay(Math.random() * 2000)
                .fadeIn(400)
                .animate({
                    top: `+=${ innerHeight * 0.6 + innerHeight * 0.3 * Math.random() }`,
                }, (5000 + 5000 * Math.random()));
            }
        }
    };

    function calculateQty (availableValue, amount, type) {
        let remainingAmount = amount;
        const dispenseQuantity = new Array(availableValue.length).fill(0);
        for (let i = 0; i < availableValue.length; i++) {
            const valueToCheck = availableValue[i];
            dispenseQuantity[i] = Math.floor(remainingAmount / valueToCheck)
            remainingAmount = remainingAmount % valueToCheck;
        }

        if (remainingAmount < 0.5 && type === 'coins') {
            remainingAmount = Number(remainingAmount.toFixed(2));
            if (remainingAmount >= 0.03) {
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