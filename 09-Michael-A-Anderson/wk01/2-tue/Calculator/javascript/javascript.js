const btns = document.getElementsByClassName("calcButton");
//console.log(btns)
//console.log(btns.length)
let num
let printResult

for (let i=0; i<btns.length; i++){
//    console.log("looping")
    btns[i].addEventListener ('click', function(e){
        const algorithm=e.target.id;
//        console.log("function called")
        switch(algorithm){
            case 'squared':
                num = getNum(1);
//                console.log(num);
                printResult = squareNumber(num[0]);
                printAnswer(printResult[0]);
                break;
            case 'halved':
                num = getNum(1);
//                console.log(num);
                printResult = halfNumber(num[0]);
                printAnswer(printResult[0]);
                break;
            case 'percentOf':
                num = getNum(2);
//                console.log(num);
                printResult = percentOf(num[0],num[1]);
                printAnswer(printResult[0]);
                break;
            case 'area':
                num = getNum(1);
        //                console.log(num);
                printResult = calcArea(num[0]);
                printAnswer(printResult[0]);
                break;
            case 'combo':
                num = getNum(1);
        //                console.log(num);
                printResult = allCalc(num[0]);
                document.querySelector(".results").textContent=''
                clearAll()
                for(let i = 0; i<printResult.length; i++ ){
                    const tag = document.createElement("p");
                    const text = document.createTextNode(printResult[i]);
                    tag.className="results"
                    tag.appendChild(text);
                    const element = document.querySelector("#resultDiv");
                    element.appendChild(tag)
                }
                break;
        }
    })
}

const squareNumber = function(num){
    const squared = (num**2).toFixed(2);
    const result =(`The result of squaring the number ${ num } is ${ squared }.`);
    console.log(result)
    return [result,squared];
}
//squareNumber(10);

const halfNumber = function(num){
    const halved= (num/2).toFixed(2);
    const result = (`half of ${ num } is ${ halved }.`);
    console.log(result)
    return [result,halved];
}
//halfNumber(5);

const percentOf = function(num1, num2){
    const percent = (((num1/num2)*100)).toFixed(2);
    const result = (`${ num1 } is ${ percent }% of ${ num2 }.`) 
    console.log(result)
    return [result, percent]  
}
//percentOf(2,4);

const calcArea = function(radius){
    const pi = Math.PI;
    const area = pi * radius * radius;
    const result= (`The area of a circle with radius ${ radius } is ${ area }`);
    console.log(result)
    return [result,area]
}
//calcArea(2)

const allCalc= function(num){
    let multiResult=[];
    const half = halfNumber(num);
    multiResult.push(half[0]);
    const squared = squareNumber(half[1]);
    multiResult.push(squared[0]);
    const area= calcArea(squared[1]);
    multiResult.push(area[0]);
    const percent= percentOf(area[1],squared[1]);
    multiResult.push(percent[0]);
    return multiResult;
}
allCalc(5);

const getNum = function(valuesNeeded){
    let num1;
    let num2;
//    console.log("getNum called")
    for (let i=0;i<valuesNeeded;i++){
//        console.log("getNum loop")
        if(i===0){
            num1 = prompt("Please input a Number")
        }else{
            num2 = prompt("Please put in another number")
        }
    }
//    console.log( num1, num2)
    return [num1, num2]
}

const printAnswer = function(result){
    clearAll();
    document.querySelector(".results").textContent=result
}
const clearAll = function(){
    const clearP = document.querySelectorAll(".results")
    for ( let i = 1;i<clearP.length;i++){
        const e = document.querySelector(".results");
        e.parentElement.removeChild(e);
    }
}
