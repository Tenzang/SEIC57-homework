function mergeSort(arr) {
  const arrHalf = arr.length / 2;
  if (arr.length <= 1) {
    return arr;
  }
  const left = arr.splice(0, arrHalf);
  const rigth = arr;
  return merge(mergeSort(left), mergeSort(rigth));
}

// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}
console.log(mergeSort([12, 6, 3, 7, 13, 8]));
module.exports = mergeSort;
