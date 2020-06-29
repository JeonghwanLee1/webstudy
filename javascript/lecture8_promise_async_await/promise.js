//promise : 비동기 처리를 위한 객체
//약속을 지켰을 때 resolve, 어기면 reject

asncFunction = new Promise((resove,reject)=>{});

function sayHello(name){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log(`내 이름은 ${name}이야`);
            resolve(name);
        },2000);
    })
}

sayHello("민철")
    .then((name)=>console.log(`그래 안녕 ${name}아`));
console.log("끝");