const arr1 = [5, 3, 2, 0, 1];

// sum of odd numbers in array
function sum3(n) {
  const isOdd = arr1[n] % 2 != 0;
  const elem = isOdd ? arr1[n] : 0;
  if (n === 0) return elem;
  return elem + sum3(n - 1);
}

console.log(sum3(arr1.length - 1));
