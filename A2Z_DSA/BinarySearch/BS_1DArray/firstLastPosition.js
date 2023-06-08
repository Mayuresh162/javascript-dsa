function firstLastPosition(arr, x) {
    // my logic
    // console.log(arr.indexOf(x), arr.lastIndexOf(x));

    //  brute force
    // let first = -1;
    // let last = -1;
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   if (arr[i] == x) {
    //     last = i;
    //     break;
    //   }
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == x) {
    //       first = i;
    //       break;
    //     }
    // }
    // console.log(first, last);

    // optimised
    let first = findFirst(arr, x);
    let last = findLast(arr, x);

    function findFirst(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
        
            if (nums[mid] === target) {
                result = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    function findLast(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
        
            if (nums[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
   
    console.log(first, last);
}

firstLastPosition([3,4,13,13,13,20,40], 13);
firstLastPosition([3,4,13,13,13,20,40], 60);