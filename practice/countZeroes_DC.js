// function countZeroes(arr){
//     // add whatever parameters you deem necessary - good luck!!!
//     let count = 0;
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] === 0) {
//             count++;
//         }
//     }
//     return count;
// }

function firstZero(arr, low, high) 
{
	if (high >= low) 
    { 
        // Check if mid element is first 0 
        let mid = low + Math.floor((high - low)/2); 
        if (( mid == 0 || arr[mid-1] == 1) && arr[mid] == 0) 
            return mid; 
        if (arr[mid] == 1)  // If mid element is not 0 
            return firstZero(arr, (mid + 1), high); 
        else  // If mid element is 0, but not first 0 
            return firstZero(arr, low, (mid -1)); 
    } 
    return -1; 
}   
// A wrapper over recursive function firstZero() 
function countZeroes(arr) 
{ 
    // Find index of first zero in given array 
    let first = firstZero(arr, 0, arr.length - 1); 
    // If 0 is not present at all, return 0 
    if (first == -1) 
        return 0; 
    return (arr.length - first); 
}

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
