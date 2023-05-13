function binarySearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
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

console.log(binarySearch([1,2,3,4,5], 2));
// binarySearch([1,2,3,4,5], 3);
// binarySearch([1,2,3,4,5], 5);
// binarySearch([1,2,3,4,5], 6);
// binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10);
// binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95);
// binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100);
