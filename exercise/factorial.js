//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
    while (num >= 0) {
        if (num === 0) return 1;
        return num * factorial(num-1);
    }
}