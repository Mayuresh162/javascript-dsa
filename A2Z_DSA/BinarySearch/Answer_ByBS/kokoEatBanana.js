function kokoEatBanana(pile, h) {
    // my logic and brute force
    // const l = Math.max(...pile);
    // for (let i=1; i<=l; i++) {
    //     let sum = 0;
    //     for (let j=0; j<pile.length; j++) {
    //         sum += Math.ceil(pile[j]/i);
    //     }
    //     if (sum <= h) {
    //         console.log(i);
    //         return;
    //     }
    // }

    // optimal approach (binary search)
    let low = 1;
    let high = Math.max(...pile);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let sum = 0;
        for (let j=0; j<pile.length; j++) {
            sum += Math.ceil(pile[j]/mid);
        }
        if (sum <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    console.log(low);
    
}

kokoEatBanana([7, 15, 6, 3], 8);
kokoEatBanana([25, 12, 8, 14, 19], 5);