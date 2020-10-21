'use strict';

console.log('funguju');

let player = 'circle';

const poleElm = document.querySelector('.pole');
const hracElm = document.querySelector('#player');

poleElm.addEventListener('click', (event) => {
  if (player === 'circle') {
    event.target.classList.add('board__field--circle');
    hracElm.className = 'cross';
    player = 'cross';
    event.target.setAttribute('disabled', true);
  } else if (player === 'cross') {
    event.target.classList.add('board__field--cross');
    hracElm.className = 'circle';
    player = 'circle';
    event.target.setAttribute('disabled', true);
  }
});
