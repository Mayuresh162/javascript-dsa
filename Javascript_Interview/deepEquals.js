function deepEquals(val1, val2) {
    if (typeof val1 !== 'object' && typeof val2 !== 'object') {
        const isval1NaN = isNaN(val1) && typeof val1 === 'number';
        const isval2NaN = isNaN(val2) && typeof val2 === 'number';

        if (isval1NaN && isval2NaN) return true;

        return val1 === val2;
    }

    if (typeof val1 !== typeof val2) return false;

    if (val1 === null && val2 === null) return true;
    if (val1 === null || val2 === null) return false;
    if (val1 === val2) return true;

    if (Array.isArray(val1) && Array.isArray(val2)) {
        if (val1.length !== val2.length) return false;

        for (let i=0; i<val1.length; i++) {
            if (!deepEquals(val1[i], val2[i])) return false;
        }
        return true;
    }

    if (Array.isArray(val1) || Array.isArray(val2)) return false;

    const val1keys = Object.keys(val1)
    const val2keys = Object.keys(val2)

    if (val1keys.length !== val2keys.length) return false;
    if (!deepEquals(val1keys, val2keys)) return false;

    for (let i=0; i<val1keys.length; i++) {
        const key = val1keys[i];
        const val1Value = val1[key];
        const val2Value = val2[key];

        if (!deepEquals(val1Value, val2Value)) return false;
    }

    return true;
}


console.log(deepEquals(1,1))
console.log(deepEquals('a', 'a'))
console.log(deepEquals(NaN, NaN))
console.log(deepEquals([],[]))
console.log(deepEquals([1],[1]))
console.log(deepEquals([[1,2], [3,4]],[[1,2], [3,4]]));
console.log(deepEquals({}, {}));
console.log(deepEquals({a:1}, {a:1}));
console.log(deepEquals({a:1, obj: {b:2}}, {a:1, obj: {b:2}}));
console.log(deepEquals(null, null))
console.log(deepEquals(undefined, undefined))
const arr = new Array(100000).fill('a');
console.log(deepEquals(arr, arr));

console.log('\nFASLE:\n');

console.log(deepEquals(1,0))
console.log(deepEquals('a', 'b'))
console.log(deepEquals(NaN, 10))
console.log(deepEquals(NaN, 'NaN'))
console.log(deepEquals([1],[]))
console.log(deepEquals([10],[1]))
console.log(deepEquals([[1,2,3], [3,4]],[[1,2], [3,4]]));
console.log(deepEquals([[1,2], ['3',4]],[[1,2], [3,4]]));
console.log(deepEquals({}, {a:1}));
console.log(deepEquals({a:1}, {a:2}));
console.log(deepEquals({a:1, obj: {b:2, c:3}}, {a:1, obj: {b:2}}));
console.log(deepEquals([], {}));
const obj1 = {a: undefined, b: 2}
const obj2 = {b: 2, c: 3}
console.log(deepEquals(obj1, obj2));

