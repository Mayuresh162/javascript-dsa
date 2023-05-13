function recursivebinarySearch(arr, t) {
    return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, start, end) {
    if(start > end) return -1;

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == t) return mid;

    if (t < arr[mid]) {
        return search(arr, t, start, mid - 1);
    } else {
        return search(arr, t, mid + 1, end);
    }

}

console.log(recursivebinarySearch([-5,2,4,6,10], 10))
console.log(recursivebinarySearch([-5,2,4,6,10], 6))
console.log(recursivebinarySearch([-5,2,4,6,10], 20))