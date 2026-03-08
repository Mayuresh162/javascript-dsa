function twoSum(arr, target) {
  // TC: O(n) SC: O(1)
  // brute force
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i + 1; j < arr.length - 1; j++) {
  //     if (arr[i] + arr[j] == target) {
  //       return [i, j];
  //     }
  //   }
  // }

  // TC: O(n) SC: O(n)
  // better approach
  // let map = {};
  // for (let i = 0; i < arr.length; i++) {
  //   map[arr[i]] = i;
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   let pair = target - arr[i];
  //   if (map[pair] && map[pair] != i) {
  //     return [i, map[pair]];
  //   }
  // }

  // TC: O(n) SC: O(n)
  // const map = new Map();
  // for (let i = 0; i < arr.length; i++) {
  //   let pair = target - arr[i];
  //   if (map.has(pair)) {
  //     return [map.get(pair), i];
  //   }
  //   map.set(arr[i], i);
  // }

  // optimise approach
  // TC: O(n) SC: O(1)
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let s = arr[i] + arr[j];
    if (s == target) {
      let l = arr.indexOf(arr[i]);
      let r = arr.indexOf(arr[j]);
      return [l, r];
    } else if (s > target) {
      j--;
    } else {
      i++;
    }
  }
}

// console.log(twoSum([2, 7, 11, 15], 22));
