function solution(n, lost, reserve) {
  let answer = n - lost.length;

  //reserve 기준으로 for문을 돌림
  for (let i = 0; i < reserve.length; i++) {
    // reserve[i] 값의 +1 -1 에 해당되는 lost 값 여부 체크
    // 있으면 answer++
    if (reserve[i] === 1) {
      // lost.findIndex((a) => {
      //   if (a === reserve[i] + 1) answer++;
      // });
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
