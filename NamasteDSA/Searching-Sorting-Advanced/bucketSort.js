function bucketSort(arr) {
    const n = arr.length;

    let buckets = Array.from({ length: n }, () => []);

    for (let x of arr) {
        const idx = Math.floor(x * n);
        buckets[idx].push(x);
    }

    buckets = buckets.map(bucket => bucket.sort((a, b) => a - b));

    let i = 0;
    for (let bucket of buckets) {
        for (let num of bucket) {
            arr[i++] = num;
        }
    }
    return arr;
}

console.log(bucketSort([0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]));

