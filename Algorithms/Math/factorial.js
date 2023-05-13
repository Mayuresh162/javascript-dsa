function factorial(n) {
    let prod = 1;
    for(let i=2; i<=n; i++) {
        prod *=i;
    }
    return prod;
}

factorial(5);
