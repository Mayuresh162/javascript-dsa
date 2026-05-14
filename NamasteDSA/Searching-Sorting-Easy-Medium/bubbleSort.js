const arr = [5, 1, 4, 2];

for (let i=0; i<arr.length-1; i++) {
    for (let j=0; j<arr.length-1-i; j++) {
        if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}

console.log(arr); // [1,2,4,5] tc: O(n^2) , sc: O(1)
