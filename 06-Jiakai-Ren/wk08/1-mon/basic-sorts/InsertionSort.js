function insertionSort (items) {
  for (let i = 1; i < items.length; i++) {
    const current = items[i];
    const part1 = items.slice(0, i);
    const part2 = items.slice(i + 1);
    for (let j = 0; j < part1.length; j++) {
      if (current < part1[j]) {
        const part1a = part1.slice(0, j);
        const part1b = part1.slice(j);
        items = part1a.concat(current).concat(part1b).concat(part2);
        break;
      }
    }
  }
  return items;
}

module.exports = insertionSort;
