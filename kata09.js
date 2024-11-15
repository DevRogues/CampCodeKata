const solution = (n) => {
  let answer = 0;
  for (let i = n; i > 0; i--) {
    if (i % 2 === 0) answer += i;
  }
  return answer;
};

console.log(solution(10));
