function fourSum(arr, target) {
    // brute force
    // const results = [];
    // arr.sort((a, b) => a - b);
    // for (let i=0; i<arr.length-3; i++) {
    //     if (i > 0 && arr[i] === arr[i - 1]) continue;
    //     for (let j=i+1; j<arr.length-2; j++) {
    //         if (j > i + 1 && arr[j] === arr[j - 1]) continue;
    //         for (let k=j+1; k<arr.length-1; k++) {
    //             if (k > j + 1 && arr[k] === arr[k - 1]) continue;
    //             for (let l=k+1; l<arr.length; l++) {
    //                 if (l > k + 1 && arr[l] === arr[l - 1]) continue;
    //                 const sum = arr[i] + arr[j] + arr[k] + arr[l];
    //                 if (sum === target) {
    //                     results.push([arr[i], arr[j], arr[k], arr[l]]);
    //                 }
    //             }
    //         }
    //     }
    // }
    // console.log(results);

    // const results = [];
    // const hashSet = new Set();

    // for (let i = 0; i < arr.length - 3; i++) {
    //     for (let j = i + 1; j < arr.length - 2; j++) {
    //         for (let k = j + 1; k < arr.length - 1; k++) {
    //             for (let l = k + 1; l < arr.length; l++) {
    //                 const sum = arr[i] + arr[j] + arr[k] + arr[l];
                    
    //                 if (sum === target) {
    //                     const quadruplet = [arr[i], arr[j], arr[k], arr[l]].sort((a, b) => a - b);
    //                     const key = quadruplet.join(',');
    //                     if (!hashSet.has(key)) {
    //                         results.push(quadruplet);
    //                         hashSet.push(key);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // console.log(results);

    // better approach
    // const results = [];
    // arr.sort((a, b) => a - b);

    // for (let i = 0; i < arr.length - 3; i++) {
    //     if (i > 0 && arr[i] === arr[i - 1]) continue;

    //     for (let j = i + 1; j < arr.length - 2; j++) {
    //         if (j > i + 1 && arr[j] === arr[j - 1]) continue;

    //         const remainingSum = target - (arr[i] + arr[j]);
    //         const hashSet = new Set();

    //         for (let k = j + 1; k < arr.length; k++) {
    //             const complement = remainingSum - arr[k];

    //             if (hashSet.has(complement)) {
    //                 results.push([arr[i], arr[j], arr[k], complement].sort((a,b) => a-b));

    //                 while (k < arr.length - 1 && arr[k] === arr[k + 1]) {
    //                     k++;
    //                 }
    //             }

    //             hashSet.push(arr[k]);
    //         }
    //     }
    // }
    // console.log(results);

    // optimal solution
    const result = [];
    arr.sort((a,b) => a-b);

    for (let i=0; i<arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        for (let j = i + 1; j < arr.length - 2; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) continue;

            let k = j + 1;
            let l = arr.length - 1;

            while (k < l) {
                const sum = arr[i] + arr[j] + arr[k] + arr[l];
                if (sum == target) {
                    const temp = [];
                    temp.push(arr[i]);
                    temp.push(arr[j]);
                    temp.push(arr[k]);
                    temp.push(arr[l]);
                    result.push(temp);
                    k++;
                    l--;
                    while (k < l && arr[k] == arr[k - 1]) k++;
                    while (k < l && arr[l] == arr[l + 1]) l--;
                } else if (sum < target) k++;
                else l--;
            }
        }
    }
    console.log(result);
}

fourSum([1,0,-1,0,-2,2], 0);
fourSum([4,3,3,4,4,2,1,2,1,1], 9);

