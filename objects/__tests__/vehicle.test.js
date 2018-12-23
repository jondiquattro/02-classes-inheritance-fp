'use strict';

// const Vehicle = require('../vehicle-constructor.js');
// const Vehicle = require('../vehicle-class.js');
// const Vehicle = require('../vehicle-factory.js');
// const FlyingVehicle = require('../vehicle-class.js');
// const FlyingVehicle = require('../vehicle-constructor.js');
const FlyingVehicle = require('../vehicle-factory.js');
// const SeaCreature = require('../SeaCreature-factory.js')
const SeaCreature = require('../SeaCreature-class.js')







xdescribe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});


xdescribe('Flying Vehicles', () =>{
  describe('Airplanes', ()=>{
    let airplane = new FlyingVehicle.Airplane('F18');
    it('has 2 wings', ()=>{
      expect(airplane.wings).toEqual(2);
    })
    it('can fly', ()=>{
      expect(airplane.flying()).toBeTruthy();
    })
    it('can land', ()=>{
      expect(airplane.landing()).toBeTruthy();
    })
  })

  describe('Helicopters', ()=>{
    let helicopter = new FlyingVehicle.Helicopter('Blackhawk');
    it('has 2 wings', ()=>{
      expect(helicopter.wings).toEqual(2);
    })
    it('can fly', ()=>{
      expect(helicopter.flying()).toBeTruthy();
    })
    it('can land', ()=>{
      expect(helicopter.landing()).toBeTruthy();
    })
    it('Can take off vertically', ()=>{
      expect(helicopter.verticalTakeOff()).toBeTruthy();
    })
  })


})

describe('SeaCreatures', () =>{
  describe( 'Lobsters', ()=>{
    let lobster = new SeaCreature.Lobster('Rock-Lobster');
    it('lives in the sea',()=>{
      expect(lobster.livesInWater()).toBeTruthy();
    })
    it('likes to not be eaten',()=>{
      expect(lobster.hobbies()).toBeTruthy();

    })
    it('has pinchers',()=>{
      expect(lobster.hasPinchers).toEqual(true);
    })
    it('it hates being delicious',()=>{
      expect(lobster.petPeves()).toEqual('Being delicious');
    })
  })

  describe( 'Fish', ()=>{
    let fish = new SeaCreature.Fish('Cod');

    it('lives in the sea',()=>{
      expect(fish.livesInWater()).toBeTruthy();
    })
    it('likes to not be eaten',()=>{
      expect(fish.hobbies()).toBeTruthy();
    })
    it('has pinchers',()=>{
      expect(fish.hasPinchers).toEqual(false);
    })
    it('doesnt have any pet peves',()=>{
      expect(fish.petPeves).toEqual(undefined);
    })
  })

})