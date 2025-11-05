var merge = function (nums1, m, nums2, n) {
  // let i = 0;
  // while(m<nums1.length) {
  //     nums1[m] = nums2[i];
  //     m++;
  //     i++;
  // }
  // nums1.sort((a, b) => a-b)

  // const n1 = nums1.slice(0,m);
  // let p1 = 0;
  // let p2 = 0;
  // for (let i=0; i<m+n; i++) {
  //     if (p2 >=n || ( p1 < m && n1[p1] < nums2[p2])) {
  //         nums1[i] = n1[p1];
  //         p1++;
  //     } else {
  //         nums1[i] = nums2[p2];
  //         p2++;
  //     }
  // }

  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};
