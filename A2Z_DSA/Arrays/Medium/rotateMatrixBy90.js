function rotateMatrixBy90(arr) {
    // brute force
    // const res = [...Array(arr.length)].map(e => Array(arr.length))
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         res[j][arr.length - i - 1] = arr[i][j];
    //     }
    // }
    // console.log(res);

    // optimize approach (trasnposing the matrix)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr[0].length; j++) {
            let temp = 0;
            temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length / 2; j++) {
            let temp = 0;
            temp = arr[i][j];
            arr[i][j] = arr[i][arr.length - 1 - j];
            arr[i][arr.length - 1 - j] = temp;
        }
    }
    console.log(arr);
}

rotateMatrixBy90([[1,2,3],[4,5,6],[7,8,9]]);