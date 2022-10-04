/*
The Cash Register
Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
*/

const cartForParty = {  
    banana: "1.25",
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
};

const cashRegister = function(cart) {
    const cartValues = Object.values(cart);

    for (let i = 0; i < cartValues.length; i++) {
        if (typeof cartValues[i] === "string") {
            cartValues[i] = Number(cartValues[i]);
        }
    }

    const sum = cartValues.reduce((prevValue, currValue) => prevValue + currValue, 0); // iterate through all array elements, adding each one
    return sum;                                               
}

console.log(cashRegister(cartForParty))