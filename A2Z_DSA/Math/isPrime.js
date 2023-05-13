function checkPrime(n) {
    // one way
    // for(let i=2; i<n; i++) {
    //     if (n % i === 0) return false;
    // }
    // return true;

    //another way
    for(let i=2; i<Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isPrime(num) {
    if (checkPrime(num)) {
        return 'Non-Prime';
    }
    return 'Prime';
}

console.log(isPrime(3));
console.log(isPrime(26));