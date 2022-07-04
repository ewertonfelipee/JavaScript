//  this keyword in a method
const person = {
    firstName : "Ewerton",
    lastName : "Felipe",
    fullName : function(){ //   fullName is a method of the person object
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

let x = this;
console.log(x);

function myfunc(){return this;}
console.log(myfunc());

"use strict";
function myFunc(){
    return this;
}
console.log(myFunc());

const person2 = {
    firstName : "Ewerton",
    lastName : "Felipe",
    myfunc2 : function(){ //   fullName is a method of the person object
        return this;
    }
};

console.log(person2.myfunc2());


const person3 = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
const person4 = {
    firstName : "Ewerton",
    lastName : "Felipe",
}
const y = person3.fullName.call(person2);
console.log(y);



const member = {
    firstName : "Felipe",
    lastName : "Ewerton",
}
let fullName = person.fullName.bind(member);
console.log(fullName());