const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])


function collectStrings(oldObj) {
    var newArr = [];
    for (var key in oldObj) {
        if (typeof oldObj[key] === 'object'){
            newArr = newArr.concat(collectStrings(oldObj[key]));
        } else if (typeof oldObj[key] === 'string'){
            newArr.push(oldObj[key]);
        }
    }
    return newArr;
}