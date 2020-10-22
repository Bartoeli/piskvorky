'use strict';

console.log('funguju');

let player = 'circle';

const poleElm = document.querySelector('.pole');
const hracElm = document.querySelector('.znak');

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
