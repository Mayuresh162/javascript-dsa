const arr = [7, 4, 3, 5, 1, 2]; // TC: O(n^2), SC: O(1)

function insertionSort() {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let prev = i - 1;
        while (prev >= 0 && arr[prev] > current) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = current;
    }
    console.log(arr);
}

insertionSort()
