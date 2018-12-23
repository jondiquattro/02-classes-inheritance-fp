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
        super(name,2)
    }
    wheelie(){
       return 'Wheee looka at what I can do'
    }
}


class FlyingVehicle{
    constructor(name, wings){
        this.name = name;
        this.wings = wings;
    }
    flying (){
        return 'I can fly through the air!'
    }
    landing(){
        return 'I can land!'
    }
}

class Airplane extends FlyingVehicle{
    constructor(name,wings){
        wings = 2;
        super(name, wings)
    }
}

class Helicopter extends FlyingVehicle{
    constructor(name, wings){
        super(name, 2)

    }
    verticalTakeOff(){
        return 'I can take off vertically!';
    }
}

module.exports = {Car,Motorcycle,Airplane,Helicopter};
