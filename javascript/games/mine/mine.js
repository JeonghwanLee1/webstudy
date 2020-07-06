
document.querySelector("#exec").addEventListener("click",()=>{
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
      td.textContent = gameboard[i][j];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
})
