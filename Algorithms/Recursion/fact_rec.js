function fact_rec(n) {
    if (n<2) return 1;
    return n * fact_rec(n-1);
}

console.log(fact_rec(0))
console.log(fact_rec(1))
console.log(fact_rec(4))
console.log(fact_rec(5))