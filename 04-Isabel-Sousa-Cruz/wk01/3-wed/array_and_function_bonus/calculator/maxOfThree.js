const maxOfThree = function (x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}

for (let i = 0; i < 10; i++) {
    const randomNumber1 = Math.round(Math.random * 100);
    const randomNumber2 = Math.round(Math.random * 100);
    const randomNumber3 = Math.round(Math.random * 100);
    console.log(maxOfThree(randomNumber1, randomNumber2, randomNumber3));
}