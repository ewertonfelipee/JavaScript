//  Static Method
class PC {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }

    //  If you want to use the myPC object inside the static method, you can 
    //  send it as a parameter
    static world(x) {
        return "World! " + x.name;
    }
}

let myPC = new PC("Samsung");

  // You can call 'hello()' on the Car Class:
console.log(PC.hello());
console.log(PC.world(myPC));
  // But NOT on a Car Object:
  // console.log(myPC.hello());
  // this will raise an error.