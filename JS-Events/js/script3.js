// const x = document.querySelector("#event");
// document.querySelector("#demo").textContent = x.textContent;
document.querySelector("#btn").addEventListener("click", alertfoo);

function alertfoo(){
  alert("Hello World");
}

const x = document.querySelector("#btn2");
x.addEventListener("mouseover", foo1);
x.addEventListener("click", foo2);
x.addEventListener("mouseout", foo3);

function foo1(){
  document.querySelector("#demo").innerHTML += "Moused over!<br>";
}

function foo2(){
  document.querySelector("#demo").innerHTML += "Clicked!<br>";
}

function foo3(){
  document.querySelector("#demo").innerHTML += "Moused out!<br>";
}

//  Passing Parameters with anonymous function
let p1 = 10;
let p2 = 15;
const y = document.querySelector("#btn3");
y.addEventListener("click", foo4);
function foo4(){
  myFoo(p1, p2);
}

function myFoo(a, b){
  document.querySelector("#demo1").textContent =  a * b;
}
