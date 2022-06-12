const newParagraph = document.createElement("p");

const text = document.createTextNode("New paragraph");

newParagraph.appendChild(text);

const body = document.querySelector("body");
body.appendChild(newParagraph);

// insert container
//const container = document.createElement("container");
const container = document.getElementById("container");
const elem = document.createElement("span");
elem.appendChild(document.createTextNode("span text"));
container.appendChild(elem);
