function fb(n) {
   const temp = [0,1];
   for (let i=2; i<n; i++) {
       temp[i] = temp[i-1] + temp[i-2];
   }
   console.log(temp);
}

fb(7);