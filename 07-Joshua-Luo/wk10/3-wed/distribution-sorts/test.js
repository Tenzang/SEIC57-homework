const arr = [9, 4, 7, 2, 6, 1, 8, 3, 5];

const bucketSort = (items) => {
	const n = Math.sqrt(items.length).toFixed();

	const buckets = Array.from({ length: n }, () => []);
	console.log(buckets);
	let min = Math.min(...items);
	console.log(min);
	let max = Math.max(...items);
	let ran = ((max - min) / n).toFixed();
	for (const item of items) {
		let num = Math.floor((item - min) / ran);
		console.log(num);
		buckets[num].push(item);
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
};

console.log(bucketSort(arr));
console.log(bucketSort([15, 22, 31, 41, 26, 17, 28]));
