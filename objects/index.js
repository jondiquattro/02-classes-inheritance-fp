'use strict';


const Vehicle = require('./vehicle-constructor.js');
const FlyingVehicle=require('./vehicle-constructor.js');
// const Vehicle = require('./vehicle-constructor.js');  was this

// const Vehicle = require('./class.js');
// const Vehicle = require('./factory.js');

// Implement a car and motorcycle
// const mazda = new Vehicle.Car('Mazda 3');
// console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

const F18 = new FlyingVehicle.Airplane('f18',)
console.log(F18.name);

const blackHawk = new FlyingVehicle.Helicopter('Black Hawk');
console.log(blackHawk.name, blackHawk.vertiicalTakeOff())