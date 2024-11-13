let s = "a B z";
let n = 4;

function solution(s, n) {
  let answer = "";
  // 122 소
  // 99 대
  console.log("z".charCodeAt(), "Z".charCodeAt());

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " "; //공백은 공백으로
    else {
      //"Z" 나 "z" 를 넘어 섰을 때 다시 'a'/'A'로 돌아가는 로직을 생각 하다 못 풀었습니다...
      if (
        s[i].charCodeAt() + n > "Z".charCodeAt() &&
        s[i].charCodeAt() + n < "z".charCodeAt()
      ) {
        answer += String.fromCharCode(s[i].charCodeAt() - 24 + n);
      } else {
        answer += String.fromCharCode(s[i].charCodeAt() + n);
      }
    }

    //z를 넘어섰을 때 다시 a부터 돌리는걸 어떻게 하지...
  }
  return answer;
}
console.log(solution(s, n));
