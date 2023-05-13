function maxSubarraySum(arr) {
    // my logic
    // let max = 0;
    // let sum = 0;
    // for(let elem of arr) {
    //     sum += elem;
    //     max = Math.max(sum, max);
    //     sum = sum < 0 ? 0 : sum;
    // }
    // console.log(max);
    
    // brute force
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     for (let j=i; j<arr.length; j++) {
    //         let sum = 0;
    //         for (let k=i; k<=j; k++) {
    //             sum += arr[k];
    //         } 
    //         max = Math.max(sum, max);
    //     }
    // }
    // console.log(max);

    // better approach
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     let sum = 0;
    //     for (let j=i; j<arr.length; j++) {
    //         sum += arr[j];
    //         max = Math.max(max, sum);
    //     } 
    // }
    // console.log(max);

    // Optimal solution (Kadane's Algorithm)
    // let max = -Infinity;
    // let sum = 0;
    // for (let i=0; i<arr.length; i++) {
    //     sum += arr[i];
    //     if (sum > max) max = sum;
    //     if (sum < 0) sum = 0;
    // }
    // if (max < 0) max = 0;
    // console.log(max);

    // follow up question (print subarry)
    let max = 0;
    let sum = 0;
    let start = 0;
    let ansStart = -1;
    let ansEnd = -1;
    for (let i=0; i<arr.length; i++) {
        if (sum == 0) start = i;
        sum += arr[i];
        if (sum > max) {
            max = sum;
            ansStart = start;
            ansEnd = i;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    for (let i=ansStart; i<=ansEnd; i++) {
        console.log(arr[i])
    }
    console.log(max);
}

maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]);