function binarySearch(arr, target) {
    //  my logic
    // console.log(arr.indexOf(target));

    // iterative approach
    // let start = 0;
    // let end = arr.length-1;
    // let mid = 0;
    // let loc = -1;
    // while(start<=end) {
    //     mid = Math.floor((start+end)/2);

    //     if (arr[mid] < target) {
    //         start = mid+1;
    //     } else if (arr[mid] > target) {
    //         end = mid-1;
    //     }
    //     if (arr[mid] == target) {
    //         loc = mid;
    //         break;
    //     }
    // }
    // if (loc == -1) {
    //     console.log('Element not found');
    // } else {
    //     console.log(loc);
    // }

    //  recursive approach

    function find(nums, start, end, k) {
        if (start > end) return -1;
        let mid = Math.floor((start+end)/2);
        if (k == nums[mid]) return mid;
        else if (k > nums[mid]) return find(nums, mid+1, end, k);
        else return find(nums, start, mid-1, k);
    }

    const loc = find(arr, 0, arr.length-1, target)
    console.log(loc);

}

binarySearch([2,3,7,10,13,14,17], 11)