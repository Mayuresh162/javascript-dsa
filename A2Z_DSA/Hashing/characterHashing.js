function characterHashing(s, target) {
    //  one way
    // const obj = {};
    // for (i=0; i<s.length; i++) {
    //     if (obj[s[i]]) {
    //         obj[s[i]]++;
    //     } else {
    //         obj[s[i]] = 1;
    //     }
    // }
    // console.log(obj[target]);

    //  another way
    const map = new Map();
    for (i=0; i<s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    console.log(map.get(target));
}

characterHashing('abcdabehf', 'a')