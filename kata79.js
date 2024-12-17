//카펫

// function solution(brown, yellow) {
//   var answer = [];

//   //윗줄과 아래줄의 브라운은 동일한 (x)개를, 중앙 줄은 (x-2)개를 보유

//   if (brown !== yellow) {
//     if ((brown - 2) % 2 === 0) {
//       answer.push((brown - 2) / 2);
//       answer.push(3);
//     }
//   } else {
//     // 24 , 2 4 6 8 12 24
//     const a = re(brown);
//     if (a !== 0) {
//       re();
//     }
//   }

//   return answer;
// }

// function re(a) {
//   return a / 2;
// }

function solution(brown, yellow) {
  var answer = [];
  let result = [];
  let num = brown + yellow; // 약수를 찾기 위한 정수 설정
  let index = 3;

  while (index <= num) {
    if (num % index === 0) result.push(index);
    index++;
  }

  let resLeng = result.length;
  if (resLeng % 2 !== 0) {
    answer.push(result[Math.round(resLeng / 2)]);
    answer.push(result[Math.round(resLeng / 2) / 2]);
  } else {
    answer.push(result[resLeng / 2 - 1]);
    answer.push(result[resLeng / 2]);
  }
  return answer;
}
console.log(solution(8, 1));
