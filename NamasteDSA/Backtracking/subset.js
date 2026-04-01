var subsets = function(nums) {
    const result = [];

    function backtrack(path, start) {
        result.push([...path]);
        for (let i=start; i<nums.length; i++) {
            path.push(nums[i]);
            backtrack(path, i+1);
            path.pop();
        }
    }

    backtrack([], 0);
    return result;
};
