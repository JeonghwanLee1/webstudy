console.log("hello world");
var var1 = document.getElementById("root");//id를 기준으로 DOM을 가져옴
console.log(var1);

var var2 = document.getElementById("root").innerHTML;
console.log(var2);

var var3 = document.getElementById("root").innerText;
console.log(var3);

//var1.innerText = "Hello no goorm";//변경 가능
//var1.innerHTML = <i>"hello"</i>;//이태릭 적용

var var4 = document.getElementById("goorm");
var4.getAttribute("href");
console.log(var4.getAttribute("href"));
var4.setAttribute("href","http://google.com");
console.log(var4.getAttribute("href"));

var var5 = document.getElementsByTagName("input");

console.log(var5);
console.log(var5[0].value);

function mysubmit(){
    var idVal = document.getElementsByTagName("input")[0].value;
    var pwVal = document.getElementsByTagName("input")[1].value;
    console.log(idVal);
    console.log(pwVal);
    alert("id : "+idVal+" passwd : "+pwVal);
}

//setTimeout(mysubmit,3000); 3000밀리세컨드 뒤에 mysubmit을 실행