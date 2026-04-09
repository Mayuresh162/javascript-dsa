function canTransform(s1, s2) {
    // const map = new Map();
    // for (let el of s2) {
    //   const ch = el.toLowerCase();
    //   map.set(ch,  (map.get(ch) || 0) + 1);
    // }
   
    // const s11 = s1.split("");
    // for (let i=0; i<s11.length; i++) {
    //     const ch = s11[i].toLowerCase();
    //     if (!map.has(ch)) {
    //         s11.splice(i, 1);
    //     }
    // }
    // return [...map.keys()].join("") == s11.join("").toLowerCase() ? "YES" : "NO"
  
    const allowedChars = new Set(s2.toLowerCase());

    const filteredS1 = s1.toLowerCase()
        .split("")
        .filter(ch => allowedChars.has(ch))
        .join("");

    const s2Unique = Array.from(allowedChars).join("");

    return s2Unique === filteredS1 ? "YES" : "NO";
}
  
console.log(canTransform("DaBcd", "ABC"));
console.log(canTransform("AbcDE", "AFDE"));
