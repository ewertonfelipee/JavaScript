console.log("Size String");
const Name = "ewerton";
const len = Name.length;
console.log(len);

console.log("Extracting String Parts");
console.log("slice()");
const str = "Apple, Banana, Kiwi";
const part = str.slice(7,13); // slice(start, end(not included))
console.log(part);
const part2 = str.slice(-12, -6); // negative position counted from the end of the string.
console.log(part2);
const part3 = str.slice(7); // if omit the second parameter, the method will slice out the rest of the string
console.log(part3);

console.log("substring()");
const sub = str.substring(1,7); // substring(start, end)
console.log(sub);
const sub2 = str.substring(1); // if omit the second parameter, the method will slice out the rest of the string
console.log(sub2);

console.log("substr()"); // substr is similar to slice()
// difference is that the second parameter specifies the length of the extracted part
const substrg = str.substr(7, 6); // substr(start, length)
console.log(substrg);
const substrg2 = str.substr(7); // if omit the second parameter, the method will slice out the rest of the string
console.log(substrg2);
const substrg3 = str.substr(-6);
console.log(substrg3); // negative position counted from the end of the string.