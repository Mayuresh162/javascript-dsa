function longestSubarray(arr, target) {
    // my logic
    // const res = [];
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     let sum = arr[i];
    //     for (let j=i+1; j<arr.length; j++) {
    //         if (arr[i] == target) {
    //             res.push([arr[i]]);
    //         } else {
    //             sum += arr[j];
    //             if (sum == target) {
    //                 res.push(arr.slice(i, j+1));
    //                 max = Math.max(max, arr.slice(i, j+1).length)
    //             }
    //         }
    //     }
    // }
    // console.log(res, max);

    // brute force
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     for (let j=i; j<arr.length; j++) {
    //         let sum = 0;
    //         for (let k=i; k<=j; k++) {
    //             sum += arr[k];
    //         }
    //         if (sum==target) {
    //             max = Math.max(max, j-i+1);
    //         } 
    //     }
    // }
    // console.log(max);

    //  optimized brute force
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     let sum = 0;
    //     for (let j=i; j<arr.length; j++) {
    //         sum += arr[j]
    //         if (sum==target) {
    //             max = Math.max(max, j-i+1);
    //         } 
    //     }
    // }
    // console.log(max);

    // using hashing
    // const map = new Map();
    // let sum = 0;
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     sum += arr[i];
    //     if (sum==target) {
    //         max = Math.max(max, i+1);
    //     }
    //     let rem = sum-target;
    //     if (map.has(rem)) {
    //         const len = i - map.get(rem);
    //         max = Math.max(max, len);
    //     }

    //     if (!map.has(sum)) {
    //         map.set(sum, i)
    //     }
    // }
    // console.log(max);

    // optimal approach(2 pointers)
    let l=0;
    let r=0;
    let sum = arr[0];
    let max = 0;
    while(r<arr.length) {
        while(l<=r && sum > target) {
            sum -= arr[l];
            l++;
        }
        if (sum==target) {
            max = Math.max(max, r-l+1);
        }
        r++;
        if (r<arr.length) sum+=arr[r];
    }
    console.log(max);
}

longestSubarray([-1, 1, 1], 1);