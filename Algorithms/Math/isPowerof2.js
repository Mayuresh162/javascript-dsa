// function isPowerOfTwo(n) {
//     let flag = true;
//     if (n<1) return false;
//     while(n > 1) {
//         if(n % 2 == 1) {
//             flag = false;
//             break;
//         }
//         n = n / 2;
//     }
//     console.log(flag);
// }

// isPowerOfTwo(8);
// isPowerOfTwo(5);
// isPowerOfTwo(1);

function isPowerOfTwoBitWise(n) {
    if (n<1) return false;
    return (n & (n-1)) == 0;
}

console.log(isPowerOfTwoBitWise(1))
console.log(isPowerOfTwoBitWise(2))
console.log(isPowerOfTwoBitWise(5))
