class Car{
    constructor(name, model,year){
        this.name = name;
        this.model = model;
        this.year = year;
    }

    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let car = new Car(); // the car object
car.name = "VW";
car.model = "gol";
car.year = 2020;

console.log(car);
console.log(car.name);
console.log(car.model);
console.log(car.year);

let car2 = new Car("Ferrari", "LaFerrari", 2022);// the car object
console.log(car2);
console.log(car2.name);
console.log(car2.model);
console.log(car2.year);

console.log("My car is " + car.age() + " years old");
console.log("My car is " + car2.age() + " years old");

// ===============================================================================

class myCar{
    constructor(name, model,year){
        this.name = name;
        this.model = model;
        this.year = year;
    }

    age(x){
        return x - this.year;
    }
}

let mycar = new myCar("Lambo", "Aventador", 2019);
console.log("My car is " + mycar.age(2022) + " years old");