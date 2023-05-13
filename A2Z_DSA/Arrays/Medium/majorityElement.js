function majorityElement(arr) {
    // my logic
    // const map = new Map();
    // for (let elem of arr) {
    //     if (map.has(elem)) {
    //         map.set(elem, map.get(elem) + 1)
    //     } else {
    //         map.set(elem, 1);
    //     }
    //     if (map.get(elem) > arr.length/2) {
    //         console.log(elem);
    //         return;
    //     }
    // }

    // brute force
    // for (let i=0; i<arr.length; i++) {
    //     let cnt=0;
    //     for (let j=0; j<arr.length; j++) {
    //         if (arr[i] == arr[j]) {
    //             cnt++;
    //         }
    //     }
    //     if (cnt > arr.length/2) {
    //         console.log(arr[i]);
    //         return;
    //     };
    // }

    // Moore's voting algorithm
    let cnt = 0;
    let elem = 0;
    for (let e1 of arr) {
        if (cnt == 0) {
            cnt = 1;
            elem = e1;
        } else if (elem == e1) {
            cnt++;
        } else {
            cnt--;
        }
    }

    let cnt1 = 0;
    for (let e2 of arr) {
        if (e2 == elem) {
            cnt1++;
        }
    }
    if (cnt1 > arr.length/2) {
        console.log(elem);
    }
}

majorityElement([2,2,1,1,1,2,2])
majorityElement([3,2,3])