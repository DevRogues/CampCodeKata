//멀리 뛰기

function solution(n) {
  var answer = 0;
  let x = 0;
  let flag = false;
  while (!flag) {
    if (n % 2 === 0) {
      //짝수
      /***
       * 2 (1,1) (2)
       * 4 (1,1,1,1) (2,1,1) (1,2,1) (1,1,2) (2,2)
       * 6 (1,1,1,1,1,1) , (2,1,1,1,1) (1,2,1,1,1) (1,1,2,1,1) (1,1,1,2,1) (1,1,1,1,2) (2,2,1,1) (1,2,2,1) (1,1,2,2) (2,2,2)
       */
    } else {
      //홀수
    }
  }

  return answer;
}
// console.log(solution(4));

console.log(6 % 2);
