function mergeIntervals(arr) {
    
    // brute force
    // const ans = [];
    // arr.sort((a, b) => a[0] - b[0]);
    // for (let i=0; i<arr.length; i++) {
    //     let start = arr[i][0];
    //     let end = arr[i][1];

    //     //Skip all the merged intervals:
    //     if (ans.length && end <= ans[ans.length - 1][1]) {
    //         continue;
    //     }
    //     for (let j=i+1; j<arr.length; j++) {
    //         if (arr[j][0] <= end) {
    //             end = Math.max(end, arr[j][1]);
    //         } else {
    //             break;
    //         }
    //     }
    //     ans.push([start, end]);
    // }
    // console.log(ans);

    // optimal approach
    arr.sort((a, b) => a[0] - b[0]);
    const ans = [];
    for (let elem of arr) {
        if (!ans.length || elem[0] >= ans[ans.length - 1][1]) {
            ans.push(elem);
        } else {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], elem[1]) 
        }
    }
    console.log(ans);
}

mergeIntervals([[1,3],[2,6],[8,10],[15,18]])