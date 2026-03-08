var lengthOfLongestSubstring = function (s) {
  // TC: O(n) SC: O(m) => number of characeters (english letters, numbers, symbols, spaces)
  //   const obj = {};
  //   let i = 0;
  //   let max = 0;
  //   for (let j = 0; j < s.length; j++) {
  //     if (obj[s[j]] != undefined && obj[s[j]] >= i) {
  //       i = obj[s[j]] + 1;
  //     }
  //     obj[s[j]] = j;
  //     max = Math.max(max, j - i + 1);
  //   }
  //   return max;

  //   const result = [];
  //   let length = 0;

  //   for (let r = 0; r < s.length; r++) {
  //     if (result.includes(s[r])) {
  //       const index = result.indexOf(s[r]);
  //       result.splice(0, index + 1);
  //     }
  //     result.push(s[r]);
  //     length = Math.max(length, result.length);
  //   }

  //   return length;

  let str = "";
  let length = 0;

  for (let r = 0; r < s.length; r++) {
    if (str.includes(s[r])) {
      const idx = str.indexOf(s[r]);
      str = str.substring(idx + 1);
    }
    str += s[r];
    length = Math.max(length, str.length);
  }

  return length;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
