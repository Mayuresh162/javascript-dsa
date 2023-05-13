function twoSum(arr, target) {
    // my logic
    // let i=0;
    // let j=arr.length;
    // const res = [];
    // while(i<j) {
    //     if (arr[i] + arr[j] == target) {
    //         res.push(i);
    //         res.push(j);
    //         console.log(res);
    //         return;
    //     } else if (arr[i] + arr[j] < target) {
    //         i++;
    //     } else {
    //         j--;
    //     }
    // }

    // brute force 1st variant
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] == target) {
    //             console.log("YES");
    //             return;
    //         }
    //     }
    // }
    // console.log("NO");

    // brute force 2nd variant
    // const res = [-1, -1];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] == target) {
    //             res[0] = i;
    //             res[1] = j;
    //             console.log(res);
    //             return;
    //         }
    //     }
    // }
    // console.log(res);

    // better approach using hashing 1s variant
    // const map = new Map();
    // for (let i=0; i<arr.length; i++) {
    //     let curr = arr[i];
    //     let next = target - curr;
    //     if (map.has(next)) {
    //         console.log('YES');
    //         return;
    //     }
    //     map.set(arr[i], i);
    // }
    // console.log('NO');

    // better approach using hashing 2nd variant
    const map = new Map();
    for (let i=0; i<arr.length; i++) {
        let curr = arr[i];
        let next = target - curr;
        if (map.has(next)) {
            console.log([map.get(next), i])
            return;
        }
        map.set(arr[i], i);
    }
    console.log([-1,-1]);
}

twoSum([2,6,5,8,11], 14)