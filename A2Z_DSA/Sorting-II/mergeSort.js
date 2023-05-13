function merge(arr1, arr2) {
    const temp = [];
    let left = 0;
    let right = 0;
    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] <= arr2[right]) {
            temp.push(arr1[left]);
            left++;
        } else {
            temp.push(arr2[right]);
            right++;
        }
    }

    while (left < arr1.length) {
        temp.push(arr1[left]);
        left++;
    }

    while(right < arr2.length) {
        temp.push(arr2[right]);
        right++;
    }

    return temp;
}

// function merge(arr1, arr2) {
//     const res = [];
//     while (arr1.length && arr2.length) {
//         if (arr1[0] <= arr2[0]) {
//             res.push(arr1.shift());
//         } else {
//             res.push(arr2.shift());
//         }
//     }
//     return [...res, ...arr1, ...arr2];
// }

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([3,2,8,5,1,4,23]));