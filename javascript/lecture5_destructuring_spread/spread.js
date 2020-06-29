
const student = {
    'name':'김구름'
};

//student + a 의 객체를 만들고 싶다
const univStudent ={
    ...student,              //이거 받고
    'major':'컴퓨터공학과'     //이거 추가
};
console.log(univStudent);

const oddNumbers = [1,3,5,7,9];
const evenNumbers = [2,4,6,8,10];

const allNumbers = [...oddNumbers, ...evenNumbers];
console.log(allNumbers);

//allNumbers 안에 있는 모든 숫자를 더하는 함수 sum : 인자는 allNumbers

// return num1+num2+num3+...+num10
function sum(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10){
    return num1+num2+num3+num4+num5+num6+num7+num8+num9+num10
}

const result = sum(...allNumbers);//가능

function sum2(...rest){//배열로서 받아옴
    console.log(rest);
    let local_sum = 0;
    rest.forEach(num=>local_sum+=num);
    return local_sum;
}
console.log(sum2(...allNumbers));

const univ ={
    'name':'김구름',
    'major':'컴공',
    'region':'서울'
};

const {name, ...rest} = univ; //나머지를 rest에
console.log(rest);




