

// /   Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
// // // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
// // Output
// cashRegister(cartForParty); // 60.55

let cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
}
const cashRegister = function () {
    
    // get all the values in cartForParty object
    let values = (Object.values(cartForParty)); 
    console.log (values)
    // values = [ '1.25', '.99', '25.01', '0.60', '10.34', '22.36' ]
    let valuesInt = values.map( x => Number(x))
    console.log (valuesInt)

   let sum = 0;
   for (let i = 0; i < valuesInt.length; i++) {
    sum = sum + valuesInt[i];
   }
   return (`The sum of cartForParty's values is: ${sum}`);
}
console.log(cashRegister());
