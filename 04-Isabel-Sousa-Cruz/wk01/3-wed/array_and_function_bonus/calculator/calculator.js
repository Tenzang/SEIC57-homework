const roundTo2DecimalPlace = function(number) {
    return Math.round(number * 100) / 100;
}

const squareNumber = function(number) {
    const squaredNumber = number ** 2;
    console.log(`The result of squaring the number ${number} is ${squaredNumber}.`);
    return squaredNumber;
}

const halfNumber = function(number) {
    const halvedNumber = number / 2;
    console.log(`Half of ${number} is ${halvedNumber}.`);
    return halvedNumber;
}

const percentOf = function(number1, number2) {
    const percentage = (number1 / number2) * 100;
    const roundedNumber1 = roundTo2DecimalPlace(number1);
    const roundedNumber2 = roundTo2DecimalPlace(number2);
    const roundedPercentage = roundTo2DecimalPlace(percentage);

    console.log(`${roundedNumber1} is ${roundedPercentage}% of ${roundedNumber2}.`);
    return percentage;
}

const areaOfCircle = function(radius) {
    const area = Math.PI * radius * radius;
    const roundedArea = roundTo2DecimalPlace(area);
    console.log(`The area for a circle with radius ${radius} is ${roundedArea}.`);
    return area;
}

const calculator = function(number) {
    const halvedNumber = halfNumber(number);
    const squaredNumber = squareNumber(halvedNumber);
    const area = areaOfCircle(squaredNumber);
    const percentage = percentOf(area, squaredNumber);
}

calculator(Math.round(Math.random() * 10));