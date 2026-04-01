var permute = function(nums) {
    const result = [];
    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let elem of nums) {
            if (path.includes(elem)) continue;
            path.push(elem);
            backtrack(path);
            path.pop();
        }
    }
    backtrack([]);
    return result;
};
