function maximumProductSubarray(arr) {
    // my logic (optimized brute force)
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     let prod = 1;
    //     for (let j=i; j<arr.length; j++) {
    //         prod *= arr[j];
    //         max = Math.max(max, prod);
    //     }
    // }
    // console.log(max);

    //  brute force
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     for (let j=i+1; j<arr.length; j++) {
    //         let prod = 1;
    //         for (let k=i; k<=j; k++) {
    //             prod *= arr[k];
    //         }
    //         max = Math.max(max, prod);
    //     }
    // }
    // console.log(max);

    //  better appoach
    // let maxL = 0;
    // let maxR = 0;

    // let zero = false;
    // let prod = 1;

    // for (let elem of arr) {
    //     prod *= elem;
    //     if (elem == 0) {
    //         zero = true;
    //         prod = 1;
    //         continue;
    //     }
    //     maxL = Math.max(maxL, prod);
    // }

    // prod = 1;

    // for (let i=arr.length-1; i>=0; i--) {
    //     prod *= arr[i];
    //     if (arr[i] == 0) {
    //         zero = true;
    //         prod = 1;
    //         continue;
    //     }
    //     maxR = Math.max(maxR, prod);
    // }

    // if (zero) {
    //     console.log(Math.max(Math.max(maxL, maxR), 0));
    //     return;
    // }
    // console.log(Math.max(maxL, maxR));

    //  optimal approach (Kadane algorithm)
    let prod1 = arr[0];
    let prod2 = arr[0];
    let max = arr[0];

    for (let i=1; i<arr.length; i++) {
        const temp = Math.max(arr[i], Math.max(prod1*arr[i], prod2*arr[i]));
        prod2 = Math.min(arr[i], Math.min(prod1*arr[i], prod2*arr[i]));
        prod1 = temp;

        max = Math.max(max, prod1);
    }

    console.log(max);
}

maximumProductSubarray([1,2,3,4,5,0]);
maximumProductSubarray([1,2,-3,0,-4,-5]);