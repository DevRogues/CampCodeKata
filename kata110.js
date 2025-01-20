//https://school.programmers.co.kr/learn/courses/30/lessons/178870

//전력망을 둘로 나누기

function solution(n, wires) {
  wires = wires.sort(); // 테스트케이스 7번
  let answer = 1e9;
  for (let i = 1; i < wires.length; i++) {
    // 방문 배열 생성
    const visited = Array(n + 1).fill(0);
    // 배열을 하나씩 삭제해서 wires.length-1만큼 만들기
    const temp = wires.slice(0, i - 1).concat(wires.slice(i));
    // 송전탑 그래프 만들기
    const towers = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of temp) {
      towers[a].push(b);
      towers[b].push(a);
    }
    // bfs, 정점의 수 세기 (방문한 정점 체크)
    const bfs = (n) => {
      const q = [n];
      visited[n] = 1;
      let cnt = 1;

      while (q.length) {
        const cur = q.shift();
        for (const next of towers[cur]) {
          if (!visited[next]) {
            q.push(next);
            visited[next] = 1;
            cnt++;
          }
        }
      }
      return cnt;
    };
    // 하나를 잘랐기 때문에 정점의 수는 두개가 나옴
    const doubleCnt = [];
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) doubleCnt.push(bfs(i));
    }
    // 두개의 차의 절댓값과 answer를 비교해서 최솟값 구하기
    answer = Math.min(answer, Math.abs(doubleCnt[0] - doubleCnt[1]));
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
