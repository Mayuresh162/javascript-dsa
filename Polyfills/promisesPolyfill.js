function promisePolyfillCode() {

    function customPromise(executer) {
        let OnResolve,
            OnReject,
            isFulfilled = false,
            isRejected = false,
            isCalled = false,
            value;

        function resolve(val) {
            console.log("in resolve");
            isFulfilled = true;
            value = val;
            if (typeof OnResolve === "function") {
                OnResolve(value);
                isCalled = true;
            }
        }

        function reject(val) {
            console.log("in reject");
            isRejected = true;
            value = val;
            if (typeof OnReject === "function") {
                OnReject(value);
                isCalled = true;
            }
        }

        this.then = function (callback) {
            console.log("in then");
            OnResolve = callback;

            if (isFulfilled && !isCalled) {
                isCalled = true;
                OnResolve(value);
            }
            return this;
        };

        this.catch = function (callback) {
            console.log("in catch");
            OnReject = callback;

            if (isRejected && !isCalled) {
                isCalled = true;
                OnReject(value);
            }
            return this;
        };

        try {
            executer(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    const executor = (resolve, reject) => {
        console.log("generating number...");
        setTimeout(() => {
            let number = Math.floor(Math.random() * 10);
            if (number >= 5) {
                resolve(`number generated successfully ${number}.`);
            } else {
                reject("problem in generating number!");
            }
        }, 1000);
    };

    const generateNumber = new customPromise(executor);

    generateNumber.then((result) => {
        console.log(result); // number generated successfully 6.
    });

    generateNumber.catch((error) => {
        console.log(error); // problem in generating number!
    });
}

promisePolyfillCode();