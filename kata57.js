function solution(a) {
  const answer = [];

  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === p1[i % p1.length]) count1++;
    if (a[i] === p2[i % p2.length]) count2++;
    if (a[i] === p3[i % p3.length]) count3++;
  }

  const max = Math.max(count1, count2, count3);

  if (count1 === max) answer.push(1);
  if (count2 === max) answer.push(2);
  if (count3 === max) answer.push(3);

  return answer.sort();
}

let a = [1, 2, 3, 4, 5];
console.log(solution(a));
