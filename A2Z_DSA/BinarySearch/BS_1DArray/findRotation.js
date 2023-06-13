function findRotation(arr) {
    // my logic
    // console.log(arr.indexOf(Math.min(...arr)));

    // brute force
    // let min = Infinity;
    // for (let elem of arr) {
    //     min = Math.min(elem, min);
    // }
    // console.log(arr.indexOf(min));

    //  optimal solution (binary search)
    // if(arr.length === 1){
    //     console.log(0);
    // }
    
    let low = 0;
    let high = arr.length - 1;
    
    while(low < high){
        const mid = low + Math.floor((high - low) / 2);
        
        if(arr[mid] > arr[high]){
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    console.log(low);
}

findRotation([3,4,5,1,2]) // 3
findRotation([1,2,4,5,7])  // 0