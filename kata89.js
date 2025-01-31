function solution(want, number, discount) {
  var answer = 0;
  var map = new Map();

  const numbers = [...number];
  //discount 순회
  for(let i = 0; i< discount.length; i++){

    //want 순회
    for(let j = 0; j < want.length; j++){
      if(discount[i] === want[j]) numbers[i] -= 1;
    }

  }

  return answer;
}

console.log(
  solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1])
);
