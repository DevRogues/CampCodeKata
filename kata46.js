let s = "1zerotwozero3";

function solution(s) {
  let numStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numStr.length; i++) {
    s = s.replace(numStr[i], i);
    if (s.indexOf(numStr[i]) !== -1) s = s.replace(numStr[i], i);
  }
  return Number(s);
}
console.log(solution(s));

// for (let i = 0; i < numbers.length; i++) {
//   let arr = answer.split(numbers[i]);
//   answer = arr.join(i);
// }
