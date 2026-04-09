function canFinish(pages, dailyLimit, D) {
    let days = 1;
    let curr = 0;

    for (let p of pages) {
        // If a single job exceeds daily limit → impossible
        if (p > dailyLimit) return false;

        if (curr + p <= dailyLimit) {
            curr += p;
        } else {
            days++;
            curr = p;
        }
    }

    return days <= D;
}

console.log(canFinish([100, 200, 300, 400, 500], 500, 2) // False
console.log(canFinish([100, 200, 300, 400, 500], 600, 2) // True
