//기존의 함수
function addnum(num1,num2){
    //함수 본문
    return num1+num2;
}

//화살표 함수 = 이름X(람다함수)
//(매개변수) => {//함수 본문,리턴값}

//만약 매개변수가 하나라면 소괄호 생략가능
//만약 본문이 한 줄이라면 중괄호도 생략 가능
    //만약 중괄호가 생략됐다면 리턴값도 생략가능(리턴 암묵적)

const arrowAdd = (num1,num2) => num1+num2;//해주는 일이 하나밖에 없어서 알아서 리턴
const arrowAdd2 = (num,num2) => {return num+num2}; //중괄호가 있다면 반드시 리턴 명시


console.log(arrowAdd(10,3));

//숫자를 인자로 받아서 0보다 크면 숫자리턴, 0보다 같거나 작으면 0리턴
const isPos = num => (num>0) ? num : 0
console.log(isPos(-1));
console.log(isPos(5));

//콜백함수의 가독성을 높여줌
setTimeout(()=>console.log("hello"),3000);
