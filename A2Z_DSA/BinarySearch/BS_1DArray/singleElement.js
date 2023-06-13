function singleElement(arr) {
    // my logic
    // const cache = {};
    // for (let elem of arr) {
    //     if (cache[elem]) {
    //         cache[elem]++;
    //     } else {
    //         cache[elem] = 1;
    //     }
    // }
    // Object.entries(cache).filter(item => {
    //     if (item[1] == 1) {
    //         console.log(+item[0]);
    //     }
    // })

    // brute force
    // if (arr.length == 1) {
    //     console.log(arr[0]);
    //     return;
    // }
    // for (let i=0; i<arr.length; i++) {
    //     if (i == 0) {
    //         if (arr[i] != arr[i+1]) {
    //             console.log(arr[i]);
    //             return;
    //         }
    //     } else if (i == arr.length-1) {
    //         if (arr[i] != arr[i-1]) {
    //             console.log(arr[i]);
    //             return;
    //         }
    //     } else {
    //         if (arr[i] != arr[i+1] && arr[i] != arr[i-1]) {
    //             console.log(arr[i]);
    //             return;
    //         }
    //     }
    // }

    // optimal solution (binarys search)

    if (arr.length == 1) {
        console.log(arr[0]);
        return;
    }
    if (arr[0] != arr[1]) {
        console.log(arr[0]);
        return;
    }
    if (arr[arr.length - 1] != arr[arr.length - 2]) {
        console.log(arr[arr.length-1]);
        return;
    }

    let low = 1;
    let high = arr.length - 2;

    while(low<=high) {
        const mid = (low+high) >> 1;

        if (arr[mid] != arr[mid+1] && arr[mid] != arr[mid-1]) {
            console.log(arr[mid]);
            return;
        }
        if ((mid % 2 == 1 && arr[mid-1] == arr[mid]) || (mid % 2 == 0 && arr[mid+1] == arr[mid])) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

singleElement([1,1,2,3,3,4,4,8,8]) // 2
singleElement([3,3,7,7,10,11,11]) // 10