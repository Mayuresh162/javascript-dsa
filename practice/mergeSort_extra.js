function merge(arr1, arr2){
    // add whatever parameters you deem necessary - good luck!
    let results = [];
      let i = 0;
      let j = 0;
    if(typeof arr1[0] === 'number' && typeof arr2[0] === 'number') {
          while(i<arr1.length && j<arr2.length) {
              if (arr2[j] > arr1[i]) {
                  results.push(arr1[i]);
                  i++;
              } else {
                  results.push(arr2[j]);
                  j++;
              }
          }
          
          while (i < arr1.length) {
            results.push(arr1[i]);
            i++;    
          }
          
          while (j < arr2.length) {
            results.push(arr2[j]);
            j++;
          }
      } else if (typeof arr1[0] === 'string' && typeof arr2[0] === 'string') {
          while(i<arr1.length && j<arr2.length) {
              if (arr2[j].charCodeAt(0) > arr1[i].charCodeAt(0)) {
                  results.push(arr1[i]);
                  i++;
              } else if(arr2[j].charCodeAt(0) === arr1[i].charCodeAt(0)) {
                 if (arr2[j].charCodeAt(1) > arr1[i].charCodeAt(1)) {
                     results.push(arr1[i]);
                      i++;
                 } else {
                     results.push(arr2[j]);
                      j++;
                 }
              } else {
                   results.push(arr2[j]);
                  j++;
              }
          }
          
          while (i < arr1.length) {
            results.push(arr1[i]);
            i++;    
          }
          
          while (j < arr2.length) {
            results.push(arr2[j]);
            j++;
          }
      } else {
          while(i<arr1.length && j<arr2.length) {
              if (arr2[j].age < arr1[i].age) {
                  results.push(arr1[i]);
                  i++;
              } else {
                  results.push(arr2[j]);
                  j++;
              }
          }
          
          while (i < arr1.length) {
            results.push(arr1[i]);
            i++;    
          }
          
          while (j < arr2.length) {
            results.push(arr2[j]);
            j++;
          }
      }
      return results;
  }
  
  function mergeSort(arr){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length <= 1) return arr;
    let mid  = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
mergeSort([1, 2, 3]); // [1, 2, 3]
mergeSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
mergeSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 
mergeSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

