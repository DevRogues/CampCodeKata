function solution(nums) {
  const answer = 0;

  //3중 for문 만드는데 시간을 다 소비하였습니다 ㅠㅠ
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        console.log(nums[i] + nums[j] + nums[k]);

        //nums[i] + nums[j] + nums[k] 값을 더해서 소수면 answer 값을 ++ 해주면 되지않을까 싶습니다.
      }
    }
  }

  return answer;
}

let a = [1, 2, 3, 4];
console.log(solution(a));
