function search(arr, val) {

    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currElem = arr[middle];

        if (currElem < val) {
            min = middle + 1;
        } else if (currElem > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}


// binary search
// time complexity - Log(N)