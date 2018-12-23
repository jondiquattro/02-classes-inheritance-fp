'use strict';


//this will be the global function that the factory will use
const Vehicle = () => ({
    drive(){
      return 'I like to use my wheels to move';
    },
    stop(){
      return 'I wish I was driving';
    },
  });
  
  //this is what puts the parts of the object together
  function Car(name){
    let car = Object.assign(
      {},
      {name},
      {wheels: 4},
      Vehicle()
    );
    return Object.freeze(car);
  }

function Motorcycle(name){
    function wheelie(){
        return 'Wheeeee look what I can do!'
    }

    let motorcycle = Object.assign(
        {},
        {name},
        {wheels: 2},
        {wheelie},
        Vehicle()
    );

    return Object.freeze(motorcycle);

}

const FlyingVehicle = ()=>({
    flying(){
        return 'I can fly through the air!';
    },
    landing(){
        return 'I can land back on the ground';
    }
})

function Airplane(name){
    let airplane = Object.assign(
        {},
        {name},
        {wings: 2},
        FlyingVehicle()
    )
    return Object.freeze(airplane);
}

function Helicopter(name){

function verticalTakeOff(){
    return 'I can take off vertically!'
}
    let helicopter = Object.assign(
        {},
        {name},
        {wings: 2},
        {verticalTakeOff},
        FlyingVehicle()
    )
    return Object.freeze(helicopter);
}
module.exports = {Car,Motorcycle,Airplane,Helicopter };


