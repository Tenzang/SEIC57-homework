const maxOfTwoNumbers = function (a,b){
    if(a>b){
        console.log(a);
        return a;
    }else{
        console.log(b);
        return b;
    }
}
maxOfTwoNumbers(1,2)
const maxOfThree = function (a,b,c){
    const num = [a,b,c];
    let largest = a;
    for (let i=1;i<num.length;i++){
        if(num[i]>largest){
            largest = num[i];
        }
    }
    console.log(largest);
    return largest
}
maxOfThree(1,2,3) 

const sumArray =function (arr){
//    console.log(arr)
    let total=0;
//    console.log(total);
    for(let i=0;i<arr.length;i++){
        total=total+arr[i]
//        console.log(total)
//        console.log(arr[i])
    }
    console.log(total)
    return(total)
}
sumArray([1,2,3,4])

const multiplyArray =function (arr){
    //    console.log(arr)
        let total=1;
    //    console.log(total);
        for(let i=0;i<arr.length;i++){
            total=total*arr[i]
    //        console.log(total)
    //        console.log(arr[i])
        }
        console.log(total)
        return(total)
}
multiplyArray([1,2,3,4])

const reverseString = function (a){
    let arr=a.split('');
    let reverseString="";
    for( let i=arr.length-1;i>=0;i--){
        reverseString=`${reverseString}${arr[i]}`
    }
    console.log(reverseString);
    return reverseString
}
reverseString('Hello World')

const findLongestword = function(arr){
    let longest=0
    for(i=0;i<arr.length;i++){
        if(arr[i].length>longest){
            longest = arr[i].length;
        }
    }
    console.log(longest)
    return longest
}
findLongestword(['bob','harry','bike','super','delicious'])

const filterLongWords = function(arr,a){
    const long = [];
    for (let i = 1;i<arr.length;i++){
        if(arr[i].length>a){
            long.push(arr[i])
        }
    }
    console.log(long);
    return long
}
filterLongWords(['bob','harry','bike','super','delicious'],4)


