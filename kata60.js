function solution(number, limit, power) {
  var answer = 0;

  // 1. number의 약수 개수
  for (let i = 1; i <= number; i++) {
    var cnt = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) cnt++;
      else continue;
      // limit 체크
      if (limit < cnt) {
        cnt = power;
        break;
      }
    }
    answer += cnt;
  }
  return answer;
}

console.log(solution(100000, 3, 2));
