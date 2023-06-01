function mergeSortedArray(a1, a2) {
    //  my logic
    // a1.push(...a2);
    // a1.sort((a,b) => a-b);
    // console.log(a1);

    //  brute force
    // const a3 = new Array(a1.length + a2.length);
    // let l = 0;
    // let r = 0;
    // let idx = 0;

    // while(l < a1.length && r < a2.length) {
    //     if (a1[l] <= a2[r]) {
    //         a3[idx] = a1[l];
    //         l++;
    //         idx++;
    //     } else {
    //         a3[idx] = a2[r];
    //         r++;
    //         idx++;
    //     }
    // }

    // while(l < a1.length) {
    //     a3[idx++] = a1[l++];
    // }

    // while(r < a2.length) {
    //     a3[idx++] = a2[r++];
    // }

    // for (let i = 0; i < a1.length + a2.length; i++) {
    //     if (i < a1.length) a1[i] = a3[i];
    //     else a2[i - a1.length] = a3[i];
    // }

    // console.log(a3);

    //  optimal approach 1
    // let l = a1.length - 1;
    // let r = 0;

    // while (l >= 0 && r < a2.length) {
    //     if (a1[l] > a2[r]) {
    //         [a1[l], a2[r]] = [a2[r], a1[l]];
    //         l--;
    //         r++;
    //     } else {
    //         break;
    //     }
    // }

    // a1.sort((a, b) => a-b);
    // a2.sort((a, b) => a-b);
    // a1.push(...a2);
    // console.log(a1);

    //  optimal approach 2

    function swapIfGreater(a1, a2, ind1, ind2) {
        if (a1[ind1] > a2[ind2]) {
          [a1[ind1], a2[ind2]] = [a2[ind2], a1[ind1]];
        }
    }

    let gap = Math.ceil((a1.length + a2.length) / 2);
    while (gap > 0) {
        let l = 0;
        let r = l + gap;

        while (r < (a1.length + a2.length)) {
            if (l < a1.length && r >= a1.length) {
                swapIfGreater(a1, a2, l, r - a1.length);
            } else if (l >= a1.length) {
                swapIfGreater(a2, a2, l - a1.length, r - a1.length);
            } else {
                swapIfGreater(a1, a1, l, r);
            }
            l++;
            r++;
        }

        if (gap == 1) break;

        gap = Math.ceil(gap / 2);
    }

    a1.sort((a, b) => a-b);
    a2.sort((a, b) => a-b);
    a1.push(...a2);
    console.log(a1);

}

mergeSortedArray([1 ,4 ,8 ,10], [2 ,3 ,9])