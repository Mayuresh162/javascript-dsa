function heapSort(arr) { // TC: O(n logn), SC: O(1)
    const n = arr.length;
  
    // create maxHeap TC: O(n)
    for (let i=Math.floor(n/2) - 1; i>=0; i--) {
        heapifyDown(arr, i, n);
    }
    
    // sort the maxHeap TC: O(log n)
    for (let i=n-1; i>0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyDown(arr, 0, i);
    }
    
    return arr;
}

function heapifyDown(arr, i, n) {
    let largest = i;
    
    let left = (2*i) + 1;
    let right = (2*i) + 2;
    
    if (left<n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right<n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyDown(arr, largest, n)
    }
}

const arr = [1, 4, 10, 5, 26, 73, 99, 0, -1, -8, 3, 7, 9, 2];
const sortedArr = heapSort(arr);
console.log(sortedArr);
