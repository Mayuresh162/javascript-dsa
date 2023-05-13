function freqCounter(arr, target) {
    // one way
    // const obj = {};
    // for (i=0; i<arr.length; i++) {
    //     if (obj[arr[i]]) {
    //         obj[arr[i]]++;
    //     } else {
    //         obj[arr[i]] = 1;
    //     }
    // }
    // console.log(obj[target]);

    // another way
    const map = new Map();
    for (i=0; i<arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    console.log(map.get(target));
}

freqCounter([10,5,10,15,10,5], 10)