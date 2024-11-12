let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

let answer = 0;
function solution(sizes) {
  let garo = 0;
  let sero = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) sizes[i] = [sizes[i][1], sizes[i][0]];
    if (garo < sizes[i][0]) garo = sizes[i][0];
    if (sero < sizes[i][1]) sero = sizes[i][1];
  }

  return garo * sero;
}
console.log(solution(sizes));
