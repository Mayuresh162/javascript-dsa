function countOccurrences(arr, x) {
    // my logic
    // const count = arr.reduce((acc, curr) => {
    //     if (curr == x) acc++;
    //     return acc;
    // }, 0);
    // console.log(count);

    // brute force
    // let count = 0;
    // for (let elem of arr) {
    //     if (elem == x) {
    //         count++;
    //     }
    // }
    // console.log(count);

    // optimised (binary search)
    function binary(nums, k) {
        let low = 0;
        let high = nums.length - 1;
    
        while (low <= high) {
            const mid = Math.floor((low+high)/2);
    
            if (nums[mid]==k) {
                return mid;
            } else if (nums[mid] < k) {
                low = mid+1;
            } else {
                high = mid-1;
            }
        }
        return -1;
    }

    let idx = binary(arr, x);

    if (idx == -1) return 0;

    let count = 1;
    let left = idx - 1;

    while (left >=0 && arr[left] == x) {
        count++;
        left--;
    }

    let right = idx + 1;

    while (right < arr.length && arr[right] == x) {
      count++;
      right++;
    }

    console.log(count);
}

countOccurrences([2, 2 , 3 , 3 , 3 , 3 , 4], 3);
countOccurrences([1, 1, 2, 2, 2, 2, 2, 3], 2);