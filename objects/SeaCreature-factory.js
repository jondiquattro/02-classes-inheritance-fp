'use strict';
  

const SeaCreature = () =>({
    livesInWater(){
        return 'I live in the water'
    },
    hobbies(){
        return 'not being eaten'
    }

})


function Lobster(name){
    function petPeves(){
        return 'Being delicious';
    }
    
    let lobster = Object.assign(
        {},
        {name},
        {hasPinchers: true},
        {petPeves},
        SeaCreature()
    )
    return Object.freeze(lobster);
}

function Fish (name){
    let fish = Object.assign(
        {},
        {name},
        {hasPinchers: false},
        SeaCreature()
    )
return Object.freeze(fish);

}
module.exports = {Lobster,Fish};