var nextGreaterElement = function (nums1, nums2) {
  // brute force
  //   const res = [];
  //   for (let elem of nums1) {
  //     const idx = nums2.indexOf(elem);
  //     let next = -1;
  //     for (let j = idx + 1; j < nums2.length; j++) {
  //       if (nums2[j] > elem) {
  //         next = nums2[j];
  //         break;
  //       }
  //     }
  //     res.push(next);
  //   }
  //   // console.log(res);
  //   return res;

  // optimal approach
  const stack = [];
  const map = new Map();

  for (let num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      const top = stack.pop();
      map.set(top, num);
    }
    stack.push(num);
  }

  while (stack.length) {
    map.set(stack.pop(), -1);
  }

  return nums1.map((num) => map.get(num));
};
