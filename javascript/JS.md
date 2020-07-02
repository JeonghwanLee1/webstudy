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

sort 내부에 함수 넣을수 있음.(p-c)
