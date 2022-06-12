//  Cria elemento
const elem = document.createElement("div");

elem.classList = "div-criada";

const container = document.querySelector("#container");
//  insere elemento filho
container.appendChild(elem);

//  insertBefore
const elem2 = document.createElement("div");
elem2.classList = "div-before";
const elem3 = document.querySelector("#contaier .div-criada");
container.insertBefore(elem2, elem3);

