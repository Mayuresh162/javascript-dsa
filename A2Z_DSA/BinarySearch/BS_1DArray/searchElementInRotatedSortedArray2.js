function search(arr, x) {
    //  my logic
    // console.log(arr.indexOf(x) == -1 ? false : true);

    // brute force
    // for(let elem of arr) {
    //     if (elem == x) {
    //         console.log(true);
    //         return;
    //     }
    // }
    // console.log(false);

    // optimised (binary search)
    let low = 0;
    let high = arr.length - 1; 

    while (low <= high) { 
        const mid = (low + high) >> 1; 
        if (arr[mid] == x) {
            console.log(true);
            return;
        } else if (arr[low] < arr[mid]) { 
            if (arr[low] <= x && arr[mid] > x) {
                high = mid - 1; 
            } else {
                low = mid + 1;
            }
        } else if (arr[mid] < arr[low]) {
            if (arr[mid] < x && x <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            low += 1;
        }
    }
    console.log(false);
}

search([2,5,6,0,0,1,2], 0)
search([2,5,6,0,0,1,2], 3)