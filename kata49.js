let s = [5, 0, 2, 7];

function solution(s) {
  s = s.sort();
  var set = new Set();
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      set.add(s[i] + s[j]);
    }
  }
  var answer = [...set];
  return answer.sort((a, b) => a - b);
}

console.log(solution(s));
