//https://school.programmers.co.kr/learn/courses/30/lessons/68645
function solution(n) {
  let answer = Array.from({ length: n }, () => new Array(n).fill(0));

  let count = 1;
  let [row, col] = [-1, 0];
  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      if (i % 3 === 0) row++;
      if (i % 3 === 1) col++;
      if (i % 3 === 2) {
        row -= 1;
        col -= 1;
      }

      answer[row][col] = count;
      count++;
    }
  }

  return answer.flat().filter((v) => v !== 0);
}
console.log(solution(4));
