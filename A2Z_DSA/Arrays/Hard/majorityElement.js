function majorityElement(arr) {
    // brute force
    // const ans = [];

    // for (let e1 of arr) {
    //     if (!ans.length || ans[0] != e1) {
    //         let count = 0;
    //         for (let e2 of arr) {
    //             if (e2 == e1) {
    //                 count++;
    //             }
    //         }
    //         if (count > Math.floor(arr.length/3)) {
    //             ans.push(e1);
    //         }
    //     }
    //     if (ans.length == 2) break;
    // }
    // console.log(ans);

    // better approach
    // const ans = [];
    // const map = new Map();
    // const min = Math.floor(arr.length/3) + 1;

    // for (let elem of arr) {
    //     if (map.has(elem)) {
    //         map.set(elem, map.get(elem) + 1);
    //     } else {
    //         map.set(elem, 1);
    //     }

    //     if (map.get(elem) == min) {
    //         ans.push(elem);
    //     }
    //     if (ans.length == 2) break;
    // }

    // console.log(ans);

    // Optimal Approach (Extended Boyer Moore’s Voting Algorithm):
    let cnt1 = 0, cnt2 = 0; 
    let el1 = -Infinity; 
    let el2 = -Infinity; 

    for (let elem of arr) {
        if (cnt1 === 0 && el2 !== elem) {
            cnt1 = 1;
            el1 = elem;
        }
        else if (cnt2 === 0 && el1 !== elem) {
            cnt2 = 1;
            el2 = elem;
        }
        else if (elem === el1) cnt1++;
        else if (elem === el2) cnt2++;
        else {
            cnt1--;
            cnt2--;
        }
    }

    const ans = []; // list of answers

    cnt1 = 0;
    cnt2 = 0;
    for (let elem of arr) {
        if (elem === el1) cnt1++;
        if (elem === el2) cnt2++;
    }

    const mini = Math.floor(arr.length / 3) + 1;
    if (cnt1 >= mini) ans.push(el1);
    if (cnt2 >= mini) ans.push(el2);

    // ls.sort(); // TC --> O(2*log2) ~ O(1);

    console.log(ans);
}

majorityElement([1,2,2,3,2]);
majorityElement([11,33,33,11,33,11]);
