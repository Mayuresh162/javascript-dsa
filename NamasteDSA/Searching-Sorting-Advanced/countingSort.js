function countSort(arr) { // TC: O(n+k) SC: O(k)
    const max = Math.max(...arr);
    const count = new Array(max+1).fill(0);
    for (let x of arr) {
        count[x]++
    }


    let idx = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[idx] = i;
            idx++;
            count[i]--;
        }
    }
    return arr;
}

console.log(countSort([4, 2, 5, 3, 3, 2, 1, 4, 0]));
