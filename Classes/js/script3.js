//  Getters e Setters
class Animal{
    constructor(race) {
        this._race = race;
    }
    get getAnimal(){
        return this._race;
    }

    set setAnimal(x){
        this._race = x;
    }
}

let myAnimal = new Animal("Angora");
myAnimal.setAnimal = "Vira-lata";
console.log(myAnimal.getAnimal);
