const btns = document.getElementsByClassName("calcButton");
console.log(btns)
console.log(btns.length)


for (i=0; i<btns.length; i++){
    console.log("looping")
//     btns[i].addEventListener ('click', function(e){
// //        const algorithm=e.target.id;
//         console.log("function called")
//     })
}

const squareNumber = function(num){
    const squared = (num**2).toFixed(2);
    console.log(`The result of squaring the number ${ num } is ${ squared }.`);
    return squared;
}
squareNumber(10);

const halfNumber = function(num){
    const halved= (num/2).toFixed(2);
    console.log(`half of ${ num } is ${ halved }.`);
    return halved;
}
halfNumber(5);

const percentOf = function(num1, num2){
    const percent = (((num1/num2)*100)).toFixed(2);
    console.log(`${ num1 } is ${ percent }% of ${ num2 }.`) 
    return percent  
}
percentOf(2,4);

const calcArea = function(radius){
    const pi = Math.PI;
    const area = pi * radius * radius;
    console.log(`The area of a circle with radius ${ radius } is ${ area }`);
    return area
}
calcArea(2)

const allCalc= function(num){
    const half = halfNumber(num);
    const squared = squareNumber(half);
    const area= calcArea(squared);
    percentOf(area,squared);
}
allCalc(5);



// const getNum = function(valuesNeeded){
//     for (i=0;i<valuesNeeded.length;i++){
//         if(i===0){
//             prompt("Please input a Number"|Number)
//         }else{
//             prompt("Please put in another number"|Number)
//         }
//     }
// }
