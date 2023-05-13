function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        let isSwap = 0;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwap = 1;
            }
        }
        if (isSwap == 0) break;
    }
    console.log(arr);
}

bubbleSort([13,46,24,52,20,9]);
