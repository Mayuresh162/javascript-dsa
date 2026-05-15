function countStableSort(arr) { // TC: O(n+k) SC: O(k)
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
  
    for (let x of arr) {
        count[x]++
    }
  
    for (let i = 1; i < count.length; i++) {
        count[i] = count[i] + count[i-1];
    }

    const sortedArr = new Array(arr.length);
    for (let i = arr.length-1; i>=0; i--) {
        const curr = arr[i];
        const x = count[curr];
        sortedArr[x-1] = curr;
        count[curr]--;
    }
    return sortedArr;
}

console.log(countStableSort([4, 2, 5, 3, 3, 2, 1, 4, 0]));
