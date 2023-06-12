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

Promise.customRace = function (promisesArray) {
    // 👇 return a new promise
    return new Promise((resolve, reject) => {
        // 👇 execute each promise of promisesArray
        for (const elem of promisesArray) {
            Promise.resolve(elem).then(
                // 👇 return first resolved or rejected promise
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        }
    });
};

Promise.customRace([p1, p2, p3, p4])
    .then((result) => {
        console.log("result customRace", result); // 2nd Promise rejected!
    })
    .catch((error) => {
        console.log("error customRace", error);
    });