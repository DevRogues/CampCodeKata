//school.programmers.co.kr/learn/courses/30/lessons/140107

//점 찍기
function solution(k, d) {
  function equation(x) {
    return Math.sqrt(d * d - x * x);
  }
  let result = 0;
  for (let i = 0; i <= d; i += k) {
    const y = equation(i);
    result += Math.floor(y / k) + 1;
  }

  return result;
}

console.log(solution(1, 5));
