// The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty)); // 60.55
const shoppingCart = {  
    partyHat: "2.50",
    balloons: ".99",
    decorations: "19.24",
    cake: "9.22",
    pinata: "10.92",
    drinks: "15.36"
  };
  const cashRegister = function (obj) {
      let result = Object.values(obj); // changes object values into array 
      let total = 0;
      for (i=0; i < result.length; i++) {
       total += Number(result[i]); // converting the strings to numbers to calculate the sum
  		}
      return(total);
  }
      
  console.log(cashRegister(shoppingCart))
  