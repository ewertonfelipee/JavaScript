const paragraph = document.createElement("p");
const node = document.createTextNode("this is a paragraph");
paragraph.appendChild(node);

const element = document.querySelector("#myDiv");
element.appendChild(paragraph);
const child = document.querySelector("#p1");
//  insertBefore() method
element.insertBefore(paragraph, child);

//  ReplacingChild() method
const childd = document.querySelector("#p2");
element.replaceChild(paragraph, childd);

//  remove() method
// const ele = document.querySelector("#p2");
// ele.remove("#p2");
