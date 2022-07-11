//  Inheritance
class Bicycle{
    constructor(brand){
        this.brand = brand;
    }
    present(){
        return  "I have a " + this.brand;
    }
}

class Model extends Bicycle{
    constructor(brand, model){
        super(brand);   //  refers to the parent class
        this.model = model;
    }
    show(){
        return this.present() + ", it is a " + this.model;
    }
}

let myBike = new Model();
myBike.brand = "Caloi";
myBike.model = "Mountain-Bike";

console.log(myBike.show());