// Criar elemento

const elem = document.createElement("h3");

elem.classList = "Testando-classe";

const text = document.createTextNode("este eh o texto do h3");

elem.appendChild(text);

// const container = document.querySelector("#container");
// container.appendChild(elem);

// selecionar o elemento que quer trocar
const title = document.querySelector("#title");
const pai = title.parentNode;
pai.replaceChild(elem, title);