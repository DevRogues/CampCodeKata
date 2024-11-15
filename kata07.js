const solution = (num1, num2) => Math.floor((num1 / num2) * 1000);

// const solution = (angle) => 0 < angle < 90 ? 1 : angle == 90 ? 2 : 90 < angle < 180 ? 3 : angle === 180 ? 4 : null;

console.log(solution(70));
console.log(solution(91));
console.log(solution(180));
