// setTimeout
let x = 0;
let myVar = setTimeout(function(){
    console.log("o x eh 0");
}, 1000); // will run afer 2000 milliseconds
x = 5;
if(x > 0){
    clearTimeout(myVar);
    console.log("o x passou de 0");
}

let myVar2 = setInterval(function(){
    console.log("Imprimindo o setInterval");
}, 500);

setTimeout(function(){
    console.log("nao precisamos mais testar o setInterval");
    clearInterval(myVar2);
}, 2000); // will run afer 2000 milliseconds