//https://school.programmers.co.kr/learn/courses/30/lessons/12978

//배달

function solution(N, road, K) {
  const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const lines = Array.from(Array(N + 1), () => []);

  road.forEach((value) => {
    // 연결되어 있는 경로를 모두 lines배열에 저장한다.
    let [a, b, c] = value;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  });

  let queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (queue.length) {
    let { to } = queue.pop();

    lines[to].forEach((next) => {
      // 모든 경로를 탐색
      if (arr[next.to] > arr[to] + next.cost) {
        // 기존에 경로의 값보다 우회하는 값이 더 작으면 해당 값을 저장함
        arr[next.to] = arr[to] + next.cost;
        queue.push(next);
      }
    });
  }

  return arr.filter((item) => item <= K).length; // 경로의 제한인 K보다 cost가 작은 경로의 수를 반환을 함
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
