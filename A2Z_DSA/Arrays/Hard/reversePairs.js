function reversePairs(arr) {
    //  my logic (brute force)
    // let count = 0;
    // for (let i=0; i<arr.length; i++) {
    //     for (let j=i+1; j<arr.length; j++) {
    //         if (arr[i] > (2 * arr[j])) {
    //             count++;
    //         }
    //     }
    // }
    // console.log(count);

    //  optimal approach
    let count = 0;
       
    function merge(arr1, arr2) {
        const temp = [];
        let left = 0;
        let right = 0;

        while(left < arr1.length && right < arr2.length) {
            if (arr1[left] > 2 * arr2[right]) {
                count += (arr1.length - left);
                right++;
            } else {
                left++;
            }
        }

        left = 0;
        right = 0;

        while (left < arr1.length && right < arr2.length) {
            if (arr1[left] <= arr2[right]) {
                temp.push(arr1[left]);
                left++;
            } else {
                temp.push(arr2[right]);
                right++;
            }
        }
    
        while (left < arr1.length) {
            temp.push(arr1[left]);
            left++;
        }
    
        while(right < arr2.length) {
            temp.push(arr2[right]);
            right++;
        }
    
        return temp;
    }

    function mergeSort(nums) {
        if (nums.length < 2) return nums;
        let mid = Math.floor(nums.length/2);
        let left = mergeSort(nums.slice(0, mid));
        let right = mergeSort(nums.slice(mid));
        return merge(left, right);
    }

    mergeSort(arr);
    console.log(count);
}

reversePairs([1,3,2,3,1]);
reversePairs([3,2,1,4]);