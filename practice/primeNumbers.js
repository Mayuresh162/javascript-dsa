function isPrime(n) {
    if(n == 1 || n == 0) return false;
    for(let i=2; i<n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPrime(val) {
    let num = 100, count = 0;
    for (let i=1; i<=num; i++) {
        if (isPrime(i)) {
            count++;
            console.log(i);
        }
        if (val == count) {
            return;
        }
    }
}

getPrime(5);

