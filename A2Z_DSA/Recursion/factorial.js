function factorial(n) {
    // iterative way
    // let fact = 1;
    // for (let i=n; i>=1; i--) {
    //     fact *= i;
    // }
    // console.log(fact);

    // recursive way
    if (n==1) return 1;
    return n * factorial(n-1);
}

// factorial(5);
console.log(factorial(5));