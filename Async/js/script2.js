//  JS Async
//  setTimeout
setTimeout(hello, 1000);
function hello(){
    console.log("Hello World!");
}

//  setInterval
let mySet = setInterval(myFoo, 1000);
function myFoo(){
    let d = new Date();
    console.log((d.getMonth() + 1) + " " + d.getDate() + " " + d.getFullYear() + " " + d.getHours());
    clearInterval(myFoo);
}

setTimeout(function(){
    console.log("nao preciso mais do setInterval");
    clearInterval(mySet);
}, 2000);