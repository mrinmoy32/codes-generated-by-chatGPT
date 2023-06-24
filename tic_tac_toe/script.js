const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

for (const cell of cells) {
  cell.addEventListener('click', handleClick);
}

function handleClick(event) {
  const cell = event.target;
  cell.innerText = currentPlayer;
  cell.removeEventListener('click', handleClick);

  if (checkWin(currentPlayer)) {
    alert(`Player ${currentPlayer} wins!`);
  } else if (checkDraw()) {
    alert('Draw!');
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin(player) {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of combinations) {
    if (cells[combination[0]].innerText === player &&
        cells[combination[1]].innerText === player &&
        cells[combination[2]].innerText === player) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  for (const cell of cells) {
    if (cell.innerText === '') {
      return false;
    }
  }

  return true;
}
