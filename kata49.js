let s = [1, 3, 4, 6];

function solution(s) {
  var answer = "0";

  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] / 2 >= 1) {
      for (let j = 0; j < Math.floor(s[i] / 2); j++) {
        answer = i + answer + i;
      }
    }
  }
  return answer;
}

console.log(solution(s));
