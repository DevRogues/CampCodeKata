function solution(s, skip, index) {
  var answer = "";

  for (let i = 0; i < s.length; i++) {
    let idx = index;
    let aski = s.charCodeAt(i);

    //skip 범위 체크
    for (let j = 0; j < skip.length; j++) {
      if (
        skip[j].charCodeAt(0) > aski &&
        skip[j].charCodeAt(0) < aski + index
      ) {
        idx++;
      }
    }
    const str = aski + idx > 122 ? aski + idx - 26 : aski + idx;
    answer += String.fromCharCode(str);
  }

  return answer;
}

console.log(solution("aukks", "wbqd", 5));
