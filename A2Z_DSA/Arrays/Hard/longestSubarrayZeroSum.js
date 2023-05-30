function longestSubarrayZeroSum(arr) {
    // my logic
    // const res = [];
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     let sum = arr[i];
    //     for (let j=i+1; j<arr.length; j++) {
    //         sum += arr[j];
    //         if (sum == 0) {
    //             res.push(arr.slice(i, j+1));
    //             max = Math.max(max, arr.slice(i, j+1).length)
    //         }
    //     }
    // }
    // console.log(res, max);

    //  brute force
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     let sum = 0;
    //     for (let j=i; j<arr.length; j++) {
    //         sum += arr[j];
    //         if (sum == 0) {
    //             max = Math.max(max, j-i+1);
    //         }
    //     }
    // }
    // console.log(max);

    //  better approach
    const map = new Map();
    let max = 0;
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
        if (sum == 0) {
            max = i+1;
        } else {
            if (map.has(sum)) {
                max = Math.max(max, i - map.get(sum))
            } else {
                map.set(sum, i);
            }
        }
    }
    console.log(max);
}

longestSubarrayZeroSum([9, -3, 3, -1, 6, -5]);
longestSubarrayZeroSum([6, -2, 2, -8, 1, 7, 4, -10]);