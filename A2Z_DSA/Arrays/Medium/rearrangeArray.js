function rearrangeArray(arr) {
    // my logic
    // let i = 0;
    // const res = [];
    // const pos = [];
    // const neg = [];
    // for (let elem of arr) {
    //     if (elem > 0) {
    //         pos.push(elem);
    //     } else {
    //         neg.push(elem);
    //     }
    // }
    // while(i < arr.length) {
    //     if (i % 2 == 0) {
    //         res.push(...pos.splice(0, 1))
    //     } else {
    //         res.push(...neg.splice(0,1))
    //     }
    //     i++;
    // }
    // console.log(res);

    // brute force - 1
    // const pos = [];
    // const neg = [];
    // for (let elem of arr) {
    //     if (elem > 0) {
    //         pos.push(elem);
    //     } else {
    //         neg.push(elem);
    //     }
    // }

    // for (let i = 0; i < arr.length / 2; i++) {
    //     arr[2 * i] = pos[i];
    //     arr[2 * i + 1] = neg[i];
    // }
    // console.log(arr);

    // optimal method
    // let posIndx = 0;
    // let negIdx = 1;
    // const res = new Array(arr.length).fill(0);
    // for (const elem of arr) {
    //     if (elem < 0) {
    //         res[negIdx] = elem;
    //         negIdx+=2;
    //     } else {
    //         res[posIndx] = elem;
    //         posIndx+=2;
    //     }
    // }
    // console.log(res);

    // brute force - 2
    const pos = [];
    const neg = [];
    for (let elem of arr) {
        if (elem > 0) {
            pos.push(elem);
        } else {
            neg.push(elem);
        }
    }

    if (pos.length < neg.length) {

        for (let i = 0; i < pos.length; i++) {
            arr[2 * i] = pos[i];
            arr[2 * i + 1] = neg[i];
        }

        let index = pos.length*2;
        for(let i = pos.length;i<neg.length;i++){
            
            arr[index] = neg[i];
            index++;
        }
    } else {
        for (let i = 0; i < neg.length; i++) {
            arr[2 * i] = pos[i];
            arr[2 * i + 1] = neg[i];
        }

        let index = neg.length*2;
        for(let i = neg.length;i<pos.length;i++){
            
            arr[index] = pos[i];
            index++;
        }
    }

    console.log(arr);
}

rearrangeArray([1,2,-4,-5]);
rearrangeArray([1,2,-4,-5,3,4]);