'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');
stuff.push('d');
stuff.push('e');
stuff.push('f');




let last = stuff.pop();


// console.log(stuff.length);
let x = stuff.splice(1,4,'hello', 'world')
// console.log(x);


console.log('after ', stuff);
