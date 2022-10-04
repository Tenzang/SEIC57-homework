// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. 

// Input
const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};



function cashRegister(cartForParty) {
    let items = Object.keys(cartForParty); //converts back to normal array form
    let total = 0;
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        let itemName = items[i]; //list the item names in array
        console.log(itemName);
        let itemPrice = cartForParty[itemName]; //find the price for items linked together
        console.log(cartForParty[itemName]); //cartforparty is the door, itemname is the key, the value is the item behind the door.
        // total += cartForParty.itemPrice;
        total = total + parseFloat(itemPrice); //Addition while converting string format to number format.
        console.log(parseFloat(itemPrice));
    }
    return total;
}




// Output
console.log(cashRegister(cartForParty)); // 60.55