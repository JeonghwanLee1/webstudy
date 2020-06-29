if(true){
    let num = 3;
    console.log(num);
    //let num = 7;//error
    num = 4;//재할당은 가능
}

console.log(num);//undefined. 블록 스코프

if(true){
    const cnum = 5;
    console.log(cnum);
    //cnum = 3;//error
}

console.log(cnum);//undefined

const obj = {'key':'value'};
//const obj = {'key2':'value'};
//틀은 유지한 채 value값만 바꿀 수 있음

obj.key = 'value2';
console.log(obj.key);
