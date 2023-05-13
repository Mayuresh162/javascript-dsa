function averagePair(arr, avg) {
    // add whatever parameters you deem necessary - good luck!
    if (!arr.length) {
        return false;
    }
    let i=0;
    let j = arr.length - 1;
    while (i < j) {
        let calcAvg = (arr[i] + arr[j]) / 2;
        if (calcAvg === avg) {
            return true;
        } else if (calcAvg < avg) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}
  