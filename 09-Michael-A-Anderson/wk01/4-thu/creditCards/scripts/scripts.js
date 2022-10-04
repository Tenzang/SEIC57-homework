const cardStatus={
    valid: "",
    number : '',
};

const validateCreditCard = function ( cardNum ){
    clearObject();
    const dashless = cardNum.replaceAll('-','')
//    console.log(dashless);
    cardStatus.number=cardNum;
    if (checkLength(dashless)){
        // console.log('Enough numbers')
        if(checkDigits(dashless)){
            if(checkLastDigit(dashless)){
                if (checkTotal(dashless)){
                    cardStatus.valid = true;
                }
            }
        }
    }
    console.log(cardStatus)
    return cardStatus
}
validateCreditCard('9999-9999-8888-0000')
validateCreditCard('a923-3211-9c01-1112')
validateCreditCard('4444-4444-4444-4444')
validateCreditCard('1111-1111-1111-1110')
validateCreditCard('6666-6666-6666-6661')
validateCreditCard('6666-6666-6666-661')

function checkLength(num){

    if(num.length===16){
        let testLetter = /[a-zA-Z]/.test(num);
        // console.log(testLetter)
        if(testLetter){
            cardStatus.error = 'Only numbers allowed'
            cardStatus.valid = false;
            return false;
        }
        // console.log('no letters')
        return true
    }
    cardStatus.error = `not enough digits`;
    cardStatus.valid = false;
    return false
}

function checkDigits(num){
    let unique = '';
    for (let i = 0; i< num.length;i++){
        if (unique.includes(num[i])===false){
            unique=`${unique}${num[i]}`
//            console.log(unique)
        }
//        console.log(unique.length)

    }
    if(unique.length>1){
        return true
    }else{
        cardStatus.error = `Needs at least 2 unique numbers`;
        cardStatus.valid = false;
        return false
    }
}

function clearObject(){
    cardStatus.number='';
    cardStatus.valid='';
    delete cardStatus.error; 
}

function checkLastDigit(num){
    let l = num.length-1;
    if(num[l] % 2 === 0){
        return true
    }else {
        cardStatus.error = `Last number should be even`;
        cardStatus.valid = false;
        return false
    }
}

function checkTotal(num){
    let init = 0;
    console.log(num.split(''))
    const arr = num.split('');
    for( let i = 0; i<arr.length;i++){
        arr[i]=Number(arr[i]);
    }
    const sum = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        init
      );
      console.log(sum);
      if(sum>16){
        return true;
      }else{
        cardStatus.error = `Total sum of numbers must be over 16`
        cardStatus.valid = false;
        return false
      }
}