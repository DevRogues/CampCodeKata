function solution(n, m, section) {
  var answer = 0;

  //section의 최소 값부터 section의 최대 값까지
  for (let i = section[0]; i < section[section.length - 1]; i++) {
    //다음 section의 중간의 값을 체크해서 지나가는 구간이면 넘어간다?
    answer++;
    if (section[i + 1] < section[i] + m) {
    } else {
    }
  }

  //예제 3개만 했을 때는 통과... 제출에는 실패
  // if (section[section.length - 1] - section[0] < m) return 1;
  // else {
  //   return section[section.length - 1] % m === 0
  //     ? section[section.length - 1] / m
  //     : section[section.length - 1] % m;
  // }
  return answer;
}

let a = [2, 3, 6];
console.log(solution(8, 4, a));
