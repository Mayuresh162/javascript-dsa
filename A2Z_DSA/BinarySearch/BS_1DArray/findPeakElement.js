function findPeakElement(arr) {
    //  my logic
    // for (let i=1; i<arr.length; i++) {
    //     if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
    //         console.log(arr[i]);
    //         break;
    //     }
    // }

    //  brute force
    // if (arr[0] >= arr[1]) {
    //     console.log(arr[0]);
    //     return;
    // }

    // for (let i=1; i< arr.length - 1; i++) {
    //     if (arr[i] >= arr[i-1] && arr[i] >= arr[i+1]) {
    //         console.log(arr[i]);
    //         return;
    //     }
    // }
    // console.log(arr[arr.length - 1]);

    // optimal solution (binary search)
    // let low = 0;
    // let high = arr.length - 1;
    
    // while(low<high) {
    //     const mid = (low+high) >> 1;

    //     if (mid == 0) {
    //         if (arr[0] >= arr[1]) {
    //             console.log(arr[0]);
    //         } else {
    //             console.log(arr[1]);
    //         }
    //         return;
    //     }

    //     if (mid == arr.length - 1) {
    //         if (arr[arr.length - 1] >= arr[arr.length - 2]) {
    //             console.log(arr[arr.length - 1]);
    //         } else {
    //             console.log(arr[arr.length - 2]);
    //         }
    //         return;
    //     }

    //     if (arr[mid] >= arr[mid+1] && arr[mid] >= arr[mid-1]) {
    //         console.log(arr[mid]);
    //         return;
    //     }

    //     if (arr[mid] < arr[mid-1]) {
    //         high = mid-1;
    //     } else {
    //         low = mid+1;
    //     }
    //     // console.log(arr[low]);
    // }

    // optimal solution 2
    let low = 0;
    let high = arr.length - 1;

    while(low<high) {
        const mid = (low+high) >> 1;

        if (arr[mid]<arr[mid+1]) {
            low=mid+1;
        } else {
            high=mid;
        }
    }
    console.log(arr[low]);
}

findPeakElement([3, 5, 4, 1, 1]); // 5, 1
findPeakElement([2,6,3,7,8,9]); // 6, 9