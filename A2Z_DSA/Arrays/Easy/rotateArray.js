function rotateArrayLeft(arr, k) {
    // const res = [];
    // if (k % arr.length == 0) {
    //     console.log(arr);
    //     return;
    // }
    // for (let i=0; i<k; i++) {
    //     res[i] = arr[i];
    // }
    // for(let i=k; i<arr.length; i++) {
    //     arr[i-k] = arr[i];
    // }
    // for (let i=arr.length-k; i<arr.length; i++) {
    //     arr[i] = res[i-(arr.length-k)];
    // }
    // console.log(arr);
    let d = k % arr.length;
    reverseLeft(arr, 0, d - 1);

    reverseLeft(arr, d, arr.length - 1);

    reverseLeft(arr, 0, arr.length - 1);
    console.log(arr);
}

function reverseLeft(arr, start, end){
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function reverseRight(arr, start, end){
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateArrayRight(arr, k) {
    // k %= arr.length;
    // arr.unshift(...arr.splice(arr.length - k));
    // console.log(arr);

    // one way
    // k = k % arr.length;
    
    // reverseRight(arr, 0, arr.length - 1);
    
    // reverseRight(arr, 0, k-1); 

    // reverseRight(arr, k, arr.length-1);

    // console.log(arr);

    // another way
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     arr[i + k] = arr[i];
    // }
    
    // for (let j = k - 1; j >= 0; j--) {
    //     arr[j] = arr.pop();
    // }
    // console.log(arr);

    // another way
    console.log(arr.unshift(...arr.splice(-k % arr.length)));
}

// rotateArrayLeft([1,2,3,4,5,6,7], 3)
rotateArrayRight([1,2,3,4,5,6,7], 3)
rotateArrayRight([-1,-100,3,99], 2)