function print1toN(i, n) {
    // one way
    // if (i > n) return;
    // console.log(i);
    // print1toN(i+1, n);

    // backtracking
    if (i<1) return;
    print1toN(i-1, n);
    console.log(i);
}

// print1toN(1, 4)
// backtracking
print1toN(4, 4)
