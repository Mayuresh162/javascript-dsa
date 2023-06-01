function repeatingAndMissingNumbers(arr) {
    //  my logic
    // let res = 0;
    // let sum = 0;
    // const cache = new Map();

    // for (let elem of arr) {
    //     if (cache.has(elem)) {
    //         cache.set(elem, cache.get(elem) + 1);
    //     } else {
    //         cache.set(elem, 1);
    //     }
    //     if (cache.get(elem) > 1) {
    //         res = elem;
    //     }
    // }

    // const s1 = (arr.length * (arr.length+1)) / 2;
    // for (let elem of cache.keys()) {
    //     sum += elem;
    // }
   
    // console.log(s1 - sum, res);

    //  brute force
    // let rep = -1;
    // let miss = -1;

    // for (let i=1; i<=arr.length; i++) {
    //     let count = 0;
    //     for (let j=0; j<arr.length; j++) {
    //         if (arr[j] == i) count++;
    //     }

    //     if (count == 2) rep = i;
    //     else if (count == 0) miss= i;

    //     if (rep != -1 && miss != -1) break;
    // }

    // console.log(rep, miss);

    // better approach (hashing)
    // const hash = new Array(arr.length + 1).fill(0);

    // for (let i = 0; i < arr.length; i++) {
    //     hash[arr[i]]++;
    // }

    // let rep = -1;
    // let miss = -1;
    // for (let i=1; i<=arr.length; i++) {
    //     if (hash[i] == 2) rep = i;
    //     else if (hash[i] == 0) miss = i;

    //     if (rep != -1 && miss != -1) break;
    // }

    // console.log(rep, miss);

    // optimal approach 1 (using maths)
    // const sn = (arr.length * (arr.length + 1)) / 2;
    // const s2n = ((arr.length * (arr.length + 1) * (2 * arr.length + 1))) / 6;

    // let s1 = 0; 
    // let s2 = 0;
    // for (let elem of arr) {
    //     s1 += elem;
    //     s2 += elem * elem;
    // }

    // const v1 = s1 - sn;
    // let v2 = s2 - s2n;
    // v2 = v2/v1;
    // const rep = (v1 + v2) / 2;
    // const miss = rep - v1;
    // console.log(rep, miss);

    // optimal approach 2 (using xor)
    let xor = 0;

    for (let i=0; i<arr.length; i++) {
        xor = xor ^ arr[i];
        xor = xor ^ (i+1);
    }

    const num = (xor & ~(xor-1));

    let x = 0;
    let y = 0;

    for (let elem of arr) {
        if ((elem & num) != 0) {
            y ^= elem;
        } else {
            x ^= elem;
        }
    }

    for (let i= 1; i<=arr.length; i++) {
        if ((i & num) != 0) {
            y ^= i;
        } else {
            x ^= i;
        }
    }

    let cnt = 0;
    for (let elem of arr) {
        if (elem == x) cnt++;
    }

    if (cnt == 2) {
        console.log(x, y);
    } else {
        console.log(y, x);
    }
}

repeatingAndMissingNumbers([3,1,2,5,3]);
repeatingAndMissingNumbers([3,1,2,5,4,6,7,5]);