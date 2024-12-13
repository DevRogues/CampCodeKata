function solution(id_list, report, k) {
  var answer = [];
  var res = {};
  var cnt = {};

  //id_list 만큼 res의 key값 생성
  id_list.forEach((element) => {
    res[element] = [];
    cnt[element] = 0;
  });

  //res의 키값에 repot값 넣기
  report.forEach((element) => {
    const split = element.split(" ");

    res[split[0]].push(split[1]);
    cnt[split[1]]++;
  });

  //cnt 객체에서
  for (let key in cnt) {
    //2표 이상 받은 사람을
    if (cnt[key] >= 2) {
      //res 객체에서 대상자를 찾아서
      for (let key2 in res) {
        console.log(key2);
        let a = res[key2].some((item) => item === key);
        if (a) {
          break;
        }
        //answer에 값을 넣을려고 했는데 시간이 다 되어 못풀었습니다.
      }
    }
  }
  console.log(res);
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
