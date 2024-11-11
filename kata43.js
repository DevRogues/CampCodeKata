let p = "500220839878";
let t = "7";

function solution(t, p) {
  let leng = t.length > p.length ? p.length : t.length;
  let maxNum = t.length > p.length ? t : p;
  let minNum = t.length > p.length ? p : t;
  let maxArr = [];

  //큰 글자를 자름.
  for (let i = 0; i < maxNum.length - (leng - 1); i++) {
    maxArr.push(maxNum.substring(i, leng + i));
  }
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

// function solution(t, p) {
//   let count = 0;
//   for (let i = 0; i <= t.length - p.length; i++) {
//     let value = t.slice(i, i + p.length);
//     if (+p >= +value) count++;
//   }
//   return count;
// }
// console.log(solution(t, p));
