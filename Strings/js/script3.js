console.log("Search Methods");
console.log("================================");
console.log("indexOf Method");
const str = "Please locate where 'locate' occurs!";
const s = str.indexOf("locate");
console.log(s);

console.log("");

console.log("lastIndexOf Method");
const st = str.lastIndexOf("locate");
console.log(st);

console.log("");

console.log("Search Method");
const S = str.search("occurs");
console.log(S);

console.log("");

console.log("match() Method");
const txt = "The rain in SPAIN stays mainly in the plain";
const t = txt.match(/ain/gi); //g Perform a global match /i perform a case-insensitive matching
console.log(t);

console.log("");

console.log("includes() Method");
const i = txt.includes("train");
//  returns a boolean if a string contain a specified value
console.log(i);