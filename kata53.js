let s = [10, 100, 20, 150, 1, 100, 200];
let k = 3;
function solution(k, s) {
  var answer = [];
  var kArr = [];

  for (let i = 0; i < s.length; i++) {
    kArr.push(s[i]);
    kArr.sort((a, b) => a - b);
    if (kArr.length > k) {
      kArr.shift();
    }
    answer.push(kArr[0]);
  }

  return answer;
}

console.log(solution(k, s));
