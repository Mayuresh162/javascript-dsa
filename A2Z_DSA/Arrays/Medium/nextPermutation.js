function nextPermutation(arr) {
    // brute force
    // const result = [];

    // function permuteHelper(currentPerm, remaining) {
    //   if (remaining.length === 0) {
    //     result.push(currentPerm);
    //     return;
    //   }
  
    //   for (let i = 0; i < remaining.length; i++) {
    //     const newPerm = currentPerm.concat(remaining[i]);
    //     const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
    //     permuteHelper(newPerm, newRemaining);
    //   }
    // }
  
    // permuteHelper([], arr);
    // console.log(result);
    // const index = result.includes(arr);
    // if (index == -1) {
    //     console.log('not', result[0])
    // } else {
    //     console.log(result[index+1]);
    // }

    // optimal solution
    let idx = -1;
    for (let i=arr.length-2; i>=0; i--) {
        if (arr[i] < arr[i+1]) {
            idx = i;
            break;
        }
    }
    if (idx == -1) {
        arr.reverse();
        return arr;
    }

    for (let i=arr.length-1; i>idx; i--) {
        if (arr[i] > arr[idx]) {
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
            break;
        }
    }

    arr.splice(idx+1, arr.length-idx-1, ...arr.slice(idx+1).reverse());
    console.log(arr);
}

nextPermutation([1,2,3]);
nextPermutation([3,2,1]);