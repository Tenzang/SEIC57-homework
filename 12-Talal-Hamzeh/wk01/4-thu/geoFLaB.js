// Part 1, Rectangle


/*Given the following a rectangle object like the one below, write the following functions 
which accept a rectangle object as an argument:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};*/

const object = {
    length: 10,
  width: 7 

}; 

// area formula A = L x W 
// perimeter P=2(l+w)
const shape = function (object) {

    if (object.length === object.width) {
        return 'This object has a shape of square';  
    } else if (object.length > object.width) {
        return 'This object has a shape of rectangle' ;
    } else {
        return 'This object has a shape of lozenge' ; 
    } 
}
const area = object.length * object.width ; 
const perimiter = 2 * ( object.length + object.width) ; 


console.log( shape(object));
console.log( `The area of this object is ${area}`); 
console.log ( `And a perimeter is ${perimiter}`);

/*Part 2, Triangle
Given the following a triangle object like the one below, write the following functions which 
accept a triangle object as an argument:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4 */
 // area of triangle area = 1/2 × b × h

  const triangleA = {
    sideA:3,
    sideB:4,
    sideC:4
    };
 let sa = triangleA.sideA;
 let sb = triangleA.sideB;
 let sc = triangleA.sideC;


    const triangle = function (triangleA) {
    response = 'The Triangle is Isosceles beacuse we have 2 identical sides dimension ' ; 
    if (triangleA.sideA === triangleA.sideB && triangleA.sideB === triangleA.sideC )
        {   return 'Triangle is equilateral ';
    }if (triangleA.sideA === triangleA.sideB ) 
        {   return response ;
    } if (triangleA.sideB === triangleA.sideC ) 
    {   return response ;
    } if (triangleA.sideA === triangleA.sideC ) 
    {   return response ;
    }else {
        return ' That rectangle is something else ' ; 
    }
}

// Area for Isosceles Triangle start !!

const cal =  function (t) {
    const response = triangle(t) ;
if ( response == 'The Triangle is Isosceles beacuse we have 2 identical sides dimension '){

    return ' Now we have to do the calculation , Are you Ready for the magic ?'; 
}else{
    return 'Try AGAIN';

}
}

// triangle Area 
let s = (triangleA.sideA + triangleA.sideB+ triangleA.sideC) / 2 ;
const triArea = Math.sqrt([ s *  [( s - triangleA.sideA ) * ( s - triangleA.sideB) * ( s - triangleA.sideC)] ] ) ;


// find the biggest number in sides

const sides = [ sa , sb , sc  ];
sides.sort();


console.log(triangle(triangleA));
console.log(cal(triangleA));
console.log(`The Area of the Triangle is ${triArea.toFixed(1)}.`);
console.log( ` as The side C is = ${sides [0]}`);
console.log( ` and The side B is = ${sides [1]}`);
console.log( ` and The side A is = ${sides [2]}`);
console.log( 'To prove that the triangle is Obtuse we should have [Side A ^2 + Side B ^ < Side C ^ 2'); 

console.log(`let try it out  : ${Math.pow( (sides[1]) , 2 )} + ${Math.pow( (sides [2]) , 2 )} > ${Math.pow( ( sides [0]) , 2 )}`);
console.log('Well now you can obvisouly Tell that the Triangle is Obtuse'); 
console.log( ' Yaass , see you next time :) ') ; 
