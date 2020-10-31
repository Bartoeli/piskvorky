'use strict';

console.log('funguju');

let player = 'circle';

const poleElm = document.querySelector('.pole');
const hracElm = document.querySelector('.znak');
const polickoElm = document.querySelector('.policko');
const fields = document.querySelectorAll('.policko');

const poleSize = 10;

const getPosition = (field) => {
  let i = 0;
  while (i < fields.length) {
    if (field === fields[i]) {
      break;
    }
    i++;
  }
  return {
    row: Math.floor(i / poleSize),
    column: i % poleSize,
  };
};

const getField = (row, column) => {
  return fields[row * poleSize + column];
};

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  let j;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < poleSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < poleSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  let diaLeftRight = 1;
  // koukni doleva nahoru
  i = origin.column;
  j = origin.row;
  while (i > 0 && j > 0 && symbol === getSymbol(getField(j - 1, i - 1))) {
    diaLeftRight++;
    i--;
    j--;
  }

  // koukni doprava dolů
  i = origin.column;
  j = origin.row;
  while (
    i < poleSize - 1 &&
    j < poleSize - 1 &&
    symbol === getSymbol(getField(j + 1, i + 1))
  ) {
    diaLeftRight++;
    i++;
    j++;
  }

  if (diaLeftRight >= symbolsToWin) {
    return true;
  }

  let diaRightLeft = 1;
  // koukni doprava nahoru
  i = origin.column;
  j = origin.row;
  while (
    i < poleSize - 1 &&
    j > 0 &&
    symbol === getSymbol(getField(j - 1, i + 1))
  ) {
    diaRightLeft++;
    i++;
    j--;
  }

  // koukni doleva dolů
  i = origin.column;
  j = origin.row;
  while (
    i > 0 &&
    j < poleSize - 1 &&
    symbol === getSymbol(getField(j + 1, i - 1))
  ) {
    diaRightLeft++;
    i--;
    j++;
  }

  if (diaRightLeft >= symbolsToWin) {
    return true;
  }

  return false;
};

poleElm.addEventListener('click', (event) => {
  if (player === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    hracElm.src = 'images/cross.svg';
    hracElm.alt = 'Křížek';
    player = 'cross';
    isWinningMove(event.target);
    if (isWinningMove(event.target) === true) {
      setTimeout(() => alert(`Vyhrálo kolečko.`), 10);
    }
    console.log(getPosition(event.target));
    console.log(isWinningMove(event.target));
  } else if (player === 'cross') {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    hracElm.src = 'images/circle.svg';
    hracElm.alt = 'Kolečko';
    player = 'circle';
    isWinningMove(event.target);
    if (isWinningMove(event.target) === true) {
      setTimeout(() => alert(`Vyhrál křížek.`), 10);
    }
    console.log(getPosition(event.target));
    console.log(isWinningMove(event.target));
  }
});
