const obj = [
  {
    name : "ewerton",
    lastName : "felipe",
    age : 24,
    student : true,
    roleDetails : {
      role : "programmer",
      corporation : "x"
    },
    hobbies : ["watch anime", "read manga"]
  }
]

// obj to json
const jsonData = JSON.stringify(obj);

console.log(jsonData);

// json to obj
const objData = JSON.parse(jsonData);
console.log(objData);