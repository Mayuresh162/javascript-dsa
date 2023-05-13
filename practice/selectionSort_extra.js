function selectionSort(arr){
    // add whatever parameters you deem necessary - good luck!
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (var i=0; i<arr.length;i++) {
        var min = i;
        for (var j=i+1; j<arr.length; j++) {
            if (typeof arr[j] === 'number') {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            } else if (typeof arr[j] === 'string') {
                if (arr[j].charCodeAt(0) < arr[min].charCodeAt(0)) {
                    min = j;
                }
            } else {
                if (arr[j].age - arr[min].age > 0) {
                    min = j;
                }
            }
        }
        if ( i !== min) {
            swap(arr, i, min)
        }
    }
    return arr;
}

selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
selectionSort([1, 2, 3]); // [1, 2, 3]
selectionSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
selectionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
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
 
selectionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
