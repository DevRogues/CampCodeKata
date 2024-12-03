function solution(s) {
  let answer = 0;

  let sameCount = 0;
  let otherCount = 0;
  let isSame = false;

  for (let i = 0; i < s.length; i++) {
    isSame = false;

    for (let j = i; j < s.length; j++) {
      s[i] === s[j] ? sameCount++ : otherCount++;

      //같아 지면 중단
      if (sameCount === otherCount) {
        answer++;
        i = j;
        sameCount = 0;
        otherCount = 0;
        isSame = true;
        break;
      }
    }
  }

  !isSame ? answer++ : "";
  return answer;
}

console.log(solution("abracadabra"));
