function bubbleSort(arr){

    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (typeof arr[j] === 'number') {
                console.log('true');
                if (arr[j] > arr[j+1]) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    noSwaps = false;
                }
            } else if (typeof arr[j] === 'string') {
                if (arr[j].charCodeAt(0) > arr[j+1].charCodeAt(0)) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    noSwaps = false;
                }
            } else {
                if (arr[j+1].age - arr[j].age > 0) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    noSwaps = false;
                }
            }
        }
        if (noSwaps) break;
    }
    return arr;
}


bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
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
 
bubbleSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
