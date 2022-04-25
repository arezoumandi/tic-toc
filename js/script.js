let gameActive = true;
let currentPalyer = "X";
let gemeCellStatus = ["", "", "", "", "", "", "", "", ""];
let lastCellClicked = 10;
let winner = "";
const truePath = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
if (localStorage.getItem("X")==null)
{
    document.getElementById("X").innerHTML += 0;
}
else
{
    document.getElementById("X").innerHTML += localStorage.getItem("X");
}

if (localStorage.getItem("O")==null)
{
    document.getElementById("O").innerHTML += 0;
}
else
{
    document.getElementById("O").innerHTML += localStorage.getItem("O");
}


for (let i = 0; i < 9; i++) {
  document
    .getElementById(i)
    .addEventListener("click", cellClickHandler.bind({}, i));
}

document.getElementById("restart").addEventListener("click",restart);

function cellClickHandler(cellClicked) {
  if (gameActive) {
    if (gemeCellStatus[cellClicked] == "") {
      gemeCellStatus[cellClicked] = currentPalyer;
      document.getElementById(cellClicked).innerHTML = currentPalyer;
      checkResult();
      playerChange();
    }
    lastCellClicked = cellClicked;
  }
}

function playerChange() {
  if (currentPalyer == "X") {
    currentPalyer = "O";
  } else if (currentPalyer == "O") {
    currentPalyer = "X";
  }
}

function checkGameConditions(a, b, c) {
  if (
    gemeCellStatus[a] == gemeCellStatus[b] &&
    gemeCellStatus[b] == gemeCellStatus[c]
  ) {
    if (gemeCellStatus[c] != "") {
      winner = currentPalyer;
      alert("Player '" + winner + "' won");
      gameActive = false;
      x = +localStorage.getItem(winner);
      localStorage.setItem(winner, x + 1);
      score = localStorage.getItem(winner);
      element = document.getElementById(winner);
      getMessage(score, element);
      resetGame();
    }
  }
}

function checkResult() {
  for (i = 0; i < truePath.length; i++) {
    row = truePath[i];
    a = row[0];
    b = row[1];
    c = row[2];
    checkGameConditions(a, b, c);
  }

  if (!gemeCellStatus.includes("")) {
    element = document.getElementById("game-result");
    alert( "Game ended in a draw");
    resetGame();
  }
}

function resetGame() {
  gemeCellStatus = ["", "", "", "", "", "", "", "", ""];
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  gameActive = true;
}

function getMessage(message, element) {
  element.innerHTML = message;
}


function restart()
{

    window.localStorage.removeItem('O');
    window.localStorage.removeItem('X');
    document.getElementById("X").innerHTML = 0;
    document.getElementById("O").innerHTML = 0;
    resetGame();
}