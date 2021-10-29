const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties){
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}


function dragStart(){
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
  
  console.log('drag Start.');
}

function dragEnd(){
  this.className -= 'invisible';
  this.className = 'fill';

  console.log('drag End.');
}

function dragOver(){
  console.log('drag Over.');
}

function dragEnter(){
  console.log('drag Enter.');
}

function dragLeave(){
  console.log('drag Leave.');
}

function dragDrop(){
  console.log('drag Drop.');
}