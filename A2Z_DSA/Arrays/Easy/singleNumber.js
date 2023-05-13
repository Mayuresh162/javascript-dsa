function singleNumber(arr) {
    // my logic
    // const map = new Map();
    // for (let elem of arr) {
    //     if (map.has(elem)) {
    //         map.set(elem, map.get(elem) + 1)
    //     } else {
    //         map.set(elem, 1)
    //     }
    // }
    // for (let elem of map) {
    //     if (elem[1] == 1) {
    //         console.log(elem[0])
    //     }
    // }

    //brute force
    // for (let e1 of arr) {
    //     let cnt = 0;
    //     for (let e2 of arr) {
    //         if (e1 == e2) {
    //             cnt++
    //         }
    //     }
    //     if (cnt == 1) {
    //         console.log(e1);
    //     }
    // }

    //optimal approach
    let xor = 0;
    for (let e1 of arr) {
        xor ^= e1;
    }
    console.log(xor)
}

singleNumber([2,2,1])
singleNumber([4,1,2,1,2])