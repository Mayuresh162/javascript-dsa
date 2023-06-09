function someRecursive(nums, callback){
    // add whatever parameters you deem necessary - good luck!
      // console.log(nums, callback);
      if (nums.length === 0) return false;
      if (callback(nums[0])) {
          return true;
      }
      return someRecursive(nums.slice(1), callback)
  }

  // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false