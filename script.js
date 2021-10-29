const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


function dragStart(){
  console.log('dragt Start.');
}

function dragEnd(){
  console.log('dragt End.');
}

function dragOver(){
  console.log('dragt Over.');
}

function dragEnter(){
  console.log('dragt Enter.');
}

function dragLeave(){
  console.log('dragt Leave.');
}

function dragDrop(){
  console.log('dragt Drop.');
}