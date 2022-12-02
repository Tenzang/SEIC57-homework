function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = arr.slice(1).filter((n) => n < pivot);
  const right = arr.slice(1).filter((n) => n >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;

// // O(N): one loop more code
// const lessThan = [];
// const moreThan = [];
// const pivot = arr.shift();

// arr.forEach((e) => {
//   if (e < pivot) {
//     lessThan.push(e);
//   } else {
//     moreThan.push(e);
//   }
// });

// return [...quickSort(lessThan), pivot, ...quickSort(moreThan)];
