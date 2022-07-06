//  Without arrow function
HelloWorld = function(){
    return "ola mundo Without arrow function";
}
console.log(HelloWorld());

// With arrow function
HelloWorld2 = () =>{
    return "ola mundo With arrow function";
}
console.log(HelloWorld2());

//  Arrow functions return value by default
//  This works only if the function has only one statement
hello = () => "Ola";
console.log(hello());

// has only one parameter
hello = (val) => "Ola " + val;
console.log(hello("mundo"));

//  if and only if has only one parameter, the parentheses can be removed
hello = val => "Ola " + val;
console.log(hello("mundo"));