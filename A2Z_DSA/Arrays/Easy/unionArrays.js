// function unionArrays(a1, a2) {
//     const da1 = [];
//     const da2 = [];
//     const ca1a2 = [];
//     for (let e1 of a1) {
//         if (a2.indexOf(e1) === -1) {
//             da1.push(e1);
//         } else {
//             ca1a2.push(e1);
//         }
//     }
//     for (let e2 of a2) {
//         if (a1.indexOf(e2) === -1) {
//             da2.push(e2);
//         }
//     }
//     if (da1.length) {
//         const op1 = merge(ca1a2, da1);
//         if (da2.length) {
//             console.log(merge(op1, da2));
//             return;
//         }
//         console.log(op1);
//     }
// }

// function merge(arr1, arr2) {
//     const temp = [];
//     let left = 0;
//     let right = 0;
//     while (left < arr1.length && right < arr2.length) {
//         if (arr1[left] <= arr2[right]) {
//             temp.push(arr1[left]);
//             left++;
//         } else {
//             temp.push(arr2[right]);
//             right++;
//         }
//     }

//     while (left < arr1.length) {
//         temp.push(arr1[left]);
//         left++;
//     }

//     while(right < arr2.length) {
//         temp.push(arr2[right]);
//         right++;
//     }

//     return temp;
// }

// function unionArrays(a1, a2) {
//     const concatenatedArray = a1.concat(a2);
//     const uniqueArray = Array.from(new Set(concatenatedArray));
//     console.log(uniqueArray);
// }

function unionArrays(a1, a2) {
    const map = new Map();

    a1.forEach(element => {
        map.set(element, true);
    });

    a2.forEach(element => {
        if (!map.has(element)) {
            map.set(element, true);
        }
    });

    const res = Array.from(map.keys());
    console.log(res);
}



unionArrays([1,2,3,4,5], [2,3,4,4,5]);
unionArrays([1,2,3,4,5,6,7,8,9,10], [2,3,4,4,5,11,12]);