function GCD(x, y) {
    // one way
    // let ans = 1;
    // for (let i=1; i <= Math.min(x, y); i++) {
    //     if ((x % i == 0) && (y % i == 0)) {
    //         ans = i;
    //     }
    // }
    // return ans;

    // another way
    if (y == 0) return x;
    return GCD(y, x % y);
}

console.log(GCD(4, 8));
console.log(GCD(3, 6));