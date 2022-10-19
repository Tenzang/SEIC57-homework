/*
Write a function filterLongWords that takes an array of words and an number i 
and returns the array of words that are longer than i.
*/

const filterLongWords = function(arr, number) {
    const longerThan = [];

    for (let i = 0; i < arr.length; i++) {
        if ( arr[i].length > number) {
            longerThan.push(arr[i]);
        }
    }
    return longerThan;
}

const words = ["banana", "orange", "hi", "hello", "computer", "phone", "window"]

for (let i = 2; i < 10; i++) {
    console.log(`For length ${i}, these are the longer words: ${filterLongWords(words, i)}`)
}