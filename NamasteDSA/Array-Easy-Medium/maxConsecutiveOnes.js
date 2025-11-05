var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;
  for (let elem of nums) {
    count = elem === 1 ? ++count : 0;
    max = Math.max(max, count);
  }
  return max;
};
