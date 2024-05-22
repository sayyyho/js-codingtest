function solution(num_list) {
  let even = num_list.reduce((a, c, i) => (i % 2 === 0 ? a + c : a), 0);
  let odd = num_list.reduce((a, c, i) => (i % 2 !== 0 ? a + c : a), 0);
  return even > odd ? even : odd;
}

// function solution(num_list) {
//     let even = 0;
//     let odd = 0

//     num_list.map((v, idx) => {
//         !(idx % 2) ? even += v : odd += v;
//     })

//     return odd > even ? odd : even;
// }
