/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // traditional way with eval
    const stack = [];
    for (let el of tokens) {
        if (el == "+" || el == "-" || el == "/" || el == "*") {
            const a = stack.pop();
            const b = stack.pop();
            let ans = eval(b+el+a);
            stack.push(Math.trunc(ans));
        } else {
            stack.push(el);
        }
    }
    return Number(stack.pop());
  
    // cleaned code
    const stack = [];
    const ops = {
        "+": (a, b) => b + a,
        "-": (a, b) => b - a,
        "*": (a, b) => b * a,
        "/": (a, b) => Math.trunc(b/a),
    };
    for (let el of tokens) {
        if (ops[el]) {
            const a = stack.pop();
            const b = stack.pop();
            let ans = ops[el](a, b);
            stack.push(ans);
        } else {
            stack.push(+el);
        }
    }
    return stack.pop();
};
