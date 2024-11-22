const solution = (n) => {
  var answer = 0;
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 1) answer = i;
  }
  return answer;
};
let s = 10;
console.log(solution(s));
