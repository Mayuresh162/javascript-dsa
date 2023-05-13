function stockBuySell(arr) {
    // brute force + my logic
    // let max = 0;
    // for (let i=0; i<arr.length; i++) {
    //     for (let j=i+1; j<arr.length; j++) {
    //         if (arr[j] > arr[i]) {
    //             max = Math.max(max, (arr[j] - arr[i]))
    //         }
    //     }
    // }
    // console.log(max);

    //  optimal solution
    let max = 0;
    let min = Infinity;
    for (let elem of arr) {
        min = Math.min(min, elem);
        max = Math.max(max, elem - min);
    }
    console.log(max);
}

stockBuySell([7,1,5,3,6,4]);
stockBuySell([7,6,4,3,1]);