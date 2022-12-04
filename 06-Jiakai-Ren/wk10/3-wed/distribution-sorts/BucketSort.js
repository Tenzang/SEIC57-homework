function bucketSort(items) {
  const max = Math.max(...items);
  const min = Math.min(...items);
  const buckets = new Array(Math.floor(Math.sqrt(items.length)));
  const bucketRanges = new Array(Math.floor(Math.sqrt(items.length)));
  const bucketStep = Math.floor((max - min + 1) / buckets.length);
  let output = [];
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
    bucketRanges[i] = [min + bucketStep * i, min + bucketStep * (i + 1)];
  }
  for (let j = 0; j < items.length; j++) {
    const element = items[j];
    for (let k = 0; k < bucketRanges.length; k++) {
      if (element <= bucketRanges[k][1]) {
        buckets[k].push(element);
        break;
      }
    }
  }
  for (let l = 0; l < buckets.length; l++) {
    output = output.concat(classicSort(buckets[l]));
  }
  return output;
}

function insertionSort(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Find the position to insert this item:
    for (var j = i - 1; j >= 0 && items[j] > item; j--) {
      items[j + 1] = items[j]; //swap
    }
    items[j + 1] = item; // actual insertion
  }
  return items;
}

const classicSort = (array) => array.sort((a, b) => a - b);

module.exports = bucketSort;
