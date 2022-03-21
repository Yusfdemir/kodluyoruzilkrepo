 let isim = prompt("isminizi girin");
document.getElementById("myName").textContent=isim;
let now=new Date();
document.getElementById("myClock").innerHTML=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`