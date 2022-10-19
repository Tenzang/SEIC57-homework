/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.
*/

const maxOfTwo = function (x, y) {
    // return x > y ? x : y 
    // don't like this way

    if (x > y) {
        return x;
    } else {
        return y;
    }
}

for (let i = 0; i < 10; i++) {
    const randomNumber1 = Math.round(Math.random * 100);
    const randomNumber2 = Math.round(Math.random * 100);
    console.log(maxOfTwo(randomNumber1, randomNumber2));
}