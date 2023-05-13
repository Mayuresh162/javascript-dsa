let arr = [2, 7, 6, 4, 78, 89];

// let second = -Infinity;
// let max = -Infinity;

// for (let i = 0;i<arr.length;i++){
//     if (arr[i]>max){
//         max = arr[i];
//     }
// }

// // Now find the second largest element
// for (let i = 0 ;i<arr.length;i++){
//     if (arr[i]>second && arr[i]<max){
//         second = arr[i];
//     }
// }

// console.log(second);

// function getSecondLargest(nums) {
//     var flarge = 0;
//     var slarge = 0;
//     for (var i = 0; i < nums.length; i++) { 
//             if (flarge < nums[i]) { //  flarge = 0, 2, 7, 7, 7, 78, 89
//                 slarge = flarge;    //  slarge = 0, 0, 2, 6, 6, 7, 78
//                 flarge = nums[i];   // nums[i] = 2, 7, 6, 4, 78, 89, end
//             } else if (nums[i] > slarge) { 
//                 slarge = nums[i]

//             }
//         }
//         return slarge; 
// }

// console.log(getSecondLargest(arr));

let secondlargest = Max(arr, 2);
let index = arr.indexOf(secondlargest);

console.log("Number:", secondlargest ,"at position", index);

function Max(arr, nth = 1, max = Infinity) {
  let large = -Infinity;
  for(let e of arr) {
    if(e > large && e < max ) {
      large = e;
    } else if (max == large) {
      nth++;
    }
  }
  if(nth==0) return max;
  return Max(arr, nth-1, large);
}