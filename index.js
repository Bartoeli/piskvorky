'use strict';

console.log('funguju');

let player = 'circle';

const poleElm = document.querySelector('.pole');
const hracElm = document.querySelector('.znak');
const polickoElm = document.querySelector('.policko');

const poleSize = 10;

const getPosition = (polickoElm) => {
  let poleIndex = 0;
  while (polickoElm.Index < polickoElm.length) {
    if (poleIndex === polickoElm[poleIndex]) {
      break;
    }
    poleIndex++;
  }
  return {
    row: Math.floor(poleIndex / poleSize),
    column: poleIndex % poleSize,
  };
};

const getField = (row, column) => {
  return poleElm[row * poleSize + column];
};

const getSymbol = (polickoElm) => {
  if (polickoElm.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (polickoElm.classList.contains('board__field--cross')) {
    return 'circle';
  } else {
    return undefined;
  }
};

poleElm.addEventListener('click', (event) => {
  if (player === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    hracElm.src = 'images/cross.svg';
    hracElm.alt = 'Křížek';
    player = 'cross';
  } else if (player === 'cross') {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    hracElm.src = 'images/circle.svg';
    hracElm.alt = 'Kolečko';
    player = 'circle';
  }
});
