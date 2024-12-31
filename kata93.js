function solution(k, dungeons) {
  let answer = 0;

  function explore(currentFatigue, visitedCount, visited) {
    // 현재까지 방문한 던전 수와 최대 던전 수 갱신
    answer = Math.max(answer, visitedCount);
    console.log(answer, visited);
    for (let i = 0; i < dungeons.length; i++) {
      // 아직 방문하지 않은 던전이고 현재 피로도가 최소 필요 피로도 이상일 경우
      if (!visited[i] && currentFatigue >= dungeons[i][0]) {
        // 방문 처리
        visited[i] = true;
        // 다음 탐험 재귀 호출 (소모 피로도 반영)
        explore(currentFatigue - dungeons[i][1], visitedCount + 1, visited);
        // 탐험 후 방문 상태 되돌리기
        visited[i] = false;
      }
    }
  }

  // 방문 여부 배열 초기화
  const visited = Array(dungeons.length).fill(false);
  // 탐험 시작
  explore(k, 0, visited);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
