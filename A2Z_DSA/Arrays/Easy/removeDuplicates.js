function removeDuplicates(arr) {
    // one way
    // console.log(new Set([...arr]).size);

    // two pointer
    // let i = 0;
    // for (let j = 1; j < arr.length; j++) {
    //     if (arr[i] != arr[j]) {
    //         i++;
    //         arr[i] = arr[j];
    //     }
    // }
    // console.log(i + 1);

    // another way
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
}

removeDuplicates([1,1,1,2,2,3,3,3,3,4,4]);
removeDuplicates([1,1,2]);