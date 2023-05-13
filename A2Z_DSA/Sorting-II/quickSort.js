function pivot(arr, low, high) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    let pivot = arr[low];
    let swapIdx = low;

    for (let i=low+1; i<=high; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, low, swapIdx);

    // let i = low;
    // let j = high;

    // while(i<j) {
    //     while(arr[i] <= pivot && i <= high -1) {
    //         i++;
    //     }
    
    //     while(arr[j] > pivot && j >= low + 1) {
    //         j--;
    //     }
    
    //     if(i < j) {
    //         swap(arr, j, i);
    //     }
    // }
    // swap(arr, low, j);
    // return j;
    return swapIdx;
}

function quickSort(arr, low = 0, high = arr.length) {
    if (low < high) {
        let pivotIdx = pivot(arr, low, high);
        quickSort(arr, low, pivotIdx-1); 
        quickSort(arr, pivotIdx+1, high); 
    }
    return arr;
}

console.log(quickSort([4,6,2,5,7,9,1,3]));