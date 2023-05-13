function findRotatedIndex(arr, val){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length <= 1) return arr;
    let mid  = Math.floor(arr.length-1/2)
    return merge(arr.slice(0, mid), arr.slice(mid), val);
}   
  
function merge(arr1, arr2, val) {
    if (arr1.includes(val)) {
        return arr1.indexOf(val);
    } else if (arr2.includes(val)) {
        return arr2.indexOf(val);
    } else {
        return -1;
    }
}


findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
