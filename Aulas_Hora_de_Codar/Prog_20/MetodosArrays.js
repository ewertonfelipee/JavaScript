var arr = [1,2,3,4,5];

print(arr.length);

arr.push(10);
print(arr);

arr.pop();
print("pop:" + arr);

// unshift: add first position
arr.unshift(10);
print(arr);

// shift: remove first position
arr.shift();
print(arr);

// access last element
print(arr[arr.length - 1]);

print("is array? " + Array.isArray(5));
print("is array? " + Array.isArray(arr));

// indexOf
print("indexOf: " + arr.indexOf(5));

arr.splice(2, 1, 999);
print(arr);

array = arr.slice(1, 3);
print("slice: " + array);

// Join turns array in a string specifying separator ;
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
print(fruits.join(";"));
// converts an array to a string of (comma separated) array values.
print(fruits.toString());

// Reverse array
print(fruits.reverse());