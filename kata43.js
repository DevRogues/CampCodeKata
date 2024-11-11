let t = "500220839878";
let p = "7";
function solution(t, p) {
  let leng = t.length > p.length ? p.length : t.length;
  let maxNum = t.length > p.length ? t : p;
  let minNum = t.length > p.length ? p : t;
  let maxArr = [];

  //큰 글자를 자름.
  for (let i = 0; i < maxNum.length - (leng - 1); i++) {
    maxArr.push(maxNum.substring(i, leng + i));
  }
  console.log(maxArr);
  let answer = 0;
  //배열 비교
  for (let i = 0; i < maxArr.length; i++) {
    if (Number(minNum) >= Number(maxArr[i])) {
      answer++;
    }
  }
  return answer;
}
console.log(solution(t, p));
