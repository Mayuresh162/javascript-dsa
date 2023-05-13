function power(base, exp){
    while (exp >= 0) {
        if (exp === 0) return 1;
        return base * power(base, exp-1);
    }
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16