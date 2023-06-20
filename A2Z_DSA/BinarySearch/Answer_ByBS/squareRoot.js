function squareRoot(x) {
    // my logic
    // console.log(Math.floor(Math.sqrt(x)));

    // binary search one way
    // let low = 1;
    // let high = x;
    // let eps = 0.0001;

    // let sqrt = (low + high) / 2;

    // while (Math.abs(sqrt * sqrt - x) > eps) {
    //     if (sqrt * sqrt > x) {
    //         high = sqrt;
    //     } else {
    //         low = sqrt;
    //     }
    //     sqrt = (low + high) / 2;
    // }

    // console.log(Math.round(sqrt));

    //  binary search another way
    let low = 1;
    let high = x;
    let eps = Math.exp(-6);

    while ((high - low) > eps) {
        let mid = (low + high) / 2;
        if (mid * mid < x) {
            low = mid;
        } else {
            high = mid;
        }
    }
    console.log(Math.floor(high));
}


squareRoot(5);
squareRoot(4);
squareRoot(9);