function squareNumber (number){
  let square = number * number;
  console.log(`The result of squaring the ${number} is: ${square}`);
  return square;
}


function halfNumber(number){
 let half = number/2;
 console.log(`Half of ${number} is ${half}`);
 return half; 
}


function percentOf (number1, number2){
  let whatPercent = (number1 / number2) * 100;
  console.log(`${number1} is ${whatPercent}% of ${number2}`);
  return whatPercent;
}


function areaOfCircle(radius){
  let area = (Math.PI*(radius* radius)).toFixed(2);
  ;
  console.log(`"The area for a circle with radius ${radius} is ${area}`)
  return area;
}


// Part 2

function part2 (number){
  let half = halfNumber(number);
  let square = squareNumber(half);
  let circleArea = areaOfCircle(square);
  let percentage = percentOf(circleArea, square);
  return percentage;
 }

part2(15);