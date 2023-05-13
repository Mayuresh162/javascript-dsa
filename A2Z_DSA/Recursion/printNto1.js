function printNto1(i, n) {
    // one way
    // if (i < 1) return;
    // console.log(i);
    // printNto1(i-1, n);

    //backtracking
    if (i > n) return;
    printNto1(i+1, n);
    console.log(i);
}

// printNto1(4, 4);
// backtracking
printNto1(1, 4);