// code your solution here

function superbowlWin(arr) {
  const winningGame = arr.find(isWin);
  function isWin(game) {
    return (game.result === "W");
  }
  if(winningGame === undefined) {
    return undefined;
  } else {
    return winningGame.year;
  }
}