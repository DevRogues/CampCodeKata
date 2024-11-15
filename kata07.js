const solution = (angle) =>
  0 < angle && angle < 90
    ? 1
    : angle == 90
    ? 2
    : 90 < angle && angle < 180
    ? 3
    : angle === 180
    ? 4
    : null;

// const solution = (angle) => 0 < angle < 90 ? 1 : angle == 90 ? 2 : 90 < angle < 180 ? 3 : angle === 180 ? 4 : null;

console.log(solution(70));
console.log(solution(91));
console.log(solution(180));
