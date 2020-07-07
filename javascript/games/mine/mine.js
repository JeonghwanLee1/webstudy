
var 코드표 = {
  지뢰 : 1,
  깃발 : 3
};//요런식도 가능 사용은 코드표.지뢰


document.querySelector("#init").addEventListener("click",(e)=>{
  parent = document.querySelector("#board");
  parent.removeChild(document.querySelector("tbody"));
  //tbody.innerHtmL = ""; 도 가능하다!!!!!!!!!!! 내부 초기화(쿼리셀렉터 해야겟지?)
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
  tbody = document.querySelector("#board tbody");
  for(let i = 0; i < col ; i++){
    let tr = document.createElement("tr");
    for(let j = 0; j<row ; j++){
      let td = document.createElement("td");
      tr.appendChild(td);
      td.addEventListener('click',(e)=>{ //Onclick으로 접근하니 안되더라..
        //e.preventDefault();
        //e.currentTarget.classList.add('opened');
        if(gameboard[i][j]==1){
          e.target.style="background : red;"
        }
        else if(gameboard[i][j]==0){
          e.target.style="background : lightgrey;"
        //   let nearby = [gameboard[i-1][j-1],gameboard[i-1][j],gameboard[i-1][j+1],
        //   gameboard[i][j-1],gameboard[i][j+1],
        //   gameboard[i+1][j-1],gameboard[i+1][j+1]];
        // let num_of_nearby = nearby.filter((y)=>{
        //   return y==1;
        // }).length;
        let nearby= 0;
        for(let _i = -1;_i<=1;_i++){
          for(let _j = -1;_j<=1;_j++){
            if(_i==0 && _j==0){
              continue;
            }
            if(gameboard[i+_i]){
              if(gameboard[i+_i][j+_j]===1){
                nearby++;
              }
            }
          }
        }

        // if(주변지뢰개수 === 0){
        //   var 주변칸 =0;
        //   if(tbody.children[줄-1]){
        //     주변칸 = 주변칸.concat([ 콘켓은 새로운걸 반환
        //       tbody.children[줄-1].children[칸-1],
        //       tbody.children[줄-1].children[칸]
        //       ...
        //     ])}
        //     ...
        //
        //   주변칸.filter((v)=> !!v).foreach((옆칸)=>{옆칸.click();});
                                                        //click 이벤트재귀호출
        // } filter !!v는 그냥 undefined 제거

        }




        e.target.textContent=nearby;
      }
        })
          //e.currenttarget : 더 낫다. 차이?
          //차이 : 두개 로그찌거보면, current는 tbody(이벤트 리스너가 달린 애),
          //그냥은 td(이벤트가 발생한  애)


      td.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
        var 부모tr = e.currentTarget.parentNode;
        console.log(부모tr);
        var 부모tbody = e.currentTarget.parentNode.parentNode;
        console.log(부모tbody);

        var 칸 = Array.prototype.indexOf.call(부모tr.children, e.target);//td 대신 e.currentTarget 쓰자
        var 줄 = Array.prototype.indexOf.call(부모tbody.children, tr);//외부에서 쓰는거 삼가자구
        //indexOf 쓰는 꼼수
        console.log(부모tr,부모tbody,td,칸,줄) // td 잘못 나옴 : closure problem

      })
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
