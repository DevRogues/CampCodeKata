//택배상자

function solution(order) {
  let answer = 0;
  let stack = [];
  let orderIdx = 0; //요구 순서 인덱스
  let boxIdx = 1; //컨테이너 박스 인덱스
  for (let i = 0; i <= order.length; i++) {
    if (order[orderIdx] === boxIdx) {
      answer++;
      orderIdx++;
      boxIdx++;
    } else if (stack.length && stack[stack.length - 1] === order[orderIdx]) {
      answer++;
      orderIdx++;
      stack.pop();
      i--; //한번더
    } else {
      stack.push(boxIdx);
      boxIdx++;
    }
  }
  return answer;
}
console.log(solution([4, 3, 1, 2, 5]));
