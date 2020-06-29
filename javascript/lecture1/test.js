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