'use strict';

  

const SeaCreature = function(name, hasPinchers = false){
    this.name = name;
    this.hasPinchers = hasPinchers;
}

SeaCreature.prototype.hobbies = () =>{
    return 'Not being eaten'
}
SeaCreature.prototype.livesInWater = () =>{

    return 'Lives in the water';
}

const Lobster = function(name){
    SeaCreature.call(this, name, true);
}

Lobster.prototype =new SeaCreature();

Lobster.prototype.petPeves = () =>{
    return 'Being delicious'
}
  
const Fish = function(name){
    SeaCreature.call(this, name, false);
}

Fish.prototype = new SeaCreature();

module.exports = {Lobster, Fish};