function flatten(oldArr){
    // add whatever parameters you deem necessary - good luck!
    var newArr = [];
    for(let el of oldArr){
          if(Array.isArray(el)){
                // newArr = newArr.concat(flatten(oldArr[i]))
                  newArr = [...newArr, ...flatten(el)];
          } else {
                newArr.push(el);
          }
    } 
    return newArr;
  }
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
