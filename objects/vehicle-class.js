'use strict';


class Vehicle {
    constructor(name, wheels) {
      this.name = name;
      this.wheels = wheels;
    }
    
    
    drive(){
        return 'gears 1, 2, 3, 4, and 5'
    }
    
    stop() {
      return 'Clutch + brakes';
    }
    
    }



class Car extends Vehicle {
    constructor(name,wheels){
        wheels = 4;
        super(name,wheels)
    }
}

class Motorcycle extends Vehicle{
    constructor (name, wheels){
        // wheels = 2;
        super(name,2)
    }
    wheelie(){
       return 'Wheee looka at what I can do'
    }
}


module.exports = {Car,Motorcycle};
