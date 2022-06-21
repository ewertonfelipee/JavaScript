let x = "ewerton";

let x = 0; // SyntaxError: 'x' has already been declared

{
    let y = 0;
}
// y can't be used here

// Redeclaring Variables
let z = 10;
// here x is 10;
{
    let z = 2;
    // here x is 2
}
// here x is 10;

var_ex = 10; // ReferenceError: can't access lexical declaration 'var_ex' before initialization
let var_ex;

// Redeclaring a variable with let, in another block is allowed
let a = 2;
{
    let a = 3;
}
{
    let a = 4;
}