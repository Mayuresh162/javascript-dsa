/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let h = nums.length - 1;
    while(l<=h) {
        let mid = (l+h) >> 1;
        if (nums[mid] == target) {
            return mid;
        }
        if (target > nums[mid]) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    } 
    return -1;
};
