/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // TC: O(nlogn) SC: O(1)
    function merge(arr1, arr2) {
        const temp = [];
        let left = 0;
        let right = 0;
        while(left< arr1.length && right<arr2.length) {
            if (arr1[left] <= arr2[right]) {
                temp.push(arr1[left]);
                left++;
            } else {
                temp.push(arr2[right]);
                right++;
            }
        }

        while(left <arr1.length) {
            temp.push(arr1[left]);
            left++;
        }

        while(right <arr2.length) {
            temp.push(arr2[right]);
            right++;
        }

        return temp;
    }

    function mergeSort(arr) {
        if (arr.length < 2) return arr;
        const mid = arr.length >> 1;
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }

    return mergeSort(nums);
};
