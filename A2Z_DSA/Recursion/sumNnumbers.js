function sumNnumbers(n, sum = 0) {
    // one way
    // let sum = 0;
    // for (let i=1; i<=5; i++) {
    //     sum += i;
    // }
    // console.log(sum);

    // formula
    // const sum = n * (n+1) / 2;
    // console.log(sum);

    // parameterised way
    // if (n < 1) {
    //     console.log(sum);
    //     return;
    // }
    // sumNnumbers(n-1, sum+n);

    // functional way
    if (n == 0) return 0;
    return n + sumNnumbers(n-1);
}

// sumNnumbers(5);
console.log(sumNnumbers(5));