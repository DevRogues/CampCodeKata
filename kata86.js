//H-Index
function solution(n) {
  var answer = 0;
  n = n.sort((a, b) => b - a);

  //논문 개수만큼 순회
  for (let i = 0; i < n.length; i++) {
    //논문의 개수가 인용 수 보다 작으면 h-index++
    if (n[i] > i) answer++;
  }
  return answer;
}
console.log(solution([3, 0, 6, 1, 5]));
