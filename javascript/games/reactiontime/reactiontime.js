var screen = document.querySelector("#screen");
var state={

};

screen.addEventListener('click',(e)=>{
  if(screen.classList.contains('waiting')){
    screen.classList.remove('waiting');
    screen.classList.add('ready');
    screen.textContent = 'click when it\'s color is green';
  }
  else if(screen.classList.contains('ready')){
    screen.classList.remove('ready');
    screen.classList.add('now');
  }
  else if(screen.classList.contains('now')){
    screen.classList.remove('now');
    screen.classList.add('waiting');
  }
});
