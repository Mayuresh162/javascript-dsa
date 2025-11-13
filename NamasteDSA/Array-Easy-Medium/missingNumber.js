var missingNumber = function (nums) {
  // my solution
  const arr = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (!arr.has(i)) return i;
  }

  // optimised solution
  const n = nums.length;
  const sum1 = nums.reduce((acc, elem) => {
    acc += elem;
    return acc;
  }, 0);
  const sum2 = (n * (n + 1)) / 2;
  return sum2 - sum1;
};
