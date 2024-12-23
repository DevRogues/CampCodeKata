function solution(n) {
  if (n <= 0) return 0;
  else if (n == 1) return (r[n] = 1);
  else if (r[n] > 0) return r[n];
  return (r[n] = solution[(n - 1, r)] - solution[(n - 2, r)]);
}
console.log(solution(3));
