var moveZeroes = function (nums) {
  // for (let i=nums.length - 1; i>=0; i--) {
  //     if (nums[i] === 0) {
  //         nums.splice(i, 1);
  //         nums.push(0);
  //     }
  // }

  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  while (x < nums.length) {
    nums[x] = 0;
    x++;
  }
};
