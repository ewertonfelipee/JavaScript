const element = document.getElementById("demoo");
const element2 = document.getElementById("intro");

document.getElementById("d").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;

document.getElementById("id").innerHTML = 
"The text from the intro paragraph is: " + element2.innerHTML;

const ele = document.getElementById("main");
const el = ele.getElementsByTagName("h5");

document.getElementById("demo").innerHTML = "The first paragraph (index 0) \
inside main is: '" + el[0].innerHTML;

document.getElementById("demo1").innerHTML = "The second paragraph (index 1) \
inside main is: '" + el[1].innerHTML;

const e = document.getElementsByClassName("Class");
document.getElementById("demo2").innerHTML = 
"The text from class name: " + e[0].innerHTML;

const elem = document.querySelectorAll("p.Class");
document.getElementById("demo3").innerHTML = "Some text here: " + elem[1].innerHTML;