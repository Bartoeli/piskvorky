'use strict';

console.log('funguju');

let player = 'circle';

const polickoElm = document.querySelector('.policko');
const hracElm = document.querySelector('.hrac');

polickoElm.addEventListener('click', (event) => {
  if (player === 'circle') {
    event.target.className = 'board__field--circle';
    hracElm.innerHTML = `<p class="hraje texty">hraje: </p>
    <img src="images/cross.svg" alt="Křížek" />`;
    player = 'cross';
    event.target.setAttribute('disabled', true);
  } else if (player === 'cross') {
    event.target.className = 'board__field--cross';
    hracElm.innerHTML = `<p class="hraje texty">hraje: <span class="circle"></span></p>`;
    player = 'circle';
    event.target.setAttribute('disabled', true);
  }
});
