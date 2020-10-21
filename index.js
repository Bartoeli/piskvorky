'use strict';

console.log('funguju');

let player = 'circle';

const polickoElm = document.querySelectorAll('.policko');
const hracElm = document.querySelector('.hrac');

polickoElm.addEventListener('click', (event) => {
  if (player === 'circle') {
    event.target.className = 'board__field--circle';
    hracElm.className = 'cross';
    player = 'cross';
    event.target.setAttribute('disabled', true);
  } else if (player === 'cross') {
    event.target.className = 'board__field--cross';
    hracElm.className = 'circle';
    player = 'circle';
    event.target.setAttribute('disabled', true);
  }
});
