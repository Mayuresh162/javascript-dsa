function maxConsecutiveOnes(arr) {
    // my logic
    // const res = [];
    // let count = 0;
    // for (let elem of arr) {
    //     if (elem == 1) {
    //         count += 1;
    //     } else {
    //         res.push(count);
    //         count = 0;
    //     }
    // }
    // res.push(count);
    // console.log(Math.max(...res));

    // brute force
    // let max = 0;
    // let count = 0;
    // for (let elem of arr) {
    //     if (elem == 1) {
    //         count += 1;
    //     } else {
    //         count = 0;
    //     }
    //     max = Math.max(count, max)
    // }
    // console.log(max);

    // one liners
    console.log(arr.join('').split('0').reduce((max, ones) => Math.max(max, ones.length), 0));
}

maxConsecutiveOnes([1, 1, 0, 1, 1, 1])
maxConsecutiveOnes([1, 0, 1, 1, 0, 1])