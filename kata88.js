//행렬의 곱셈

function solution(arr1, arr2) {
  var answer = [];

  //arr1의 길이만큼 순회
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    //arr2의 '열' 길이 만큼 순회
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      //arr2의 '행'길이 만큼 순회
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
    }
    answer.push(row);
  }

  return answer;
}
console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
