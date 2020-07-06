
document.querySelector("#init").addEventListener("click",(e)=>{
  parent = document.querySelector("#board");
  parent.removeChild(document.querySelector("tbody"));
  newBody = document.createElement("tbody");
  parent.appendChild(newBody);
  document.querySelector("#exec").disabled=false;
  e.target.disabled=true;


})
document.querySelector("#exec").addEventListener("click",(e)=>{
  var row = parseInt(document.querySelector("#row").value);
  var col = parseInt(document.querySelector("#col").value);
  var number = parseInt(document.querySelector("#numOfMine").value);
  var blocks = row*col

  gameboard = Array.from({length:col},()=>{
    return Array.from({length:row},()=>0)});//make gameboard and init it to 0

  let count = 0
  while(count<number){
    let rand_row = Math.ceil(Math.random()*row) - 1
    let rand_col = Math.ceil(Math.random()*col) - 1
    if(gameboard[rand_col][rand_row]!=1){
      gameboard[rand_col][rand_row]=1;
      count++;
    }
  }
  tbody = document.querySelector("#board tbody")
  for(let i = 0; i < col ; i++){
    let tr = document.createElement("tr");
    for(let j = 0; j<row ; j++){
      let td = document.createElement("td");
      tr.appendChild(td);
      td.addEventListener('click',(e)=>{ //Onclick으로 접근하니 안되더라..
        //e.preventDefault();
        if(gameboard[i][j]==1){
          e.target.style="background : red;"

        }
        else if(gameboard[i][j]==0){
          e.target.style="background : lightgrey;"
        }
      });
      // td.onClick = ()=>{
      //   console.log("gg")
      //   alert("gg")
      // };
    }
    tbody.appendChild(tr);
  }
  document.querySelector("#init").disabled=false;
  e.target.disabled=true;
});
