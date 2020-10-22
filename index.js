'use strict';

console.log('funguju');

let player = 'circle';

const poleElm = document.querySelector('.pole');
const hracElm = document.querySelector('#player');

poleElm.addEventListener('click', (event) => {
  if (player === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    player = 'cross';
    hracElm.toggleClass('cross');
  } else if (player === 'cross') {
    event.target.classList.add('board__field--cross');
    hracElm.className = 'circle';
    player = 'circle';
    event.target.disabled = true;
  }
});
