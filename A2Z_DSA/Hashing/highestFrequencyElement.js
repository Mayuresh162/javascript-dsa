function highestFrequencyElement(arr, k) {
    const map = new Map();
    for (i=0; i<arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    for (let i=map.size; i>=k; i--) {
        if (map.get(i) >= k) {
            console.log(i);
        }
    }
}

highestFrequencyElement([1,1,2,2,3,3,3,4], 2)