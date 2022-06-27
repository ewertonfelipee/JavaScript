const fruits = new Map([["banana", 600], 
                        ["tomato", 100], 
                        ["oranges", 400]
                    ])
console.log(fruits);

// Deletes map element
fruits.delete("banana");
console.log(fruits);

// Return true or false if element exist in fruits map
console.log(fruits.has("banana"));


// Create a Map
const sports = new Map();

// Set Map Values
sports.set("football", 1000);
sports.set("basketball", 500);
sports.set("american football", 200);
sports.set("tenis", 300);

// Change basketball value
sports.set("basketball", 600);

// Return Map Values
console.log(sports);
console.log(sports.get("football"));
console.log(sports.size);

// pass the value and key
let txt = "";
sports.forEach(function(value, key){
    
    txt += key + " = " + value + "\n";
})
console.log(txt);


// pass the iterable variable
let text = ""
for(const x of sports.entries()){
    text += x + "\n";
}
console.log(text);