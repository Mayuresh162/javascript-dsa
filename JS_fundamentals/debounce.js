function debounce(fn, delay) {
    // Your implementation
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

function getData() {
    console.log("Fetching data...")
}

//For the purpose of user debugging.
//pass appropriate input in below function call
debounce(getData, 300);

module.exports = debounce
