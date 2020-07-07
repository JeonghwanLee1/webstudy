for(var i = 0; i<100; i++){
  setTimeout(()=>{console.log(i)},i*1000);//closure problem
}
for(var i = 0; i<100; i++){
  function closure(j){
    setTimeout(()=>{console.log(j)},j*1000);
  }
  closure(i)
}
