function solution(n, a, b) {
  var answer = 0;
  while (a != b) {
    if (a % 2 == 0) a /= 2;
    else a = (a + 1) / 2;
    if (b % 2 == 0) b /= 2;
    else b = (b + 1) / 2;
    answer++;
    // if (a == b) break;
  }
  return answer;
}
console.log(solution(8, 4, 7));
