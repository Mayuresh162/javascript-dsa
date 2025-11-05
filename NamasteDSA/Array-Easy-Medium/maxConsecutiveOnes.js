var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = -Infinity;
  for (let elem of nums) {
    count = elem === 1 ? ++count : 0;
    max = Math.max(max, count);
  }
  return max;
};
