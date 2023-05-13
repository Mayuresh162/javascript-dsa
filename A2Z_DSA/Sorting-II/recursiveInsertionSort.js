function insertion(arr, j) {
    if (j == arr.length) return;
    while(j>0 && arr[j-1] > arr[j]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
        j--;
    }
    insertion(arr, j+1);
}

function recursiveInsertionSort(arr) {
    insertion(arr, 0);
    console.log(arr);
}

recursiveInsertionSort([13,46,24,52,20,9]);