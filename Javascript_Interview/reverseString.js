// const orgStr = "the sky is blue";
// const s = orgStr.split(" ");
// const res = [];
// for (let i = s.length - 1; i >= 0; i--) {
//   res.push(s[i]);
// }
// const resStr = res.join(" ");
// console.log(orgStr, resStr);

function reverseWordsInPlace(str) {
  // Convert string to array (simulate in-place)
  const arr = str.split("");

  // Helper to reverse part of array
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  const n = arr.length;

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse each word in the reversed array
  let start = 0;
  for (let end = 0; end <= n; end++) {
    if (end === n || arr[end] === " ") {
      reverse(start, end - 1);
      start = end + 1;
    }
  }

  // Return the modified array joined back into a string
  return arr.join("");
}

const input = "the sky is blue";
const output = reverseWordsInPlace(input);
console.log(output); // "blue is sky the"

// let res = "";
// for (let i = input.length - 1; i >= 0; i--) {
//   res += input[i];
// }
// console.log(res);
