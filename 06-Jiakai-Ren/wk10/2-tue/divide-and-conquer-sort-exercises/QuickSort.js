function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = arr.slice(1).filter((n) => n < pivot);
  const right = arr.slice(1).filter((n) => n >= pivot);
  return [quickSort(left), pivot, quickSort(right)].flat();
}

module.exports = quickSort;
