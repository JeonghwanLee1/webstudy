try{
    console.log("try에 있는 문장");
    const result = document.getElementsByTagName(id);
}
catch(e){
    console.log("catch에 있는 문장");
    //console.log(e);
    console.log(e.name);
    console.log(e.message);
    //console.log(e.stack);
}
finally{
    console.log("finally");
}


try{
    console.log("try에 있는 문장");
    throw new Error("사용자가 정의한 에러가 발생");
    //throw "에러가 발생헀다";
}
catch(e){
    console.log("catch에 있는 문장");
    //console.log(e);
    console.log(e.name);
    console.log(e.message);
    //console.log(e.stack);
}
finally{
    console.log("finally");
}
