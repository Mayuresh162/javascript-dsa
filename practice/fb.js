function fb(n) {
    let n1 = 0, n2 = 1, sum;
    
    for (let i =1; i<=n; i++) {
        console.log(n2);
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    
}
console.log(fb(5));