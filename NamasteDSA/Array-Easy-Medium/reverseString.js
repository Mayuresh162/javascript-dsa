var reverseString = function (s) {
  // one way
  // let j = s.length - 1;
  // for (let i=0; i<Math.floor(s.length/2); i++) {
  //     let temp = s[i];
  //     s[i] = s[j];
  //     s[j] = temp;
  //     j--;
  // }

  // second way
  // const j = s.length - 1;
  // for (let i=0; i<Math.floor(s.length/2); i++) {
  //     let temp = s[i];
  //     s[i] = s[j-i];
  //     s[j-i] = temp;
  // }

  // third way
  const j = s.length - 1;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[i], s[j - i]] = [s[j - i], s[i]];
  }
};
