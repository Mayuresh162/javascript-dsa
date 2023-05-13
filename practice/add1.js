function addUpto(n) {
    let total = 0;
    for (let i=1; i<=n; i++) {
        total +=i;
    }

    return total;
}

console.log(addUpto(6));

//n additions, n assignments, n additions and assignments for i++, 1 assignment for total, 1 assignment for i=1, n comparisons
//5n+2 operations
// as N grows, number of operations also grow
// No of operations are bounded by a multiple of n(say, 10n) -> O(n)