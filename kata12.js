const solution = (arr) => {
  let answer = 0;

  arr.forEach((element) => {
    answer += element;
  });

  return answer / arr.length;
};

console.log(solution([1, 2, 3, 4]));
