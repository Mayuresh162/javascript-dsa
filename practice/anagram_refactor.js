function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if (str1.length !== str2.length) {
        return false;
    }
    
    const freqCounter1 = {};
    for (let i=0; i < str1.length; i++) {
        let lookup = str1[i];
        freqCounter1[lookup] ? freqCounter1[lookup] += 1 : freqCounter1[lookup] = 1;
    }
    
    for (let i=0; i < str2.length; i++) {
        let lookup = str2[i];
        if (!freqCounter1[lookup]) {
            return false;
        } else {
            freqCounter1[lookup] -= 1;
        }
    }
    return true;
}