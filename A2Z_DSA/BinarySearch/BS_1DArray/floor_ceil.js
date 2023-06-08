// floor -> largest no. in array <= x
// ceil -> smallest no. in array >= x

function findFloorCeil(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let floor = -1;
    let ceil = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            floor = arr[mid];
            ceil = arr[mid];
            break;
        } else if (arr[mid] < x) {
            floor = arr[mid];
            low = mid + 1;
        } else {
            ceil = arr[mid];
            high = mid - 1;
        }
    }

    console.log(floor, ceil);
}

findFloorCeil([10, 20, 30, 40, 50], 25);