function flatten(arr) {
    let res = [];
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            res = [...res, ...elem]
        } else {
            res.push(elem);
        }
    }
    return res;
}

function promiseAll(promisesArr) {
    const result = [];
    let settledPromiseCounter = 0;
    return new Promise((resolve, reject) => {
        promisesArr.forEach((promise, i) => {
            result[i] = promise;
            settledPromiseCounter++;
            if (settledPromiseCounter == promisesArr.length) {
                resolve(result);
            }
        });
    });
}

const promises = [1, 2, [3, 4]];

promiseAll(flatten(promises)).then(console.log);

