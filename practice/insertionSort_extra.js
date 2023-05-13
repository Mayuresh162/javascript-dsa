function insertionSort(arr){
    // add whatever parameters you deem necessary - good luck! descending order
    for (var i=1; i<arr.length; i++) {
        var currentVal = arr[i];
        var j = i;
        if (typeof arr[j] === 'number') {
            while (j > 0 && arr[j - 1] > currentVal) {
                arr[j] = arr[j-1];
                j--;
            }
        } else if (typeof arr[j] === 'string') {
            while (j > 0 && arr[j - 1].charCodeAt(0) > currentVal.charCodeAt(0)) {
                arr[j] = arr[j-1];
                j--;
            }
        } else {
           while (j > 0 && arr[j - 1].age < currentVal.age) {
                arr[j] = arr[j-1];
                j--;
            }
        }
        arr[j] = currentVal;
    }
    return arr;
}

insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
insertionSort([1, 2, 3]); // [1, 2, 3]
insertionSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
insertionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
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
 
insertionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order