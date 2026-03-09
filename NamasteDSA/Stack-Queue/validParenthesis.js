function isValid(s) {
  // brute force
  //   while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
  //     s = s.replace("()", "");
  //     s = s.replace("{}", "");
  //     s = s.replace("[]", "");
  //   }

  //   return s.length === 0;

  //   optimal approach
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];

  for (let elem of s) {
    if (map[elem]) {
      const top = stack.pop();
      if (top != map[elem]) {
        return false;
      }
    } else {
      stack.push(elem);
    }
  }
  return stack.length === 0;
}
