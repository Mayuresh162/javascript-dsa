function fib(n) {
  const temp = [0,1];
  for (let i=2; i<n; i++) {
    temp[i] = fib(n-1) + fib(n-2);
  }
  console.log(temp);
}

fib(5);
