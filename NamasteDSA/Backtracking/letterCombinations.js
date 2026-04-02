var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const obj = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    };

    const res = [];

    function backtrack(path, start) {
        if (start === digits.length) {
            res.push(path);
            return;
        }
        const letters = obj[digits[start]];
        for (let ch of letters) {
            backtrack(path + ch, start + 1);
        }
    }

    backtrack("", 0);
    return res;
};
