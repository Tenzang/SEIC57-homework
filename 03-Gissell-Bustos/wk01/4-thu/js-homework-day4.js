const rectangleA = {
  length: 4,
  width: 3
};
// isSquare - Returns whether the rectangle is a square or not
function isSquare(rectangle){
  let square;
  if(rectangle.length === rectangle.width){
      square = true;
   }else {
     square = false;
   }
   return square;
}
//console.log(isSquare(rectangleA));

// area - Returns the area of the rectangle
function area (rectangle){
  return rectangle.length * rectangle.width;
}
//console.log(area(rectangleA));

// perimeter - Returns the perimeter of the rectangle
function perimeter(rectangle){
  return (rectangle.length + rectangle.width)*2
}
//console.log(perimeter(rectangleA));

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// isEquilateral - Returns whether the triangle is equilateral or not

function isEquilateral (triangle){
  let equilateral;
  if((triangle.sideA === triangle.sideB) && 
     (triangle.sideB === triangle.sideC) && 
     (triangle.sideA === triangle.sideC)){
          equilateral = true;
        }else{
          equilateral = false;
        }  
        return equilateral;
}

// console.log(isEquilateral(triangleA));

// isIsosceles - Returns whether the triangle is isosceles or not
function isIsosceles(triangle){
 let isosceles;
 if((triangle.sideA === triangle.sideB) && 
     (triangle.sideB === triangle.sideC) && 
     (triangle.sideA === triangle.sideC)){
          isosceles = false;
        } else if((triangle.sideA === triangle.sideB) || 
     (triangle.sideB === triangle.sideC) ||
     (triangle.sideA === triangle.sideC)){
          isosceles = true;
        }else{
          isosceles = false;
        }  
      return isosceles;
}
//console.log(isIsosceles(triangleA));

// area - Returns the area of the Triangle

function areaTriangle(triangle){
  let semiperimetro = semiPerimeter(triangle);
  let sPmSideA = semiperimetro - triangleSideA(triangle);               // semiperimetro menus side.A
  let sPmSideB = semiperimetro - triangleSideB(triangle);               // semiperimetro menus side.B
  let sPmSideC = semiperimetro - triangleSideC(triangle);               // semiperimetro menus side.C
  let area = Math.sqrt(semiperimetro*sPmSideA*sPmSideB*sPmSideC);
   return area;

}
console.log(areaTriangle(triangleA));

function triangleSideA(triangle){
  let sideA = triangle.sideA;
  return sideA;
}

function triangleSideB(triangle){
  let sideB = triangle.sideB;
  return sideB;
}
function triangleSideC(triangle){
  let sideC = triangle.sideC;
  return sideC;
}

function semiPerimeter(triangle){
  let sPerimeter = (triangleSideC(triangle) + triangleSideB(triangle)+ triangleSideA(triangle))/ 2;
  return sPerimeter;
}


