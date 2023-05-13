function allDivisor(num) {
    // one way
    // let str = [];
    // for (let i=1; i<=num; i++) {
    //     if (num  % i === 0) {
    //         str.push(i);
    //     }
    // }
    // console.log(str.join(' '));

    // another way
    let divisors = [];
    let i = 1;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== num / i) {
                divisors.push(num / i);
            }
        }
        i++;
    }
    console.log(divisors.join(' '));
}

allDivisor(36);
allDivisor(97);