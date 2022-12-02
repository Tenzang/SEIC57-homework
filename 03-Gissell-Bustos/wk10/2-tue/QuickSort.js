function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  console.log(quickSort(left).concat(pivot, quickSort(right)));
}

console.log(quickSort([12, 6, 3, 7, 13, 8]));
module.exports = quickSort;
