function fakeAPI(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(str + ' resolved.')}, 1000);
  });
}

var arr = ['p1', 'p2', 'p3', 'p4'];
arr.reduce((acc, curr) => {
  return acc.then(res => {
    return fakeAPI(curr).then(resp => {
      return [...res, resp];
    });
  });
}, Promise.resolve([])).then(res => {
  console.log(res);
});