//setTImeout, addEventListener 등의 내부 인자로 들어간 함수는 실행시간에 변수를 참조한다.(전처리X)

for(var i = 0; i<100; i++){
  setTimeout(()=>{console.log(i)},i*1000);//closure problem
}
for(var i = 0; i<100; i++){
  function closure(j){
    setTimeout(()=>{console.log(j)},j*1000);
  }
  closure(i)
}
