// Create a set
const letters = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 8]); // Don't print second 8 on the console.log()

// letters.add("10"); // add value
// const a = 11; // create a variable
// letters.add(a); // add variable to the set
// console.log(letters.size);

// let txt = "";
// letters.forEach(function(value){
//     txt += value;
// })
// console.log(txt);
let txt = "";
for(const x of letters.values()){
    txt += x;
}
console.log(letters.values());
console.log(txt);