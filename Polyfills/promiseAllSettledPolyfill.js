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

Promise.customAllSettled = function (promisesArray) {
    // 👇 return a new promise
    const transformedpromises = promisesArray.map((promise) => {
        return Promise.resolve(promise)
          .then((value) => {
            return {
              status: "fulfilled",
              value,
            };
          })
          .catch((reason) => {
            return {
              status: "rejected",
              reason,
            };
          });
      });
      return Promise.all(transformedpromises);
};

Promise.customAllSettled([p1, p2, p3, p4]).then((result) => {
    console.log("result custom", result);
});

// Using Promise.allSettled() with await
(async () => {
    const result = await Promise.customAllSettled([p1, p2, p3, p4]);
    console.log("result custom", result);
})();