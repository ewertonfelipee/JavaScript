console.log("Replace String Content");
const txt = "My... My name is...";
console.log("Original text: " + txt);
const newText = txt.replace("My", "Your");
console.log("Replace only first match");
console.log(newText);

const txt2 = "Hello World";
const newText2 = txt2.replace(/World/i, "Mundo");
console.log(newText2);

const txt3 = "hi...hi, world!";
const newText3 = txt3.replace(/hi/g, "Hello");
console.log(newText3);

console.log("Converting to Lower and Upper case");
console.log(txt.toLowerCase());
console.log(txt.toUpperCase());

console.log("Concatenation");
const text1 = "Hello";
const text2 = "World!";
let text3 = text1.concat(" ", text2);
console.log(text3);

console.log("Removes whitespaces");
const texto = "       hi      ";
console.log("Before trim()");
console.log(texto);
console.log("After trim()");
const myTxt = texto.trim();
console.log(myTxt);

console.log("Converting a string to an array");
const string = "hello";
const txt4 = string.split("");
console.log(txt4);