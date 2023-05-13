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
    } else {
        while(i<arr1.length && j<arr2.length) {
            if (arr2[j].length > arr1[i].length) {
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

var arr1 = [1,3,4,5];
var arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]
 
arr1 // [1,3,4,5];
arr2 // [2,4,6,8];
 
var arr3 = [-2,-1,0,4,5,6];
var arr4 = [-3,-2,-1,2,3,5,7,8];
 
merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
 
var arr5 = [3,4,5]
var arr6 = [1,2]
 
merge(arr5,arr6) // [1,2,3,4,5]
 
var names = ["Bob", "Ethel", "Christine"]
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
 
function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}
 