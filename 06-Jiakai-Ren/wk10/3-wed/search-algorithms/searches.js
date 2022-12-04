function binarySearch(arr, element) {
  // joel's solution

  let start = 0;
  let end = arr.length - 1;
  let midpoint = Math.floor((start + end) / 2);

  while (arr[midpoint] !== element && start < end) {
    if (element < arr[midpoint]) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
    midpoint = Math.floor((start + end) / 2);
  }

  return element === arr[midpoint] ? midpoint : -1;
}

function recursiveBinarySearch(arr, element, start = 0) {
  if (arr.length === 0) return -1;

  middleIndex = Math.floor((arr.length - 1) / 2);
  const middleElement = arr[middleIndex];

  if ((arr.length === 1 && arr[0] === element) || middleElement === element) {
    return start + middleIndex;
  } else if (element < middleElement) {
    return recursiveBinarySearch(arr.slice(0, middleIndex), element, start);
  } else {
    return recursiveBinarySearch(
      arr.slice(middleIndex + 1),
      element,
      middleIndex + start + 1
    );
  }
}

function recursiveBinarySearch2(
  haystack,
  needle,
  start = 0,
  end = haystack.length - 1,
  midpoint = Math.floor((start + end) / 2)
) {
  // joel's solution
  if (needle === haystack[midpoint]) return midpoint; // base case: success
  if (start >= end) return -1; // base case: failure

  if (needle < haystack[midpoint]) {
    end = midpoint - 1;
  } else {
    start = midpoint + 1;
  }

  return recursiveBinarySearch2(haystack, needle, start, end);
}

module.exports = {
  binarySearch,
  recursiveBinarySearch,
};
