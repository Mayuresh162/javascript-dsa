function leadersinArray(arr) {

    //my logic
    // for (let i=0; i<arr.length; i++) {
    //     let max = 0;
    //     for (let j=i; j<arr.length; j++) {
    //         max = Math.max(max, arr[j])
    //     }
    //     if (max == arr[i]) {
    //         console.log(arr[i]);
    //     }
    // }

    // brute force
    // const ans = [];

    // for (let i = 0; i < arr.length; i++) {
    //     let leader = true;
    //     for (let j = i + 1; j < arr.length; j++)
    //     if (arr[j] > arr[i]) {
    //         leader = false;
    //         break;
    //     }

    //     if (leader) ans.push(arr[i]);
    // }

    // console.log(ans);

    // optimal solution
    const ans = [];

    let max = arr[arr.length - 1];
    ans.push(arr[arr.length - 1]);

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > max) {
            ans.push(arr[i]);
            max = arr[i];
        }
    }

    for (let i = ans.length - 1; i >= 0; i--) {
        console.log(ans[i]);
    }
}

// leadersinArray([4, 7, 1, 0]);
leadersinArray([10, 22, 12, 3, 0, 6]);