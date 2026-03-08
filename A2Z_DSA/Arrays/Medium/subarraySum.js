function subarraySum(arr, k) {
    // my logic
    // const res = [];
    // for (let i=0; i<arr.length; i++) {
    //     let sum = arr[i];
    //     for (let j=i+1; j<arr.length; j++) {
    //         sum += arr[j];
    //         if (sum == k) {
    //             const ans = [];
    //             for (let k=i; k<=j; k++) {
    //                 ans.push(arr[k]);
    //             }
    //             res.push(ans);
    //         }
    //     }
    //     if (arr[i] == k) {
    //         res.push(arr[i]);
    //     }
    // }
    // console.log(res.length);

    // brute force
    // let count = 0;
    // for (let i=0; i<arr.length; i++) {
    //     for (let j=i; j<arr.length; j++) {
    //         let sum = 0;
    //         for (let l = i; l<=j; l++) {
    //             sum += arr[l];
    //         }
    //         if (sum == k) {
    //             count++;
    //         }
    //     }
    // }
    // console.log(count);

    //  better approach
    // let count = 0;
    // for (let i=0; i<arr.length; i++) {
    //     let sum = 0;
    //     for (let j=i; j<arr.length; j++) {
    //         sum += arr[j];
    //         if (sum == k) {
    //             count++;
    //         }
    //     }
    // }
    // console.log(count);

    // optimal approach
    // const hashMap = {};
    // let currentSum = 0;
    // let count = 0

    // for (let elem of arr) {
    //     currentSum += elem;
    //     if (currentSum === k) {
    //         count++;
    //     }
    //     const difference = currentSum - k;
    //     if (difference in hashMap) {
    //         count += hashMap[difference];
    //     }
    //     hashMap[currentSum] = (hashMap[currentSum] || 0) + 1;
    // }
    // console.log(count);

    // another approach
    const map = new Map([[0, 1]]);
    let count = 0;
    let sum = 0;

    for (let num of arr) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) ?? 0) + 1);
    }
    console.log(count); 
}

subarraySum([3, 1, 2, 4], 6);
subarraySum([1, 2, 3], 3);