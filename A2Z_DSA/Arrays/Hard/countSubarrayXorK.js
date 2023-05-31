function countSubarrayXortarget(arr, target) {
    
    // brute force
    // let count = 0;
    // for (let i=0; i<arr.length; i++) {
    //     for (let j=i; j<arr.length; j++) {
    //         let xor = 0;
    //         for (let k=i; k<=j; k++) {
    //             xor ^= arr[k];
    //         }
    //         if (xor == target) count++;
    //     }
    // }
    // console.log(count);

    //  better approach
    // let count = 0;
    // for (let i=0; i<arr.length; i++) {
    //     let xor = 0;
    //     for (let j=i; j<arr.length; j++) {
    //         xor ^= arr[j];
    //         if (xor == target) count++;
    //     }
    // }
    // console.log(count);

    //  optimal approach
    let count = 0;
    const map = new Map();
    let xor = 0;
    map.set(xor, 1);

    for (let elem of arr) {
        xor ^= elem;
        count += map.get(xor ^ target) || 0;
        map.set(xor, (map.get(xor) || 0) + 1);
    }
    console.log(count);
}

countSubarrayXortarget([4, 2, 2, 6, 4], 6);
countSubarrayXortarget([5, 6, 7, 8, 9], 5);