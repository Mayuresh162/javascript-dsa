// function selectionSort(arr) {
//     for (var i=0; i<arr.length;i++) {
//         var min = i;
//         for (var j=i+1; j<arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if ( i !== min) {
//             var temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1];
    };

    for (var i=0; i<arr.length;i++) {
        var min = i;
        for (var j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if ( i !== min) {
            swap(arr, i, min)
        }
    }
    return arr;
}

selectionSort([34,22,10,19,17])