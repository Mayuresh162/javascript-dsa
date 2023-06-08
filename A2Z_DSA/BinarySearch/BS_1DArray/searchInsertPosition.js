function searchInsertPosition(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;

    if (x > arr[high]) {
        console.log(high+1);
        return;
    }

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            console.log(mid);
            return;
        } else if (arr[mid] < x) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    console.log(ans+1);
}

searchInsertPosition([1, 3, 5, 6], 5); // 2
searchInsertPosition([1, 3, 5, 6], 2); // 1
searchInsertPosition([1, 3, 5, 6], 4); // 2