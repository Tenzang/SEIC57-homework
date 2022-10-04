// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

const cashRegister = function (object){
    let sum = 0;
    const valueList = Object.values(object);
    for (let i = 0; i < valueList.length; i++){
        sum += parseFloat(valueList[i]);
    }
    return sum;
}

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

console.log(cashRegister(cartForParty)); // 60.55
