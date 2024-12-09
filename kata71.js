function solution(today, terms, privacies) {
  var answer = [];
  let termsMap = new Map();
  today = new Date(today);

  //terms 맵 만들기
  terms.forEach((element) => {
    let split = element.split(" ");
    termsMap.set(split[0], split[1]);
  });

  //privacies로 유효기간 구하기
  privacies.forEach((element, idx) => {
    let split = element.split(" ");

    let date = new Date(
      split[0].split(".")[0],
      split[0].split(".")[1],
      split[0].split(".")[2]
    );

    //유효기간만큼 월 더하기
    date.setMonth(date.getMonth() + +termsMap.get(split[1]) - 1);

    //비교
    if (date <= today) answer.push(idx + 1);
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
