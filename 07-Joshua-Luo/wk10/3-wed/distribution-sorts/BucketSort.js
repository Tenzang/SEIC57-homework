function bucketSort(items) {
	const n = Math.sqrt(items.length).toFixed();

	const buckets = Array.from({ length: n }, () => []);
	// console.log(buckets);
	let min = Math.min(...items);
	// console.log(min);
	let max = Math.max(...items);
	let ran = ((max - min) / n).toFixed() + 1;

	for (const item of items) {
		for (let j = 0; j < n; j++) {
			if (item <= min + (j + 1) * ran && item >= min + j * ran) {
				buckets[j].push(item);
			}
		}
		// console.log(num);
	}

	buckets.forEach((b) => {
		for (let i = 1; i < b.length; i++) {
			const key = b[i];

			let j = i - 1;
			while (j >= 0 && b[j] > key) {
				b[j + 1] = b[j];
				j--;
			}

			b[j + 1] = key;
		}
	});

	return buckets.flat();
}

console.log(bucketSort([15, 22, 31, 41, 26, 17, 28]));

module.exports = bucketSort;
