function sortColors(nums) {
    // my logic
    // let noSwaps;
    // for (let i = nums.length; i > 0; i--) {
    //     noSwaps = true;
    //     for (let j = 0; j < i - 1; j++) {
    //         if (nums[j] > nums[j+1]) {
    //             let temp = nums[j];
    //             nums[j] = nums[j+1];
    //             nums[j+1] = temp;
    //             noSwaps = false;
    //         }
    //     }
    //     if (noSwaps) break;
    // }
    // console.log(nums);

    // optimal approach (Dutch National Flag Algorithm)
    let low=0;
    let mid=0;
    let high=nums.length-1;
    while(mid<=high) {
        if (nums[mid] == 0) {
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            let temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }
    }
    console.log(nums);
} 

sortColors([2,0,2,1,1,0]);