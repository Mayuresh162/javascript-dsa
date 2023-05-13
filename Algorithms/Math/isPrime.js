function isPrime(n) {
    let flag = true;
    if (n<2) flag = false;
    // for (let i=2; i<n; i++) {
    for (let i=2; i<= Math.sqrt(n); i++) {
        if (n % i == 0) {
            flag = false;
        }
    }
    console.log(flag);
}

isPrime(21);
isPrime(4);