function lowerBoundBS(arr, x) {
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
    console.log(ans);
}

lowerBoundBS([1, 2, 8, 10, 11, 12, 19], 0); // -1
lowerBoundBS([1, 2, 8, 10, 11, 12, 19], 5); // 1
lowerBoundBS([1, 2, 8, 10, 11, 12, 19], 20); // 7
lowerBoundBS([1, 2, 8, 10, 11, 12, 19], 19); // 6
//  smallest index such that arr[index] >= target