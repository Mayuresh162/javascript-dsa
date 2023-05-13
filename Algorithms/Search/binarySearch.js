function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== val && start <=end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    }
    return -1;
}

console.log(binarySearch([-5,2,4,6,10], 10))
console.log(binarySearch([-5,2,4,6,10], 6))
console.log(binarySearch([-5,2,4,6,10], 20))