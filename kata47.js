let s = ["sun", "bed", "car"];
let n = 1;

function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }

  strings.sort();

  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].slice(1, strings[i].length);
  }
  return strings;
}

console.log(solution(s, n));
