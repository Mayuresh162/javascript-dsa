var combinationSum = function(candidates, target) {
    const result = [];
    function backtrack(path, start, diff) {
        if (diff === 0) {
            result.push([...path]);
            return;
        }
        if (diff < 0) return;
        for (let i=start; i<candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(path, i, diff-candidates[i]);
            path.pop();
        }
    }

    backtrack([], 0, target);
    return result;
};
