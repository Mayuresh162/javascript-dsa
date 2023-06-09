function search(arr, x) {
    //  my logic
    // console.log(arr.indexOf(x));

    // brute force
    // for(let i=0; i<arr.length; i++) {
    //     if (arr[i] == x) {
    //         console.log(i);
    //         return;
    //     }
    // }
    // console.log(-1);

    // optimised (binary search)
    let low = 0;
    let high = arr.length - 1; 

    while (low <= high) { 
        let mid = (low + high) >> 1; 
        if (arr[mid] == x) {
            console.log(mid);
            return; 
        }
        if (arr[low] <= arr[mid]) { 
            if (arr[low] <= x && arr[mid] >= x) {
                high = mid - 1; 
            } else {
                low = mid + 1;
            }
        } else {
            if (arr[mid] <= x && x <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    console.log(-1);
}

search([4,5,6,7,0,1,2,3], 0)
search([4,5,6,7,0,1,2], 3)