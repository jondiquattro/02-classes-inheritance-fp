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


module.exports = {Car,Motorcycle };


