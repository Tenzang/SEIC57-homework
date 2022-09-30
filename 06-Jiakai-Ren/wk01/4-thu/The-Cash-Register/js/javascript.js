// Jiakai Ren
// SEI57 - Homework - Wk01 Thu

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// // Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Output
// cashRegister(cartForParty)); // 60.55
// ```

function cashRegister(cart) {
    // This function calculates the sum of all numerical values in {cart}

    const pricesString = Object.values(cart);       // array containing all string values in {cart} 
    const pricesFloat = [];

    for (let i = 0; i < pricesString.length; i++) {
        // parse the string number in [pricesString] to float then add to [pricesFloat]

        pricesFloat.push(parseFloat(pricesString[i]));
    }

    const total = pricesFloat.reduce((a, b) => a + b, 0);   // sums the array of floating numbers
    return total;
};

console.log(`Total amount: $${ cashRegister(cartForParty) }`);