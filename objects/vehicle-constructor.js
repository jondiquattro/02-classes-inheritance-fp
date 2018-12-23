'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

const FlyingVehicle = function(name, wings) {
  this.name = name;
  this.wings = wings;
};

FlyingVehicle.prototype.flying = () => {
  return 'FLying Forward';
};

FlyingVehicle.prototype.landing = () => {
  return 'Can land';
};

// AirPlane Constructor
const Airplane = function(name) {
  FlyingVehicle.call(this, name, 2);
};

Airplane.prototype = new FlyingVehicle();

const Helicopter = function(name){
  FlyingVehicle.call(this,name, 2 )
}

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.verticalTakeOff = ()=>{
  return 'I can take off without a runway!'
}


module.exports = {Car, Motorcycle, Airplane, Helicopter};
