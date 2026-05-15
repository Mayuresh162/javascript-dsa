function findPivotIdx(arr, start, end) { // TC: O(nlogn), SC: O(1)
    let pivot = arr[end];
    let pos = start-1;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            pos++;
            [arr[i], arr[pos]] = [arr[pos], arr[i]]
        }
    }
    [arr[pos + 1], arr[end]] = [arr[end], arr[pos + 1]]

    return pos + 1;
}

function quickSort(arr, start = 0, end = arr.length) {
    if (start < end) {
        let pivotIdx = findPivotIdx(arr, start, end);
        quickSort(arr, start, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, end);
    }
    return arr;
}

console.log(quickSort([13, 46, 24, 52, 20, 9]));
