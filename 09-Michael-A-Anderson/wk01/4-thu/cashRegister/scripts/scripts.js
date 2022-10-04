

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function (cart){
    let arr = Object.values(cart);
    console.log(arr)
    let sum = 0
    for (let i = 0;i< arr.length;i++){
        arr[i] =  Number(arr[i])
    }
    let initialValue=0
    sum = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );
    console.log(sum)
    return sum
}
cashRegister(cartForParty);