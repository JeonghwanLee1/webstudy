const numarr = [1,2,3,4];
console.log(typeof numarr); //object

console.log(numarr.length); //길이

// JS에선 배열의 길이 != 배열의 요소 갯수
const arr = [];
arr[2] = 3; //arr의 0번 1번 인덱스가 비어있으므로 길이는 3, 요소개수는 1

//배열을 직접 건드리는 방식 .push
numarr.push(5,6);//5와 6 push
console.log(numarr);

//배열을 건드리지 않는 방식 .concat(추가요소)
const newarr = numarr.concat(7,8)
console.log(numarr);

//배열 속 요소 빼내기 .pop()
console.log(newarr.pop());

//배열 순회
const namearr = ['Kim','Lee','Park','Cho'];
for(let i =0;i<namearr.length;i++)
    {
        console.log(`내이름은 ${namearr[i]} 이야`);
    }

namearr.forEach(function (name){
    console.log(`내 이름은 ${name} 이야.`)
})

namearr.forEach( name =>console.log(`my name is ${name}`));
//arrow 함수

const numarr2 = [1,2,3,4,5];
const numarr3 = numarr2.map(num=>num*2);//새로운 값 리턴 매우 마니 사용
numarr2.map(num=>console.log(num));

console.log(numarr2);
console.log(numarr3);