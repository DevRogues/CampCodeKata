//N개의 최소공배수

function solution(arr) {
  let answer = 0;
  let x = 0;
  let flag = false;
  while (!flag) {
    x++;
    for (let i = 0; i < arr.length - 1; i++) {
      if ((arr[arr.length - 1] * x) % arr[i] === 0) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
  }
  return (answer = arr[arr.length - 1] * x);
}

console.log(solution([2, 6, 8, 14]));
