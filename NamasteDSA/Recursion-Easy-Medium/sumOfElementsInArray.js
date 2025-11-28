// my  solution
function sum1(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] + sum1(arr.splice(1, arr.length - 1));
}

console.log(sum1([5, 3, 2, 0, 1]));

// another solution
const arr1 = [5, 3, 2, 0, 1];
function sum2(n) {
  if (n === 0) return arr1[0];
  return arr1[n] + sum2(n - 1);
}

console.log(sum2(arr1.length - 1));
