function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    const freqCount = {};
    
    let n1 = '' + num1;
    let n2 = '' + num2;

    if (n1.length !== n2.length) {
        return false;
    }
    
    for (let i=0; i<n1.length; i++) {
        let r = n1[i];
        freqCount[r] ? freqCount[r] += 1 : freqCount[r] = 1;
    }
    
    for (let i=0; i<n2.length; i++) {
        let r = n2[i];
        if (!freqCount[r]) {
            return false;
        } else {
            freqCount[r] -= 1;
        }
    }
    return true;
}