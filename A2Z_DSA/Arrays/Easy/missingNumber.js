function missingNumber(arr) {
    // brute force way
    // if(arr.indexOf(arr.length) === -1) {
    //     console.log(arr.length);
    //     return;
    // }
    // let i = 0;
    // while(i<arr.length) {
    //     if (arr.indexOf(i) === -1) {
    //         console.log(i);
    //     }
    //     i++;
    // }

    // hashing way
    // const obj = {};
    // for (let i=0; i<arr.length+1; i++) {
    //     if (arr.indexOf(i) === -1) {
    //         obj[i] = 0;
    //     } else {
    //         obj[i] = 1;
    //     }
    // }
    // for (let key in obj) {
    //     if (obj[key] == 0) {
    //         console.log(+key);
    //     }
    // }

    //optimal approach 1. summation approach
    // const s1 = (arr.length * (arr.length+1)) / 2;
    // const s2 = arr.reduce((acc, curr) => acc += curr, 0)
    // console.log(s1 - s2);

    //optimal approach 2. xor(^) approach
    let xor1 = 0;
    let xor2 = 0;

    for (let i=0; i<arr.length; i++) {
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ (i+1);
    }

    console.log(xor1 ^ xor2);
}

missingNumber([3,0,1]);
missingNumber([0,1]);
missingNumber([9,6,4,2,3,5,7,0,1]);