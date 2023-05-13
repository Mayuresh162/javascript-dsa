function cartesianProduct(leftArr, rightArr) {
    const res = [];
    for (let i=0; i<leftArr.length; i++) {
        for (let j=0; j<rightArr.length; j++) {
            res.push([leftArr[i], rightArr[j]]);
        }
    }
    return res;
}


console.log(cartesianProduct([1,2], [3,4])); //[ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ]
console.log(cartesianProduct([1,2], [3,4,5])); //[ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]



//Big O - O(mn);