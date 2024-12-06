function solution(ingredient) {
  var answer = 0;

  //String으로 합침
  ingredient = String(ingredient.join(""));

  //1231 을 찾아서 잘라서 카운트 함
  while (true) {
    let leng = ingredient.length;
    ingredient = ingredient.replace("1231", "");
    if (leng === ingredient.length) {
      break;
    } else {
      answer += Math.abs(ingredient.length - leng) / 4;
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
