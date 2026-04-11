/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    // stack
    // const stack = [];
    // let ans = "";
    // for (let el of s) {
    //     if (el == ")") {
    //         if (stack.length > 1) {
    //             ans += el;
    //         }
    //         stack.pop();
    //     } else {
    //         stack.push(el);
    //         if (stack.length > 1) {
    //             ans += el;
    //         }
    //     }
    // }
    // return ans;

    // w/o stack
    let level = 0;
    let ans = "";
    for (let el of s) {
        if (el === "(") {
            ++level;
            ans += level > 1 ? el : "";
        } else {
            ans += level > 1 ? el : "";
            --level;
        }
    }
    return ans;
};
