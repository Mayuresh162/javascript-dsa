function fibonacci(n) {
    // one way
    let n1 = 0, n2 = 1, sum;
    
    for (let i=1; i<=n; i++) {
        console.log(n2);
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    } 

    // recursive way
    // if (n<2) return n;
    // return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(5))