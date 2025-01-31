//https://school.programmers.co.kr/learn/courses/30/lessons/148653

//마법의 엘리베이터

function solution(storey) {
  var answer = 0;

  // 0층에 도달할 때 까지 무한루프
  while (storey > 0) {
    let cur = storey % 10;
    storey /= 10;

    if (cur == 5) {
      if (storey % 10 >= 5) {
        answer += 10 - cur;
        storey++;
      } else {
        answer += cur;
      }
    } else if (cur > 5) {
      answer += 10 - cur;
      storey++;
    } else {
      answer += cur;
    }
  }

  return answer;
}

console.log(solution(16));
