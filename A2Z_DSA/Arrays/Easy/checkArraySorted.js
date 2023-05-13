function checkArraySorted(arr) {
    // one way
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;

    // another way
    // let count = 0;
    // for (let i = 0; i < nums.length-1; i++) {
    //     if (nums[i] > nums[i + 1]) {
    //         count++;
    //     }
    // }
    // if (count > 1 || (count == 1 && nums[0] < nums[nums.length-1])) {
    //     return false;
    // }
    // return true;
}

console.log(checkArraySorted([3,4,5,1,2]));
console.log(checkArraySorted([1,2,3,4,5]));