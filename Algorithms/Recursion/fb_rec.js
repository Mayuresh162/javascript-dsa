function fb_rec(n) {
    if (n<2) return n;
    return fb_rec(n-1) + fb_rec(n-2);
}

console.log(fb_rec(6));