function setarrZeroes(arr) {
    // brute force
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[0].length; j++) {
    //         if (arr[i][j] === 0) {
    //             markRow(arr, arr.length, arr[0].length, i);
    //             markCol(arr, arr.length, arr[0].length, j);
    //         }
    //     }
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[0].length; j++) {
    //         if (arr[i][j] === -1) {
    //             arr[i][j] = 0;
    //         }
    //     }
    // }
    // console.log(arr);

    // better approach
    // const arr1 = new Array(arr.length);
    // const arr2 = new Array(arr[0].length);

    // for (let i=0; i<arr.length; i++) {
    //     for (let j=0; j<arr[0].length; j++) {
    //         if (arr[i][j] == 0) {
    //             arr1[i] = 1;
    //             arr2[j] = 1;
    //         }
    //     }
    // }

    // for (let i=0; i<arr.length; i++) {
    //     for (let j=0; j<arr[0].length; j++) {
    //         if (arr1[i] == 1 || arr2[j] == 1) {
    //             arr[i][j] = 0
    //         }
    //     }
    // }

    // console.log(arr);

    // optimal approach
    let col0 = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                arr[i][0] = 0;

                if (j !== 0) arr[0][j] = 0;
                else col0 = 0;
            }
        }
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[0].length; j++) {
            if (arr[i][j] !== 0) {
                if (arr[i][0] === 0 || arr[0][j] === 0) {
                    arr[i][j] = 0;
                }
            }
        }
    }

    if (arr[0][0] === 0) {
        for (let j = 0; j < arr[0].length; j++) {
            arr[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < arr.length; i++) {
            arr[i][0] = 0;
        }
    }

    console.log(arr);
}

// brute force
// function markRow(arr, n, m, i) {
//     for (let j = 0; j < m; j++) {
//       if (arr[i][j] !== 0) {
//         arr[i][j] = -1;
//       }
//     }
// }
  
// function markCol(arr, n, m, j) {
//     for (let i = 0; i < n; i++) {
//         if (arr[i][j] !== 0) {
//         arr[i][j] = -1;
//         }
//     }
// }

setarrZeroes([[1,1,1],[1,0,1],[1,1,1]]);
// setarrZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);