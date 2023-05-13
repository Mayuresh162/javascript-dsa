function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    if (!arr.length) {
        return 0;
    }
    let i = 0;
    let j = 1;
    while(j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1;
}