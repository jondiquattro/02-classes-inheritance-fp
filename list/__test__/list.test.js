'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });
  describe('shift operations', ()=>{
    it('it removes the first index and keeps fluidity', () => {
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      stuff.push('c');
      stuff.push('d');
      stuff.push('e');
      stuff.push('f');
      expect(stuff.shift()).toEqual('a');
      expect(stuff.length).toEqual(5)


    });
    it('it keeps fluidity', ()=>{
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      stuff.push('c');
      stuff.push('d');
      stuff.push('e');
      stuff.push('f');
      stuff.shift();
      expect(stuff).toEqual({
        length: 5,
        data:
         { '0': 'b',
           '1': 'c',
           '2': 'd',
           '3': 'e',
           '4': 'f', 
           '5': undefined} })
    })
  })//end shift describe
  describe('unshift operations', ()=>{
    it('Should insert item at the first index',()=>{
      let stuff = new List();
      stuff.push('b');
      stuff.push('c');
      stuff.push('d');
      stuff.push('e');
      stuff.push('f');
      stuff.unshift('a');

      expect(stuff).toEqual({
        length: 5,
        data:
         { '0': 'a',
           '1': 'b',
           '2': 'c',
           '3': 'd',
           '4': 'e', 
           '5': 'f',
          '6': undefined}})
    })

  })
  describe('slice operations', ()=>{
    it('removes an elemenent and returns a new array with element', ()=>{
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      stuff.push('c');
      stuff.push('d');
      stuff.push('e');
      stuff.push('f');
      expect(stuff.slice(1,3)).toEqual(['b','c','d'])
      expect(stuff).toEqual({
        length: 6,
        data:
         { '0': 'a',
           '1': 'b',
           '2': 'c',
           '3': 'd',
           '4': 'e', 
           '5': 'f',
          '6': undefined}})
    })
  })
  describe('splice operations', ()=>{
    it(`should delete a specified amount of elements(defaults to entire
       array and if passed a value inserts int deleted elements`,()=>{
        let stuff = new List();
        stuff.push('a');
        stuff.push('b');
        stuff.push('c');
        stuff.push('d');
        stuff.push('e');
        stuff.push('f');
        stuff.splice(2,4, 'hello', 'world')
        expect(stuff ).toEqual({
          length: 6,
          data:
           { '0': 'a',
             '1': 'b',
             '2': 'hello',
             '3': 'world',
             '4': 'e', 
             '5': 'f',
            '6': undefined}})

       })

    
  })









});
