function solution(a, b) {
  var answer = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return answer[new Date("2016-" + a + "-" + b).getDay()];
}

let a = 5;
let b = 24;
console.log(solution(a, b));
