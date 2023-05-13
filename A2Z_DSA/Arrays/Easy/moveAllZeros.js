function moveAllZeros(arr) {
    // one way
    // const res = [];
    // for (let i=0; i<arr.length; i++) {
    //     if (arr[i] == 0) {
    //         const op = arr.splice(i, 1);
    //         res.push(...op);
    //     }
    // }
    // console.log([...arr, ...res]);

    // another way
    // const res = [];
    // let k = 0;
    // for (let elem of arr) {
    //     if (elem != 0) {
    //         res[k] = elem;
    //         k++;
    //     }
    // }

    // while(k<arr.length) {
    //     res[k] = 0;
    //     k++;
    // }
    // console.log(res);

    //optimal approach
    let i = arr.indexOf(0);
    let j = i+1;
    while(i<arr.length && j<arr.length) {
        if (arr[j] != 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
        j++;
    }
    console.log(arr);
}

moveAllZeros([1,0,2,3,0,4,0,1])