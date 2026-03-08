var productExceptSelf = function(nums) {
    // my solution (memory exceeded) TC: O(n*2)
    // const answer = [];
    // let prod = 1;
    // for (let i=0; i < nums.length; i++) {
    //     for (let j=0; j < nums.length; j++) {
    //         if (i != j) {
    //             prod *= nums[j]
    //         }
    //     }
    //     prod == 0 ? Math.abs(prod): prod
    //     answer.push((prod));
    //     prod = 1;
    // }
    // return answer;

    // brute force  TC: O(n*2)
    // let n = nums.length;
    // let result = new Array(n);
  
    // for (let i = 0; i < n; i++) {
    //   let product = 1;
  
    //   for (let j = 0; j < n; j++) {
    //     if (i !== j) {
    //       product *= nums[j];
    //     }
    //   }
  
    //   result[i] = product;
    // }
  
    // return result;

    // better approach TC: O(n), SC: O(n)
    const n = nums.length;
  
    const left = new Array(n);
    const right = new Array(n);
    const result = new Array(n);
  
    left[0] = 1;
  
    for (let i = 1; i < n; i++) {
      left[i] = left[i - 1] * nums[i - 1];
    }
  
    right[n - 1] = 1;
  
    for (let i = n - 2; i >= 0; i--) {
      right[i] = right[i + 1] * nums[i + 1];
    }
  
    for (let i = 0; i < n; i++) {
      result[i] = left[i] * right[i];
    }
  
    return result;

    // optimal solution TC: O(n), SC: O(1) extra
    const n = nums.length;
    const result = new Array(n);
  
    result[0] = 1;
  
    // left products
    for (let i = 1; i < n; i++) {
      result[i] = result[i - 1] * nums[i - 1];
    }
  
    let right = 1;
  
    // multiply right products
    for (let i = n - 1; i >= 0; i--) {
      result[i] = result[i] * right;
      right *= nums[i];
    }
  
    return result;
};
