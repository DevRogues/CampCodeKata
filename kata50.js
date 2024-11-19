let s = "banana";

function solution(s) {
  let answer = [];

  for (let i = s.length - 1; i > 0; i--) {
    let isIt = false;

    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        answer[i] = i - j;
        isIt = true;
        break;
      } else {
        isIt = false;
      }
    }

    if (!isIt) {
      answer[i] = -1;
    }
  }
  answer[0] = -1;
  return answer;
}

console.log(solution(s));
