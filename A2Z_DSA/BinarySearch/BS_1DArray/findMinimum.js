function findMinimum(arr) {
    // my logic
    // console.log(Math.min(...arr));

    //  brute force
    // let min = Infinity;
    // for (let elem of arr) {
    //     min = Math.min(elem, min);
    // }
    // console.log(min);

    // optial approach (binary search)
    if(arr.length === 1){
        console.log(arr[0]);
    }
    
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
    
    console.log(arr[low]);
}

findMinimum([4,5,6,7,0,1,2]);
findMinimum([3,4,5,1,2]);

