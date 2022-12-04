function binarySearch(arr, element) {
  const index = arr.indexOf(element);
  return index;
}

function recursiveBinarySearch(arr, element, start = 0) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1 && arr[0] === element) {
    return start;
  }
  const middle = Math.floor((arr.length - 1) / 2);
  if (arr[middle] === element) {
    return start + middle;
  } else if (arr[middle] < element) {
    return recursiveBinarySearch(
      arr.slice(middle + 1),
      element,
      start + middle + 1
    );
  } else {
    return recursiveBinarySearch(arr.slice(0, middle), element, start);
  }
}

module.exports = {
  binarySearch,
  recursiveBinarySearch,
};
