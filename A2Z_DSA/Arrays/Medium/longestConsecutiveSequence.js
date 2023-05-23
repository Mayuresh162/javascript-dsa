function longestConsecutiveSequence(arr) {
    // brute force
    // let count=1;
    // let temp=1;
    // let prev = arr[0];
    // arr.sort((a,b) => a-b);
    // for (let elem of arr) {
    //     if (elem == prev+1) {
    //         count++;
    //     } else if (elem != prev) {
    //         count = 1;
    //     }
    //     prev = elem;
    //     temp = Math.max(temp, count);
    // }
    // console.log(temp);

    // optimal approach
    const hashSet = new Set();

    for (let elem of arr) {
        hashSet.add(elem);
    }

    let lStreak = 0;

    for(let elem of arr) {
        if (!hashSet.has(elem-1)) {
            let curr = elem;
            let cStreak = 1;

            while(hashSet.has(curr+1)) {
                curr += 1;
                cStreak += 1;
            }

            lStreak = Math.max(lStreak, cStreak);
        }
    }

    console.log(lStreak);
}

longestConsecutiveSequence([100, 200, 1, 3, 2, 4]);
longestConsecutiveSequence([3, 8, 5, 7, 6]);