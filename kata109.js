//https://school.programmers.co.kr/learn/courses/30/lessons/178870

//연속된 부분 수열의 합

function solution(sequence, k) {
  let start = 0;
  let end = 0;
  let sum = sequence[0];

  let range = [-Infinity, Infinity];

  while (end < sequence.length) {
    //start 포인터가 end보다 커지면 end 포인터를 업데이트
    if (start > end) end = start;

    //sum이 k와 같고 현재 포인터의 range가 저장되어 있는 range보다 작으면 업데이트
    if (sum === k) {
      const prev_range = range[1] - range[0];
      const current_range = end - start;
      if (current_range < prev_range) range = [start, end];
    }

    //sum이 k이상이면 end 포인터 +1
    if (sum <= k) {
      sum += sequence[++end];
    } else {
      //sum이 k보다 크면 start 포인터+1
      sum -= sequence[start++];
    }
  }

  return range;
}
