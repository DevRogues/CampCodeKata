const solution = (n) => {
  let answer = 0;
  let nStr = n.toString();
  for (let i = 0; i < nStr.length; i++) {
    answer += Number(nStr[i]);
  }
  return answer;
};

console.log(solution(123));
