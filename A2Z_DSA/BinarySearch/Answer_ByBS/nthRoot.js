function nthRoot(n, m) {
    // my approach
    // const nRoot = Math.pow(m, 1/n);
    // console.log(nRoot === n ? nRoot : -1);

    // brute force
    // function powExp(b, exp) {
    //     let ans = 1;
    //     let base = b;
    //     while (exp > 0) {
    //         if (exp % 2) {
    //             exp--;
    //             ans = ans * base;
    //         }
    //         else {
    //             exp /= 2;
    //             base = base * base;
    //         }
    //     }
    //     return ans;
    // }

    // for (let i = 1; i <= m; i++) {
    //     let val = powExp(i, n);
    //     if (val === m) {
    //         console.log(i);
    //         return;
    //     }
    //     else if (val > m) break;
    // }
    // console.log(-1);

    // optimal approach (binary search)
    function func(mid, n, m) {
        let ans = 1;
        for (let i = 1; i <= n; i++) {
            ans = ans * mid;
            if (ans > m) return 2;
        }
        if (ans === m) return 1;
        return 0;
    }
    
    let low = 1, high = m;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midN = func(mid, n, m);
        if (midN === 1) {
            console.log(mid);
            return;
        } else if (midN === 0) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    console.log(-1);
}

nthRoot(3, 27);
nthRoot(4, 69);
nthRoot(5, 125);