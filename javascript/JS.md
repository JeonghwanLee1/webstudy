디버깅 할 때, console.dir(document.body); 를 이용해서 내부 구조를 보고 하자(child 등)

var 입력창 = document.createElement('input');

입력창.focus();

var 바디 = document.body;

var 폼 = document.createElement('form');

document.body.append(폼);

폼은엔터를 치면 새로고침 -> e.preventDefault();

shift, unshift <-----------> pop, push

splice(위치,개수) -> pop처럼 리턴하고 사라짐(배열 리턴이라 인덱스 접근 해야함)

파이썬과 유사한 join이 가능 반대는 split

indexOf == find

e.target == 클릭된 애

e.target.parentNode == 그애의 부모

input 안이 value, 다른 태그는 textContent

font-size:35px

var array = Array(45); //크기 45

fill = enumerate

map은 리턴이 있다.

sort 내부에 함수 넣을수 있음.(p-c)>0

getElementBy ... 후 append보다는 appendchild 하자.

get by class 에선 [0] 으로 해야함(여러개)

반복문 안에 비동기 사용 시 closure 문제 발생

var 공 = document.createElement('div')

공.style.display='inline-block'

공.style.border='1px solid black'

공.style.borderRadius='10px'; //원래는 border-radius인데 빼기로 인식해서 대문자화

javascript로 class 못슴.. className로 써야함

document.getElementByClass = document.quarySelector(.클넴)

document.getElementById = document.quarySelector(#아디)

quarySelectorAll(여러개 가능)

width = 450

background = url() 0 0; <== 요걸 이동시킴 150px 0  

setInterval : 초마다 계속 실행 멈추는법? setInterval 함수를 리턴받아서 변수에 넣어서, clearInterval(변수); 하면됨 다시 시작하는건 코드에 복붙 ㅋ

setTimeout : 한번 하고 끝

Object.entries : 객체(딕셔너리)를 배열로 

Object.entries(딕셔너리).find((v)=>{return v[1]=='가위'} //['가위','150px'] 리턴.. findIndex도 가능

배열.includes(항목) // 코드 줄이기

shift + esc = 크롬 작업관리자

csss..
