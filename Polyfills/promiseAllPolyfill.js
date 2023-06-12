const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1st Promise resolved!");
    }, 1000);
});

const p2 = Promise.resolve("2nd Promise resolved!");

const p3 = 3;

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let status = true;
        if (status) {
            resolve("4th Promise resolved!");
        } else {
            reject("4th Promise rejected!");
        }
    }, 2000);
});

Promise.customAll = function (promisesArray) {
    // 👇 return a new promise
    return new Promise((resolve, reject) => {
        const result = [];

        // 👇 to check how many promises are completed
        let completed = 0;

        // 👇 if passed as empty [] then return empty []
        if (promisesArray.length === 0) {
            resolve(result);
        }

        // 👇 execute each promise of promisesArray
        for (let i = 0; i < promisesArray.length; i++) {
            Promise.resolve(promisesArray[i])
                .then((response) => {
                    // 👇 if promise passes store its response and increment the count
                    result[i] = response;
                    completed++;

                    // 👇 if all the promises are completed,
                    //resolve and return the result array
                    if (completed === promisesArray.length) {
                        resolve(result);
                    }
                })
                .catch((error) => {
                    // 👇 if any promise fails, reject.
                    reject(error);
                });
        }
    });
};

Promise.customAll([p1, p2, p3, p4])
    .then((result) => {
        console.log("result customAll", result);
    })
    .catch((error) => {
        console.log("error customAll", error);
    });