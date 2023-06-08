function upperBoundBS(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;
    arr = arr.sort((a,b) => a-b);

    if (x >= arr[high]) {
        console.log(high+1);
        return;
    }

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < x) {
            low = mid + 1;
        } else {
            ans = mid;
            high = mid - 1;
        }
    }
    console.log(ans);
}


upperBoundBS([1, 2, 8, 10, 11, 12, 19], 0); // 0
upperBoundBS([1, 2, 8, 10, 11, 12, 19], 5); // 2
upperBoundBS([1, 2, 8, 10, 11, 12, 19], 20); // 7
upperBoundBS([1, 2, 8, 10, 11, 12, 19], 19); // 7
// upperBoundBS([5, 6, 8, 9, 6, 5, 5, 6], 7) // 8
// smallest index such that arr[index] > target