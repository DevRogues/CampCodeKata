let s = [1, 5, 2, 6, 3, 7, 4];
let n = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let temp = [...array];
    let min = commands[i][0] - 1;
    let max = commands[i][1] - 1;

    if (commands[i][0] === commands[i][1]) {
      answer.push(temp[min]);
    } else {
      answer.push(temp.splice(min, max).sort()[commands[i][2] - 1]);
    }
  }

  return answer;
}

console.log(solution(s, n));
