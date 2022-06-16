//inserindo click
const btn = document.querySelector("#btn");
console.log(btn);
btn.addEventListener("click", function() {

    console.log("Clicou");

    this.style.color = "red";
});

// click afetando outros elementos
const title = document.querySelector("#title");

title.addEventListener("click", function() {

    console.log("teste");

    let subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";
});

// double click

const subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function() {

    console.log("double click");
});