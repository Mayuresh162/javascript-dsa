function hollowRectangle(num) {
    for (let i=0; i<num; i++) {
        let s = '';
        for (let j=0; j<num; j++) {
            if (i == 0 || i == num-1 || j == 0 || j == num-1) {
                s += '*';
            } else {
                s += ' ';
            }
        }
        console.log(s);
    }
}

hollowRectangle(3);
hollowRectangle(6);

// ******
// *    *
// *    *
// *    *
// *    *
// ******