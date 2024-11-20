let a = 3;
let b = 1;
let c = 20;

function solution(a, b, c) {
  var answer = 0;

  while (true) {
    if (Math.floor(c / a) < 1) {
      answer += c % a;
      break;
    }

    answer += c % a === 0 ? Math.floor(c / a) : Math.floor(c / a) * b;
    c = Math.floor(c / a);
  }

  return answer;
}

console.log(solution(a, b, c));

// solution = (a,b,n) => Math.floor(Math.max(n-b,0))
