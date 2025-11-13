var singleNumber = function (nums) {
  let xor = 0;
  for (let elem of nums) {
    xor ^= elem;
  }
  return xor;
};
