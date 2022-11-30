function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let arr1 = mergeSort(arr.slice(0, Math.round(arr.length / 2)));
    let arr2 = mergeSort(arr.slice(Math.round(arr.length / 2)));
    return merge(arr1, arr2);
  }
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

module.exports = mergeSort;
