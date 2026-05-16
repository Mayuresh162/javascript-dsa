
function countStableSort(arr, e) {
    const count = new Array(10).fill(0);

    for (let x of arr) {
        const digit = Math.floor(x / e) % 10;
        count[digit]++
    }

    for (let i = 1; i < count.length; i++) {
        count[i] = count[i] + count[i-1];
    }

    const sortedArr = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const curr = Math.floor(arr[i] / e) % 10;
        const x = count[curr];
        sortedArr[x - 1] = arr[i];
        count[curr]--;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = sortedArr[i];
    }
}

function radixSort(arr) { // TC: O(d*(n+k)) => d: digits, k: range(10)
    const max = Math.max(...arr);

    for (let e = 1; Math.floor(max / e) > 0; e = e * 10) {
        countStableSort(arr, e);
    }

    return arr;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));

