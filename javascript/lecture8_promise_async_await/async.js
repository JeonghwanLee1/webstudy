//async : 동기함수처럼 비동기함수 읽고 쓰기

function sayHello(name){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log(`내 이름은 ${name}이야`);
            resolve(name);
        },2000);
    })
}

async function foo(name){
    const resultName = await sayHello(name); //오래걸리니까 기다려요
    console.log("2초 뒤 실행될 코드");
}

function boo(name){
    sayHello(name);
    console.log("바로 실행될 코드")
}

foo("첫번째");
boo("두번째");
