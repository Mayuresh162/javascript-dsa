function bubble(arr, n) {
    if (n==1) return;
    for (let j = 0; j <= n-2; j++) {
        if (arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    bubble(arr, n-1);
}

function recursiveBubbleSort(arr) {
    bubble(arr, arr.length);
    console.log(arr);
}

recursiveBubbleSort([13,46,24,52,20,9]);