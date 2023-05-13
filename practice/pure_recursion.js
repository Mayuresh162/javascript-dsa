function collectOdds(nums) {
    let arr = [];

    if (nums.length === 0) {
        return arr;
    }

    if (nums[0] % 2 !==0) {
        arr.push(nums[0]);
    }

    arr = arr.concat(collectOdds(nums.slice(1)));
    return arr;
}

collectOdds([1,2,3,4,5]);