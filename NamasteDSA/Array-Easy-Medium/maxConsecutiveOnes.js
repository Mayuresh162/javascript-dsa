var findMaxConsecutiveOnes = function (nums) {
  // one way
  // let count = 0;
  // let max = 0;
  // for (let elem of nums) {
  //   count = elem === 1 ? ++count : 0;
  //   max = Math.max(max, count);
  // }
  // return max;

  // other way
  // let curr = 0;
  // let res = 0;
  // for (let i of nums) {
  //   if (i === 0) {
  //     curr = 0;
  //   } else {
  //     curr++;
  //     res = Math.max(curr, res);
  //   }
  // }
  // return res;

  // other way
  let currCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++){
      if (nums[i] === 1){
          currCount++;
      } else {
          maxCount = Math.max(currCount, maxCount);
          currCount = 0;
      }
  }
  return Math.max(currCount, maxCount);
};
