//  Promise
const myPromise = new Promise((resolve, reject) => {

  const nome = "Ewerton";

  if(nome === "Ewerton"){
    resolve("Seu nome esta certo");
  }
  else{
    reject("Nao eh seu nome");
  }
});

// resolve or reject response
myPromise
.then((data) => {
  return data.toLowerCase();
})
//  then's chain
.then((ModifiedString) => {
  console.log(ModifiedString);
});

// Catch
const myPromise2 = new Promise((resolve, reject) => {

  const nome = "Felipe";

  if(nome === "Ewerton"){
    resolve("Seu nome esta certo");
  }
  else{
    reject("Nao eh seu nome");
  }
});

myPromise2
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log("ERROR! " + err);
});

// Various Promises with all
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 OK!");
  }, 4000);
})

const p2 = new Promise((resolve, reject) => {
  resolve("P2 OK!");
})

const p3 = new Promise((resolve, reject) => {
  resolve("P2 OK!");
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

// Various Promises with race
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 OK!");
  }, 4000);
})

const p5 = new Promise((resolve, reject) => {
  resolve("P5 OK!");
})

const p6 = new Promise((resolve, reject) => {
  resolve("P6 OK!");
})

const resolveRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});