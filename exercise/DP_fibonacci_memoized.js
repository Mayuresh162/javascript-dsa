// function fib(n, memo = []) {
//     if (memo[n] !== undefined) return memo[n];
//     if (n<=2) return 1;
//     var res = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = res;
//     return res;
// }
let store = {};
function fib(n, memo = [undefined, 1, 1]) {
    // if (memo[n] !== undefined) return memo[n];
    // // if (n<=2) return 1;
    // var res = fib(n-1, memo) + fib(n-2, memo);
    // memo[n] = res;
    // return res;

    // other way
    if (n<=2) return 1;
    if (!store[n]) {
        store[n] = fib(n-1) + fib(n-2);
    }
    return store[n];
}
