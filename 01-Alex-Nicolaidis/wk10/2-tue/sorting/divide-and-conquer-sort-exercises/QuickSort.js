function quickSort(arr) {
  return quick(arr, 0, arr.length);
}

function quick(arr, start, end) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const pivot = arr[start];
    const left = [];
    const right = [];
    for (let i = start + 1; i < end; i++) {
      const element = arr[i];
      if (pivot > element) {
        left.push(element);
      } else {
        right.push(element);
      }
    }
    return [
      quick(left, 0, left.length),
      pivot,
      quick(right, 0, right.length),
    ].flat();
  }
}

module.exports = quickSort;
