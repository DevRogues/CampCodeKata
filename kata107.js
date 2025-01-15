//큰 수 만들기

function solution(number, k) {
  var answer = "";

  const len = number.length - k;
  let start = 0;

  while (start < number.length && answer.length != len) {
    const leftNum = k + answer.length + 1;
    let max = 0;
    for (let j = start; j < leftNum; j++) {
      if (max < number.charAt(j) - "0") {
        max = number.charAt(j) - "0";
        start = j + 1;
      }
    }
    answer += max;
  }
  return answer;
}

console.log(solution("1924", 2));
