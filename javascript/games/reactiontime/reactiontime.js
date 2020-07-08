var screen = document.querySelector("#screen");
var state={

};

//var startTime = new Date();
// console.time("time1");//for debug
var startTime;//호출스택에서 없어지는거 방지
var endTime;
var valid = false;
var timeout;
screen.addEventListener('click',(e)=>{
  // var endTime = new Date();
  // var dt = (endTime-startTime)/1000;
  // startTime = new Date();
  // console.log(dt)
  // console.timeEnd("time1");//for debug
  // console.time("time1");//for debug

  if(screen.classList.contains('waiting')){
    screen.classList.remove('waiting');
    screen.classList.add('ready');
    screen.textContent = 'Click when its color is green';
    timeout = setTimeout(()=>{
      valid = true;
      screen.click();
    },(Math.random()*1000)+2000);//2000~3000

  }
  else if(screen.classList.contains('ready')){
    if(!valid) {//부정 클릭
      clearTimeout(timeout);
      screen.classList.remove('');
      screen.classList.add("now")
      screen.textContent = "반칙ㄴㄴ해";
    }
    startTime = performance.now();
    screen.classList.remove('ready');
    screen.classList.add('now');
    screen.textContent="Click it!"
  }
  else if(screen.classList.contains('now')){
    endTime = performance.now();
    screen.classList.remove('now');
    screen.classList.add("waiting");
    dt = (endTime-startTime)/1000
    console.log(dt,"ms");
    screen.textContent="Click to start next game"
  }
});
