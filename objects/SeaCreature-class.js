'use strict';

class SeaCreature {
    constructor(name, hasPinchers){
        this.name = name;
    
    }
    hobbies(){
        return 'not being eaten'
    }
    livesInWater(){
        return 'I live in the water'
    }
}

class Lobster extends SeaCreature{
    
    constructor(name, hasPinchers){
        super(name)
        this.hasPinchers = true;
    }
    petPeves(){
        return 'Being delicious'
    }
}

class Fish extends SeaCreature{
    constructor(name, hasPinchers){
        super(name)
        this.hasPinchers = false;

    }
}

module.exports = {Lobster, Fish};