//4개 타임타웃
function solution(players, callings) {
  callings.forEach((element) => {
    const idx = players.indexOf(element);
    [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];
  });

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
