function throttle(func, delay) {
  // Write your code here
  let lastCall = 0;
  let result;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      result = func.apply(this, args);
      return result;
    }
    return result;
  }
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);
module.exports = throttle;
