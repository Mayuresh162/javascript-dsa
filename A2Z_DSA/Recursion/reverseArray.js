function reverseArray(arr) {
    // using extra array
    // const res = [];
    // for (let i=arr.length-1; i>=0; i--) {
    //     res.push(arr[i]);
    // }
    // console.log(res);

    // two pointer
    // let start = 0;
    // let end = arr.length -1;
    // while(start != end) {
    //     let temp = arr[start];
    //     arr[start] = arr[end];
    //     arr[end] = temp;
    //     start++;
    //     end--;
    // }
    // console.log(arr);

    // recursive way
    // function rev(res, start, end) {
    //     if (start > end) {
    //         console.log(res);
    //         return;
    //     };
    //     let temp = arr[start];
    //     arr[start] = arr[end];
    //     arr[end] = temp;
    //     rev(res, start+1, end-1);
    // }
    // rev(arr, 0, arr.length - 1);

    // predefined method
    // console.log(arr.reverse());

    // another recursive way
    function rev(i) {
        if (i >= arr.length/2) {
            console.log(arr);
            return;
        };
        let temp = arr[i];
        arr[i] = arr[arr.length - i -1];
        arr[arr.length - i -1] = temp;
        rev(i+1);
    }
    rev(0);
}

reverseArray([1, 2, 3, 4, 5])