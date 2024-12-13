function solution(s) {
  //전체 소문자로 변경 후 배열로 변경
  const arr = s.toLowerCase().split(" ");

  //앞글자만 대문자 처리
  arr.forEach((element, idx) => {
    if (element !== "")
      arr[idx] =
        element[0].toUpperCase() + element.substring(1, element.length);
  });

  return arr.join(" ");
}

console.log(solution(" 3people unFollowed me "));
