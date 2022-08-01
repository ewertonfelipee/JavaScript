const fruits = ["Banana", "Orange", "Apple"];
//  push()
console.log("First Push");
fruits.push("Lemon");
console.log(fruits);

//  Arrays Methods
//  toString()
const x = document.querySelector("#demo").textContent = fruits.toString();
// fruits.toString();
// console.log(fruits);

//  join()
const a = document.querySelector("#demo").textContent = fruits.join(" : ");

//  pop()
console.log("Pop removes last element");
fruits.pop();
console.log(fruits);

//  push()
console.log("Second Push");
fruits.push("kiwi");
console.log(fruits);

console.log("Shift removes first element");
fruits.shift();
console.log(fruits);

console.log("unshift");
fruits.unshift("Apple");
console.log(fruits);

console.log("Changing by the index");
fruits[2] = "avocado";
console.log(fruits);

console.log("Add new element using length method");
fruits[fruits.length] = "Mango";
console.log(fruits);

console.log("delete element");
console.log("Use pop() or shift() method to delete element");
delete fruits[1];
console.log(fruits);

console.log("=========== New Array ===========");
console.log("Concat 2 arrays");
const sports1 = ["basketball", "volley"];
const sports2 = ["football", "american football"];
const arrConcat = sports1.concat(sports2);
console.log(arrConcat);

console.log("Concat 3 arrays");
const sports3 = ["chess", "handball", "baseball"];
const arrConcat2 = sports1.concat(sports2, sports3);
console.log(arrConcat2);

console.log("Concat an array with values");
const value = sports1.concat("hockey");
console.log(value);

console.log("splice()");
sports1.splice(0, 0, "chess");
console.log(sports1);
sports1.splice(1, 2, "football");
console.log(sports1);
sports1.splice(1, 1);
console.log(sports1);

console.log("=========== New Array ===========");
console.log("slice()");
console.log("before slice");
const brands = ["samsung", "apple", "nokia", "sony"];
console.log(brands);
const b = brands.slice(1,2);
console.log("after slice");
console.log(b);