//  search method with string
let txt = "Hello World!";
let n = txt.search("rld!");
console.log(n);

//  search method with regex
let m = txt.search(/rld!/i);
console.log(m);


//  Using String replace() with string
let x = txt.replace("World!", "Ewerton!")
console.log(x);

//  search method with regex
let y = txt.replace(/World!/i, "Ewerton!");
console.log(y);

let text = "o Rato roeu a roupa do rei de roma";
console.log(text.match(/ro/gi));

console.log(text.match(/[r,R]/g));

console.log(text.match(/(ro|rei)/g));

//  Using test()
//  returns true or false depending on the result
console.log(/e/.test("test"));
console.log(/f/.test("test"));

//  Using exec()
//  Returns empty(null) object if the no match is found
console.log(/f/.exec("test"));
console.log(/e/.exec("test"));