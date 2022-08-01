const arr = [45, 4, 9, 16, 25];
let txt = "";
arr.forEach(element = value => {
  txt += value + " ";
});
console.log("forEach() method");
console.log(txt);

//  ===========================================================================
console.log("map() method");
const a = [1,2,3,4,5];
myFoo = value => {
  return value * 2;
};
const arr2 = a.map(myFoo);
console.log(arr2);

//  ===========================================================================
console.log("filter() method");
const b = [13, 34, 65, 14, 55];
myFoo = value => {
  return value > 18;
}
const arrFilter = b.filter(myFoo);
console.log(arrFilter);

//  ===========================================================================
console.log("reduce() method");
const c = [45, 4, 9, 16, 25];
myFoo = (value1, value2) => {
    total = value1 + value2;
    return total;
}
let sum = c.reduce(myFoo, 100); // 100 is a initial value | is optional
console.log(sum);

//  ===========================================================================
console.log("reduceRight() method");
const d = [45, 4, 9, 16, 25];
myFoo = (value1, value2) => {
    total = value1 + value2;
    return total;
}
let sum2 = c.reduceRight(myFoo); // 100 is a initial value | is optional
console.log(sum2);

//  ===========================================================================
console.log("every() method"); //  is AND equivalent
const e = [19, 34, 65, 24, 55];
myFoo = value => {
  return value > 18;
}
const arrEvery = e.every(myFoo);
console.log(arrEvery);

//  ===========================================================================
console.log("some() method");  //  is OR equivalent
const f = [19, 34, 15, 24, 55];
myFoo = value => {
  return value > 18;
}
const arrSome = e.some(myFoo);
console.log(arrSome);

//  ===========================================================================
console.log("indexOf() method");
const g = [19, 34, 15, 24, 55];
let pos = g.indexOf(24);
console.log(pos);

//  ===========================================================================
console.log("lastIndexOf() method");
const h = [19, 34, 15, 24, 55, 24];
let p = h.lastIndexOf(24);
console.log(p);

//  ===========================================================================
console.log("find() method");
const j = [1, 4, 17, 19, 34, 15, 24, 55];
myFoo = value => {
  return value > 18;
}
const arrFind = j.find(myFoo);
console.log(arrFind);

//  ===========================================================================
console.log("findIndex() method");
const k = [1, 4, 17, 19, 34, 15, 24, 55];
myFoo = value => {
  return value > 18;
}
const arrFindIndex = j.findIndex(myFoo);
console.log(arrFindIndex);

//  ===========================================================================
console.log("from() method");
const myArr = Array.from("Ewerton");
console.log(myArr);

//  ===========================================================================
console.log("keys() method");
const array = [45, 4, 9, 16, 25];
const keys = array.keys();
let text = " ";
for(let x of keys){
  text += x + " ";
}
console.log(text);

//  ===========================================================================
console.log("entries() method");
const arrays = [45, 4, 9, 16, 25];
const entries = array.entries();
let texto = "";
for(let x of entries){
  texto += x + "\n";
}
console.log(texto);

//  ===========================================================================
console.log("includes() method");
const fruits = ["apple", "mango", "kiwi"];
const fruit = fruits.includes("kiwi");
console.log(fruit);