function spiralMatrix(arr) {
    // better approach
    // let top = 0;
    // let left = 0;
    // let right = arr[0].length - 1;
    // let bottom = arr.length - 1;
    // const res = [];

    // while (top <= bottom && left <= right) {
    //     // For moving left to right
    //     for (let i = left; i <= right; i++) {
    //         res.push(arr[top][i]);
    //     }
    //     top++;
    
    //     // For moving top to bottom.
    //     for (let i = top; i <= bottom; i++) {
    //         res.push(arr[i][right]);
    //     }
    //     right--;
    
    //     // For moving right to left.
    //     if (top <= bottom) {
    //       for (let i = right; i >= left; i--) {
    //         res.push(arr[bottom][i]);
    //       }
    //       bottom--;
    //     }
    
    //     // For moving bottom to top.
    //     if (left <= right) {
    //       for (let i = bottom; i >= top; i--) {
    //         res.push(arr[i][left]);
    //       }
    //       left++;
    //     }
    // }
    // console.log(res);

    // another approach
    const res = [];
    while (arr.length) {
        const first = arr.shift();
        res.push(...first);
        console.log('1', first, res, arr);
        for (const m of arr) {
            let val = m.pop();
            console.log('2', val);
            if (val) {
                res.push(val);
            }
            m.reverse();
        }
        arr.reverse();
    }
    console.log(res);
}

spiralMatrix([[1,2,3],[4,5,6],[7,8,9]]);