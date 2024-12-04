function solution(keymap, targets) {
  var answer = [];

  //타겟 돌리고
  for (let i = 0; i < targets.length; i++) {
    //문자열 뽑고
    let sum = 0;
    for (let j = 0; j < targets[i].length; j++) {
      let temp = false;

      //ketmap 뽑아서
      for (let k = 0; k < keymap.length; k++) {
        let idx = keymap[k].indexOf(targets[i][j]) + 1;
        //뽑아서 temp에 넣는다?
        if (keymap.length > 1) {
          if (!temp) {
            //최소 값과 비교에서 작으면 temp로 덮어쓰기
            if (idx < temp) {
              temp = idx;
            }
          } else {
            temp = idx;
          }
        } else {
          sum += idx;
        }
      }
      sum += temp;
    }
    answer.push(sum);
  }
  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
