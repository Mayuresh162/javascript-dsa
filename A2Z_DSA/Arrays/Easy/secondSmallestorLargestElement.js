// function secondSmallest(arr) {
//     let small = Infinity;
//     let sSmall = Infinity;
//     if (arr.length < 2) return -1;
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] < small) {
//             sSmall = small;
//             small = arr[i];
//         } else if (arr[i] < sSmall && arr[i] != small) {
//             sSmall = arr[i];
//         }
//     }
//     console.log(sSmall);
// }

function secondLargest(arr) {
    let large = -Infinity;
    let sLarge = -Infinity;
    if (arr.length < 2) return -1;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > large) {
            sLarge = large;
            large = arr[i];
        } else if (arr[i] > sLarge && arr[i] != large) {
            sLarge = arr[i];
        }
    }
    console.log(sLarge);
}

// secondSmallest([1,2,4,7,7,5]);
secondLargest([1,2,4,7,7,5]);