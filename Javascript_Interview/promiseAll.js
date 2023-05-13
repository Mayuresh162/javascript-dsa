function promiseAll(promisesArr) {
    const result = [];
    let settledPromiseCounter = 0;
    return new Promise((resolve, reject) => {
        promisesArr.forEach((promise, i) => {
            promise.then(val => {
                result[i] = val;
                settledPromiseCounter++;
                if (settledPromiseCounter == promises.length) {
                    resolve(result);
                }
            }).catch(reject);
        });
    });
}

const slowPromise = new Promise((res) => {
    setTimeout(() => res('done'), 1000);
})

const promises = [
    Promise.resolve(2),
    Promise.resolve(5),
    slowPromise
    // Promise.reject('error'),
];



promiseAll(promises).then(console.log);