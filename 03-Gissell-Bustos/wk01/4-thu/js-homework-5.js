// Write a function called cashRegister that takes a shopping cart object. 
// The object contains item names and prices (itemName: itemPrice). 
// The function should return the total price of the shopping cart. 
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

function cashRegister(shoppinglist){
  console.log(Object.values(shoppinglist))
  let sum = Object.values(shoppinglist).reduce((a, b)=> parseFloat(a) + parseFloat(b), 0);
    return sum;
}
console.log(cashRegister(cartForParty));
