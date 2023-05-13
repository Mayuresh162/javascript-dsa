function printNameNtimes(i, n) {
    if (i > n) return;
    console.log('Mayuresh');
    printNameNtimes(i + 1, n);
}

printNameNtimes(1, 3);