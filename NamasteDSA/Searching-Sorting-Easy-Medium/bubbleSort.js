const arr = [5, 1, 4, 2];

for (let i=0; i<arr.length-1; i++) {
    for (let j=0; j<arr.length-1-i; j++) {
        if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}

console.log(arr); // [1,2,4,5] tc: O(n^2) , sc: O(1)

// more optimised
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        let isSwap = 0;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSwap = 1;
            }
        }
        if (isSwap == 0) break;
    }
    console.log(arr);
}

bubbleSort([13,46,24,52,20,9]);
