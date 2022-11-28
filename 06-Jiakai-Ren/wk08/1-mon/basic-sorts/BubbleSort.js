function bubbleSort(array) {
    let swapHappened = true;
    let passes = 0;
    while (swapHappened) {
        swapHappened = false;
        passes++;
        for (let i = 0; i < array.length - passes; i++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                swapHappened = true;
            }
        }
    }
    return array;
}
module.exports = bubbleSort;