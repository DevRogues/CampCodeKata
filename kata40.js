let i = 45;
function solution(a) {
  let res = ""; //나머지
  let b = 1;

  //3진법 변환
  while (b > 0) {
    b = Math.floor(a / 3);
    res += a % 3;
    a = b;
  }

  let num = Number(res).toString();
  let answer = 0;

  //10진법 변환
  for (let i = num.length; i > 0; i--) {
    answer += Number(num[i - 1]) * 3 ** (num.length - i);
  }

  return answer;
}
console.log(solution(i));
